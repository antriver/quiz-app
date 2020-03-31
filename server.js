const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');

const Answer = require('./src/classes/Answer');
const Player = require('./src/classes/Player');
const Question = require('./src/classes/Question');
const Room = require('./src/classes/Room');

const env = require('dotenv').config({ path: path.join(__dirname, '/.env') }).parsed;

const port = env.PORT;

// Fire it up
const expressApp = express();

const httpServer = http.createServer(expressApp);
const io = socketIo(httpServer);

// Start HTTP server
httpServer.listen(port, () => {
    console.log(`Listening on *: ${port}`);
});

expressApp.use(express.static('public'));

/**
 * Only one room is hard coded currently.
 * In future there could be multiple rooms.
 *
 * @type {Room[]}
 */
const rooms = [
    new Room({ name: 'Quiz' }),
];

const broadcastRoom = () => {
    const room = rooms[0];

    // Instead of just emitting the room to all sockets we are going to iterate over the connected sockets,
    // because some users (the hosts) should receive the full data.
    Object.values(io.sockets.connected).forEach((socket) => {
        emitRoomToSocket(socket, room);
    });
};

/**
 * @param socket
 * @param {Room} room
 */
const emitRoomToSocket = (socket, room) => {
    if (room.hostWebsocketIds.indexOf(socket.id) !== -1) {
        socket.emit('roomUpdated', room);
    } else {
        const strippedRoom = JSON.parse(JSON.stringify(room));
        if (strippedRoom.currentQuestion) {
            delete strippedRoom.currentQuestion.answer;

            Object.values(strippedRoom.currentQuestion.answers).forEach((answer) => {
                if (answer.player.websocketId !== socket.id) {
                    delete answer.answer;
                    delete answer.correct;
                }
            });
        }
        socket.emit('roomUpdated', strippedRoom);
    }
};

// For each WebSocket connection.
io.on('connection', (socket) => {
    console.log(socket.id, 'Connected', socket.request.connection.remoteAddress);
    broadcastRoom();

    const registerPlayer = (data) => {
        const room = rooms[0];

        if (!room.players[data.id]) {
            room.players[data.id] = new Player({ id: data.id, name: data.name });
        }

        room.players[data.id].name = data.name;
        room.players[data.id].rejoinedAt = new Date();
        room.players[data.id].active = true;
        room.players[data.id].leftAt = null;
        room.players[data.id].websocketId = socket.id;
    };

    // When a new user joins.
    // Add them to the room and broadcast to everyone.
    socket.on('registerPlayer', (data, callback) => {
        console.log(socket.id, 'Register Player', data ? data.name : null);

        if (data) {
            registerPlayer(data);

            const room = rooms[0];
            io.sockets.emit('newPlayer', {
                player: room.players[data.id]
            });

            broadcastRoom();
            if (typeof callback === 'function') {
                callback();
            }
        }
    });

    // When a user is confirming they're still here.
    // Add them to the room but don't broadcast.
    socket.on('reRegisterPlayer', (data, callback) => {
        console.log(socket.id, 'Re-Register Player', data ? data.name : null);
        if (data) {
            registerPlayer(data);

            if (typeof callback === 'function') {
                callback();
            }
        }
    });

    socket.on('disconnect', () => {
        const room = rooms[0];
        const player = room.getPlayerByWebsocketId(socket.id);

        console.log(socket.id, 'Disconnect', player ? player.name : null);

        const index = room.hostWebsocketIds.indexOf(socket.id);
        if (index !== -1) {
            room.hostWebsocketIds.splice(index, 1);
        }

        if (player) {
            player.active = false;
            player.leftAt = new Date();

            broadcastRoom();
        }
    });

    /**
     * Player functions...
     */

    // TODO: Change to http endpoint?
    socket.on('questionAnswered', (data) => {
        const room = rooms[0];

        console.log(socket.id, 'Question Answered', data.name, data.answer);

        const player = room.getPlayerByWebsocketId(socket.id);
        if (!player) {
            console.error(socket.id, 'Unknown player.');
            return;
        }

        if (!room.currentQuestion) {
            console.error(socket.id, 'No current question.');
            return;
        }

        if (data.questionId !== room.currentQuestion.id) {
            console.error(socket.id, 'Not the current question ID.', data.questionId);
            return;
        }

        if (!room.currentQuestion.started) {
            console.error(socket.id, 'Too early.');
            return;
        }

        if (room.currentQuestion.ended) {
            console.error(socket.id, 'Too late.');
            return;
        }

        // Check if player already answered.
        if (room.currentQuestion.answers.hasOwnProperty(player.id)) {
            console.error(socket.id, 'Already answered.');
            return;
        }

        const answer = new Answer({
            player,
            answer: data.answer,
            answeredAt: new Date()
        });

        if (answer.answer === room.currentQuestion.answer) {
            answer.correct = true;
            answer.points = room.currentQuestion.points;

            // It's possible for there to be a race condition and 2 people be first, but meh.
            if (room.currentQuestion.getCorrectAnswers().length < 1) {
                answer.points += 1;
                answer.wasFirst = true;
            }
        } else if (room.currentQuestion.evil) {
            answer.points = -room.currentQuestion.points;
        }

        player.score += answer.points;

        room.currentQuestion.answers[player.id] = answer;

        io.sockets.emit('playerAnswered', {
            answer
        });

        broadcastRoom();
    });

    /**
     * Host functions...
     */

    socket.on('becomeHost', (data, callback) => {
        const room = rooms[0];
        console.log(socket.id, 'Become Host');

        if (room.hostWebsocketIds.indexOf(socket.id) === -1) {
            room.hostWebsocketIds.push(socket.id);
        }

        broadcastRoom();
        if (typeof callback === 'function') {
            callback();
        }
    });

    socket.on('newQuestion', (data) => {
        const room = rooms[0];
        room.currentQuestion = new Question(data);
        console.log(socket.id, 'New Question', JSON.stringify(room.currentQuestion));
        broadcastRoom();
    });

    socket.on('clearQuestion', () => {
        const room = rooms[0];
        console.log(socket.id, 'Clear Question');
        room.currentQuestion = null;
        broadcastRoom();
    });

    socket.on('resetScores', () => {
        const room = rooms[0];
        console.log(socket.id, 'Reset Scores');
        Object.values(room.players).forEach((player) => {
            player.score = 0;
        });
        broadcastRoom();
    });

    socket.on('resetUsers', () => {
        const room = rooms[0];
        console.log(socket.id, 'Reset Scores');
        room.players = {};
        broadcastRoom();
    });

    socket.on('startQuestion', (questionId) => {
        const room = rooms[0];
        console.log(socket.id, 'Start Question', questionId);
        if (room.currentQuestion && questionId === room.currentQuestion.id) {
            room.currentQuestion.started = true;
        } else {
            console.log(socket.id, 'Invalid question ID.');
        }
        broadcastRoom();
    });

    socket.on('endQuestion', (questionId) => {
        const room = rooms[0];
        console.log(socket.id, 'End Question', questionId);
        if (room.currentQuestion && questionId === room.currentQuestion.id) {
            room.currentQuestion.ended = true;

            const answers = Object.values(room.currentQuestion.answers);
            // If it's a numbers question and nobody got it right give points to the players that were the closest.
            if (room.currentQuestion.getCorrectAnswers().length < 1 && answers.length > 0) {
                answers.forEach((a) => {
                    a.distanceFromAnswer = Math.abs(room.currentQuestion.answer - a.answer);
                });

                answers.sort((a, b) => {
                    if (a.distanceFromAnswer === b.distanceFromAnswer) {
                        return 0;
                    }

                    return a.distanceFromAnswer < b.distanceFromAnswer ? -1 : 1;
                });

                let closestDistance = null;
                answers.forEach((a) => {
                    if (closestDistance === null || a.distanceFromAnswer === closestDistance) {
                        a.wasClosest = true;
                        a.points = 1;
                        a.player.score += 1;
                    }
                    closestDistance = a.distanceFromAnswer;
                });
            }
        } else {
            console.log('Invalid question ID.');
        }
        broadcastRoom();
    });
});
