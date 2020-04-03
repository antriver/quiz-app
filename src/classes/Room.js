const { hydrate } = require('../functions/utils');

class Room {
    constructor(data = {}) {
        /**
         * @type {string}
         */
        this.code = '';

        /**
         * @type {Object<Player>}
         */
        this.players = {};

        /**
         * @type {?Question}
         */
        this.currentQuestion = null;

        /**
         * @type {string}
         */
        this.hostWebsocketIds = [];

        hydrate(this, data);
    }

    /**
     * @param {Player} player
     */
    addPlayer(player) {
        this.players[player.id] = player;
    }

    /**
     * @param {string} websocketId
     *
     * @return {Player|undefined}
     */
    getPlayerByWebsocketId(websocketId) {
        return Object.values(this.players).find((p) => p.websocketId === websocketId);
    }

    /**
     * @param {?Question} question
     */
    setQuestion(question) {
        this.currentQuestion = question;
    }
}

module.exports = Room;
