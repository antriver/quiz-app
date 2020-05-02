const { hydrate } = require('../functions/utils');

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
         * @type {Date}
         */
        this.startedAt = null;

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
         * Time limit to answer, in milliseconds.
         *
         * @type {?Number}
         */
        this.timeLimit = null;

        /**
         * Milliseconds left to answer.
         *
         * @type {?Number}
         */
        this.timeRemaining = null;

        /**
         * @type {Object<Answer>}
         */
        this.answers = {};

        hydrate(this, data);
    }

    /**
     * @param {Answer} answer
     */
    addAnswer(answer) {
        this.answers[answer.player.id] = answer;
    }

    /**
     * @return {Answer[]}
     */
    getAnswers() {
        return Object.values(this.answers);
    }

    /**
     * @return {Answer[]}
     */
    getCorrectAnswers() {
        return Object.values(this.answers).filter((a) => a.correct);
    }
}

module.exports = Question;
