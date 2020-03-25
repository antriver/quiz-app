const { hydrate } = require('../funcs');

class Answer {
    constructor(data) {
        /**
         * @type {Player}
         */
        this.player = null;

        /**
         * @type {Number}
         */
        this.questionId = null;

        /**
         * @type {string}
         */
        this.answer = '';

        /**
         * @type {boolean}
         */
        this.correct = false;

        hydrate(this, data);
    }
}

module.exports = Answer;
