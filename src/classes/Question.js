const { hydrate } = require('../funcs');

class Question {
    constructor(data = {}) {
        /**
         * @type {Number}
         */
        this.id = null;

        /**
         * @type {string}
         */
        this.type = '';

        /**
         * @type {string}
         */
        this.answer = '';

        /**
         * @type {boolean}
         */
        this.started = false;

        /**
         * @type {boolean}
         */
        this.ended = false;

        /**
         * @type {number}
         */
        this.points = 1;

        /**
         * @type {boolean}
         */
        this.evil = false;

        /**
         * @type {Answer[]}
         */
        this.answers = [];

        hydrate(this, data);
    }

    /**
     * @param {Answer} answer
     */
    addAnswer(answer) {
        this.answers.push(answer);
    }
}

module.exports = Question;
