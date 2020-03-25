const { hydrate } = require('../funcs');

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
         * @type {Date}
         */
        this.rejoinedAt = new Date();

        /**
         * @type {boolean}
         */
        this.active = true;

        /**
         * @type {?Date}
         */
        this.leftAt = null;

        /**
         * @type {String}
         */
        this.websocketId = null;

        /**
         * @type {number}
         */
        this.score = 0;

        hydrate(this, data);
    }
}

module.exports = Player;
