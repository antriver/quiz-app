const { hydrate } = require('../functions/utils');

class Player {
    constructor(data = {}) {
        /**
         * @type {Number}
         */
        this.id = null;

        /**
         * @type {string}
         */
        this.name = '';

        /**
         * @type {Date}
         */
        this.joinedAt = new Date();

        /**
         * @type {boolean}
         */
        this.active = true;

        /**
         * @type {String}
         */
        this.websocketId = null;

        /**
         * @type {number}
         */
        this.score = 0;

        /**
         * @type {number}
         */
        this.manualScoreAdjustment = 0;

        hydrate(this, data);
    }
}

module.exports = Player;
