/**
 * Remove sensitive info from a room (like answers) before sending to a client.
 *
 * @param {Room} room
 * @param {string|null} [currentWebsocketId]
 *
 * @return {object}
 */
const sanitizeRoom = (room, currentWebsocketId = null) => {
    const strippedRoom = JSON.parse(JSON.stringify(room));
    if (strippedRoom.currentQuestion) {
        delete strippedRoom.currentQuestion.answer;

        Object.values(strippedRoom.currentQuestion.answers)
            .forEach((answer) => {
                if (answer.player.websocketId !== currentWebsocketId) {
                    delete answer.answer;
                    delete answer.correct;
                }
                delete answer.player.websocketId;
            });
    }

    return strippedRoom;
};

module.exports = {
    sanitizeRoom
};
