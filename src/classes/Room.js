class Room {
    constructor(name) {
        /**
         * @type {string}
         */
        this.name = name;

        /**
         * @type {Object.<number, Player>}
         */
        this.players = {};

        /**
         * @type {?Question}
         */
        this.currentQuestion = null;
    }

    /**
     * @param {Player} player
     */
    addPlayer(player) {
        this.players[player.id] = player;
    }

    /**
     * @param {?Question} question
     */
    setQuestion(question) {
        this.currentQuestion = question;
    }
}

module.exports = Room;
