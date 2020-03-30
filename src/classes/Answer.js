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

        /**
         * @type {boolean}
         */
        this.wasFirst = false;

        /**
         * @type {Date}
         */
        this.answeredAt = null;

        hydrate(this, data);

        if (this.answeredAt && !(this.answeredAt instanceof Date)) {
            this.answeredAt = new Date(this.answeredAt);
        }
    }
}

module.exports = Answer;
