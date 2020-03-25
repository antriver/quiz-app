const express = require('express');
const socketIo = require('socket.io');
const fs = require('fs');
const path = require('path');
const https = require('https');

const Answer = require('./src/classes/Answer');
const Player = require('./src/classes/Player');
const Question = require('./src/classes/Question');

const httpsCredentials = {
    cert: fs.readFileSync(path.join(__dirname, 'ssl/cert.crt')),
    key: fs.readFileSync(path.join(__dirname, 'ssl/key.key'))
};

const port = 2053;

// Fire it up
const expressApp = express();

const httpServer = https.createServer(httpsCredentials, expressApp);
const io = socketIo(httpServer);

// Start HTTP server
httpServer.listen(port, () => {
    console.log(`Listening on *: ${port}`);
});

expressApp.use(express.static('public'));

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
    console.log(webSocket.id, 'WebSocket connected', webSocket.request.connection.remoteAddress);

    webSocket.on('newQuestion', (data) => {
        console.log(webSocket.id, 'newQuestion', data);

        currentQuestion = new Question(data);
        console.log('New Question', currentQuestion);

        broadcastCurrentQuestion();
    });

    webSocket.on('clearQuestion', () => {
        console.log(webSocket.id, 'clearQuestion');

        currentQuestion = null;

        broadcastCurrentQuestion();
    });

    webSocket.on('resetScores', () => {
        console.log(webSocket.id, 'resetScores');

        Object.keys(players).forEach((id) => {
            players[id].score = 0;
        });

        broadcastPlayers();
    });

    webSocket.on('registerPlayer', (data) => {
        console.log(webSocket.id, 'registerPlayer', data);

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
        console.log(webSocket.id, 'disconnect');

        const player = getPlayerByWebsocketId(webSocket.id);

        console.log('Player left', player);

        if (player) {
            player.active = false;
            player.leftAt = new Date();

            io.sockets.emit('playerLeft', {
                player,
                players
            });
        }

        console.log('Players', players);
    });

    webSocket.on('getPlayers', (data, callback) => {
        console.log(webSocket.id, 'getPlayers', data);

        callback(players);
    });

    webSocket.on('questionAnswered', (data) => {
        console.log(webSocket.id, 'questionAnswered', data);

        const player = getPlayerByWebsocketId(webSocket.id);
        if (!player) {
            console.error(webSocket.id, 'questionAnswered', 'Unknown player.');
            return;
        }

        if (!currentQuestion) {
            console.error(webSocket.id, 'questionAnswered', 'No current question.');
            return;
        }

        if (data.questionId !== currentQuestion.id) {
            console.error(webSocket.id, 'questionAnswered', 'Not the current question ID.', data.questionId);
            return;
        }

        if (!currentQuestion.started) {
            console.error(webSocket.id, 'questionAnswered', 'Too early.');
            return;
        }

        if (currentQuestion.ended) {
            console.error(webSocket.id, 'questionAnswered', 'Too late.');
            return;
        }

        // Check if player already answered.

        const existingAnswer = currentQuestion.answers.find((a) => a.player.id === player.id);
        if (existingAnswer) {
            console.error(webSocket.id, 'questionAnswered', 'Already answered.');
            return;
        }

        const answer = new Answer({
            player,
            answer: data.answer
        });

        console.log('currentQuestion', currentQuestion);
        console.log('answer.answer', answer.answer);
        console.log('currentQuestion.answer', currentQuestion.answer);

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

    webSocket.on('startQuestion', (questionId) => {
        console.log(webSocket.id, 'startQuestion', questionId);

        console.log('Current question ID', currentQuestion ? currentQuestion.id : null);

        if (currentQuestion && questionId === currentQuestion.id) {
            currentQuestion.started = true;
        } else {
            console.log('Invalid question ID.');
        }

        broadcastCurrentQuestion();
    });

    webSocket.on('endQuestion', (questionId) => {
        console.log(webSocket.id, 'endQuestion', questionId);

        console.log('Current question ID', currentQuestion ? currentQuestion.id : null);

        if (currentQuestion && questionId === currentQuestion.id) {
            currentQuestion.ended = true;
        } else {
            console.log('Invalid question ID.');
        }

        broadcastCurrentQuestion();
    });
});
