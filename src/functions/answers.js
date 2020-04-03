/**
 * @param {Question} question
 * @param {Answer} answer
 *
 * @return {boolean}
 */
const isCorrect = (question, answer) => {
    if (!question.answer || !answer.answer) {
        return false;
    }

    if (question.type === 'numbers') {
        return parseInt(question.answer, 10) === parseInt(answer.answer, 10);
    }

    return answer.answer.toUpperCase() === question.answer.toUpperCase();
};

/**
 * @param {Question} question
 * @param {Answer} answer
 */
const calculateOnQuestionAnswered = (question, answer) => {
    answer.correct = isCorrect(question, answer);

    if (answer.correct) {
        answer.points = question.points;

        // Check for first answer.
        // It's possible for there to be a race condition and 2 people be first, but meh.
        if (question.getCorrectAnswers().length < 1) {
            answer.points += 1;
            answer.wasFirst = true;
        }
    } else {
        if (question.evil) {
            answer.points = -question.points;
        }
    }

    // Add answer to the question.
    question.addAnswer(answer);

    if (answer.player) {
        answer.player.score -= answer.points;
    }
};

/**
 * @param {Question} question
 */
const calculateOnQuestionEnded = (question) => {
    if (question.type === 'numbers') {
        calculateClosestAnswer(question);
    }
};

/**
 * @param {Question} question
 */
const calculateClosestAnswer = (question) => {
    if (question.type !== 'numbers') {
        return;
    }

    const answers = question.getAnswers();
    if (answers.length < 1) {
        return;
    }

    // If there are any correct answers skip the closest check.
    if (question.getCorrectAnswers().length > 0) {
        return;
    }

    // Remember the closest answer.
    let closestDistance = Infinity;
    answers.forEach((answer) => {
        answer.distanceFromAnswer = Math.abs(question.answer - answer.answer);
        closestDistance = Math.min(closestDistance, answer.distanceFromAnswer);
    });

    answers.forEach((answer) => {
        if (answer.distanceFromAnswer === closestDistance) {
            answer.wasClosest = true;
            answer.points = Math.floor(question.points / 2);
        } else {
            answer.wasClosest = false;
        }

        if (answer.player) {
            answer.player.score += answer.points;
        }
    });
};

module.exports = {
    isCorrect,
    calculateOnQuestionAnswered,
    calculateOnQuestionEnded,
    calculateClosestAnswer
};
