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
         * @type {boolean}
         */
        this.wasClosest = false;

        /**
         * @type {Number}
         */
        this.distanceFromAnswer = null;

        /**
         * @type {Date}
         */
        this.answeredAt = null;

        /**
         * @type {number}
         */
        this.points = 0;

        hydrate(this, data);

        if (this.answeredAt && !(this.answeredAt instanceof Date)) {
            this.answeredAt = new Date(this.answeredAt);
        }
    }
}

module.exports = Answer;
