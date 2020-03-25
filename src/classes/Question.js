const { hydrate } = require('../funcs');

class Question {
    constructor(data = {}) {
        this.id = null;
        this.type = '';
        this.answer = '';

        this.started = false;
        this.ended = false;

        this.points = 1;
        this.evil = false;

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
