const cors = require('cors');
const crypto = require('crypto');
const express = require('express');
const fs = require('fs');
const history = require('connect-history-api-fallback');
const http = require('http');
const https = require('https');
const path = require('path');
const randomWords = require('random-words');
const socketIo = require('socket.io');

const Room = require('./src/classes/Room');
const ServerRoom = require('./src/classes/ServerRoom');
const { sanitizeRoom } = require('./src/functions/rooms');

const env = require('dotenv').config({ path: path.join(__dirname, '/.env') }).parsed;

console.log('env', env);

const port = env.PORT;

// Fire it up
const expressApp = express();

expressApp.use(cors());

let httpServer;
if (env.HTTPS === 'true') {
    const httpsCredentials = {
        cert: fs.readFileSync(path.join(__dirname, 'ssl/cert.pem')),
        key: fs.readFileSync(path.join(__dirname, 'ssl/key.pem'))
    };
    httpServer = https.createServer(httpsCredentials, expressApp);
} else {
    httpServer = http.createServer(expressApp);
}

const io = socketIo(httpServer);

// Start HTTP server
httpServer.listen(port, () => {
    console.log(`Listening on *: ${port}`);
});

expressApp.use(history());
expressApp.use(express.static('public'));

/**
 * Only one room is hard coded currently.
 * In future there could be multiple rooms.
 *
 * @type {Object<string, ServerRoom>}
 */
const rooms = {};

/**
 * @param {string} code
 * @return {ServerRoom}
 */
const createRoom = (code) => {
    const room = new Room({ code });
    const serverRoom = new ServerRoom(room, io);
    rooms[code] = serverRoom;
    return serverRoom;
};

createRoom('quiz');

// For each WebSocket connection.
io.on('connection', (socket) => {
    console.log(socket.id, 'Connected default', socket.request.connection.remoteAddress);

    socket.on('disconnect', () => {
        console.log(socket.id, 'Disconnect');
        setTimeout(() => {
            // Kill any now empty rooms.
            Object.values(rooms).forEach((room) => {
                if (
                    Object.values(room.room.players).filter((p) => p.active).length < 1
                    && room.room.hostWebsocketIds.length < 1
                ) {
                    console.log('Deleting empty room ' + room.room.code);
                    delete rooms[room.room.code];
                }
            });
            console.log(Object.keys(rooms).length + ' active room(s).');
        }, 60000);
    });
});

/**
 * HTTP routes.
 */
expressApp.get('/api/rooms/:code', (req, res) => {
    const code = req.params.code;
    console.log('code', code);
    if (!code || !rooms.hasOwnProperty(code)) {
        res.status(404);
        res.end();
        return;
    }

    res.json(sanitizeRoom(rooms[code].room));
    res.end();
});

expressApp.post('/api/rooms', (req, res) => {
    let code = '';
    while (!code || rooms.hasOwnProperty(code)) {
        code = randomWords(2).join('-');
    }
    const serverRoom = createRoom(code);
    serverRoom.hostPassword = crypto.randomBytes(16).toString('hex');
    console.log('serverRoom.hostPassword', serverRoom.hostPassword);
    res.json({
        password: serverRoom.hostPassword,
        room: sanitizeRoom(serverRoom.room)
    });
    res.end();
});
