class PlayerList {
    constructor() {
        /**
         * @type {Object.<number, Player>}
         */
        this.players = {};
    }

    /**
     * @param {Object.<number, Player>} players
     */
    setPlayers(players) {
        this.players = players;
    }
}

module.exports = PlayerList;
