const { hydrate } = require('../funcs');


class Answer {
    constructor(data) {
        this.player = null;
        this.questionId = null;
        this.answer = '';
        this.correct = false;

        hydrate(this, data);
    }
}

module.exports = Answer;
