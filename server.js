const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const Answer = require('./src/classes/Answer');
const Player = require('./src/classes/Player');
const Question = require('./src/classes/Question');
const Room = require('./src/classes/Room');

const port = 2053;

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
 * Not used yet.
 * 
 * @type {Room[]}
 */
const rooms = [
    new Room('Quiz'),
];

/**
 * @type {Object<number, Player>}
 */
const players = {};

/**
 * @type {Question}
 */
let currentQuestion = null;

/**
 * @param {string} websocketId
 *
 * @return {Player|undefined}
 */
const getPlayerByWebsocketId = (websocketId) => {
    return Object.values(players).find((p) => p.websocketId === websocketId);
};

const broadcastPlayers = () => {
    io.sockets.emit('playersUpdated', {
        players
    });
};

const broadcastCurrentQuestion = () => {
    let broadcastData = null;
    if (currentQuestion) {
        broadcastData = JSON.parse(JSON.stringify(currentQuestion));
        delete broadcastData.answer;
    }
    io.sockets.emit('questionUpdated', broadcastData);
};

// For each WebSocket connection.
io.on('connection', (webSocket) => {
    console.log(webSocket.id, 'Connected', webSocket.request.connection.remoteAddress);

    webSocket.on('registerPlayer', (data) => {
        console.log(webSocket.id, 'Register Player', data);

        if (!players[data.id]) {
            players[data.id] = new Player(data.id, data.name);
        }

        players[data.id].name = data.name;
        players[data.id].rejoinedAt = new Date();
        players[data.id].active = true;
        players[data.id].leftAt = null;
        players[data.id].websocketId = webSocket.id;

        io.sockets.emit('newPlayer', {
            player: players[data.id]
        });

        broadcastPlayers();
    });

    webSocket.on('disconnect', () => {
        const player = getPlayerByWebsocketId(webSocket.id);

        console.log(webSocket.id, 'Disconnect', player);

        if (player) {
            player.active = false;
            player.leftAt = new Date();

            io.sockets.emit('playerLeft', {
                player,
                players
            });
        }
    });

    webSocket.on('getPlayers', (data, callback) => {
        callback(players);
    });

    /**
     * Player functions...
     */

    webSocket.on('questionAnswered', (data) => {
        console.log(webSocket.id, 'Question Answered', data);

        const player = getPlayerByWebsocketId(webSocket.id);
        if (!player) {
            console.error(webSocket.id, 'Unknown player.');
            return;
        }

        if (!currentQuestion) {
            console.error(webSocket.id, 'No current question.');
            return;
        }

        if (data.questionId !== currentQuestion.id) {
            console.error(webSocket.id, 'Not the current question ID.', data.questionId);
            return;
        }

        if (!currentQuestion.started) {
            console.error(webSocket.id, 'Too early.');
            return;
        }

        if (currentQuestion.ended) {
            console.error(webSocket.id, 'Too late.');
            return;
        }

        // Check if player already answered.
        const existingAnswer = currentQuestion.answers.find((a) => a.player.id === player.id);
        if (existingAnswer) {
            console.error(webSocket.id, 'Already answered.');
            return;
        }

        const answer = new Answer({
            player,
            answer: data.answer
        });

        if (answer.answer === currentQuestion.answer) {
            answer.correct = true;
            player.score += currentQuestion.points;
        } else if (currentQuestion.evil) {
            player.score -= currentQuestion.points;
        }

        io.sockets.emit('playerAnswered', {
            answer
        });

        broadcastPlayers();
    });

    /**
     * Host functions...
     */

    webSocket.on('newQuestion', (data) => {
        currentQuestion = new Question(data);
        console.log(webSocket.id, 'New Question', currentQuestion);
        broadcastCurrentQuestion();
    });

    webSocket.on('clearQuestion', () => {
        console.log(webSocket.id, 'Clear Question');
        currentQuestion = null;
        broadcastCurrentQuestion();
    });

    webSocket.on('resetScores', () => {
        console.log(webSocket.id, 'Reset Scores');
        Object.keys(players).forEach((id) => {
            players[id].score = 0;
        });
        broadcastPlayers();
    });

    webSocket.on('startQuestion', (questionId) => {
        console.log(webSocket.id, 'Start Question', questionId);
        if (currentQuestion && questionId === currentQuestion.id) {
            currentQuestion.started = true;
        } else {
            console.log(webSocket.id, 'Invalid question ID.');
        }
        broadcastCurrentQuestion();
    });

    webSocket.on('endQuestion', (questionId) => {
        console.log(webSocket.id, 'End Question', questionId);
        if (currentQuestion && questionId === currentQuestion.id) {
            currentQuestion.ended = true;
        } else {
            console.log('Invalid question ID.');
        }
        broadcastCurrentQuestion();
    });
});
