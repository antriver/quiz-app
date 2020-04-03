const Answer = require('../../src/classes/Answer');
const Question = require('../../src/classes/Question');
const { calculateOnQuestionAnswered, calculateClosestAnswer, isCorrect } = require('../../src/functions/answers');

describe('answers', () => {
    describe('isCorrect', () => {
        it('Should check if letter answer is correct', () => {
            const question = new Question({
                type: 'letters',
                answer: 'J'
            });

            expect(isCorrect(question, new Answer({ answer: 'j' })))
                .toBe(true);
            expect(isCorrect(question, new Answer({ answer: 'J' })))
                .toBe(true);
            expect(isCorrect(question, new Answer({ answer: 'h' })))
                .toBe(false);
            expect(isCorrect(question, new Answer({ answer: 'H' })))
                .toBe(false);
            expect(isCorrect(question, new Answer({ answer: '' })))
                .toBe(false);
            expect(isCorrect(question, new Answer({ answer: ' ' })))
                .toBe(false);
            expect(isCorrect(question, new Answer({ answer: null })))
                .toBe(false);
        });

        it('Should check if number answer is correct', () => {
            const question = new Question({
                type: 'numbers',
                answer: 100
            });

            expect(isCorrect(question, new Answer({ answer: '100' })))
                .toBe(true);
            expect(isCorrect(question, new Answer({ answer: 100 })))
                .toBe(true);
            expect(isCorrect(question, new Answer({ answer: 100.000000001 })))
                .toBe(true);
            expect(isCorrect(question, new Answer({ answer: 99.9999999999 })))
                .toBe(false);
            expect(isCorrect(question, new Answer({ answer: 99 })))
                .toBe(false);
            expect(isCorrect(question, new Answer({ answer: Infinity })))
                .toBe(false);
            expect(isCorrect(question, new Answer({ answer: '0' })))
                .toBe(false);
            expect(isCorrect(question, new Answer({ answer: 0 })))
                .toBe(false);
            expect(isCorrect(question, new Answer({ answer: '' })))
                .toBe(false);
            expect(isCorrect(question, new Answer({ answer: ' ' })))
                .toBe(false);
            expect(isCorrect(question, new Answer({ answer: null })))
                .toBe(false);
        });
    });

    describe('calculateClosestAnswer', () => {
        it('Should do nothing for non-numbers question', () => {
            const question = new Question({ type: 'letters' });

            const a1 = new Answer({ answer: 'hello' });
            const a2 = new Answer({ answer: 'world' });
            const answers = [a1, a2];

            calculateClosestAnswer(question, answers);

            expect(a1.wasClosest)
                .toBe(null);
            expect(a1.distanceFromAnswer)
                .toBe(null);

            expect(a2.wasClosest)
                .toBe(null);
            expect(a2.distanceFromAnswer)
                .toBe(null);
        });

        it('Should do nothing with no answers', () => {
            const question = new Question({ type: 'numbers' });

            const answers = [];

            calculateClosestAnswer(question, answers);

            expect(answers)
                .toEqual([]);
        });

        const testData = [
            [
                'with exact answers',
                {
                    answer: 50,
                    type: 'numbers'
                },
                [
                    {
                        answer: 49,
                        expectWasClosest: null,
                        expectDistance: null,
                        expectPoints: 0
                    },
                    {
                        answer: 50,
                        expectWasClosest: null,
                        expectDistance: null,
                        expectPoints: 2
                    },
                    {
                        answer: 51,
                        expectWasClosest: null,
                        expectDistance: null,
                        expectPoints: 0
                    },
                ],
            ],
            [
                'with 1 close answer',
                {
                    answer: 50,
                    points: 2,
                    type: 'numbers'
                },
                [
                    {
                        answer: 42,
                        expectWasClosest: false,
                        expectDistance: 8,
                        expectPoints: 0
                    },
                    {
                        answer: 48,
                        expectWasClosest: true,
                        expectDistance: 2,
                        expectPoints: 1
                    },
                    {
                        answer: 59,
                        expectWasClosest: false,
                        expectDistance: 9,
                        expectPoints: 0
                    },
                ],
            ],
            [
                'with 2 close answers',
                {
                    answer: 50,
                    points: 2,
                    type: 'numbers'
                },
                [
                    {
                        answer: 42,
                        expectWasClosest: false,
                        expectDistance: 8,
                        expectPoints: 0
                    },
                    {
                        answer: 48,
                        expectWasClosest: false,
                        expectDistance: 2,
                        expectPoints: 0
                    },
                    {
                        answer: 49,
                        expectWasClosest: true,
                        expectDistance: 1,
                        expectPoints: 1
                    },
                    {
                        answer: 52,
                        expectWasClosest: false,
                        expectDistance: 2,
                        expectPoints: 0
                    },
                    {
                        answer: 59,
                        expectWasClosest: false,
                        expectDistance: 9,
                        expectPoints: 0
                    },
                    {
                        answer: 51,
                        expectWasClosest: true,
                        expectDistance: 1,
                        expectPoints: 1
                    },
                ],
            ],
        ];

        test.each(testData)(
            'Should calculate %p',
            (name, questionData, answersData) => {
                const question = new Question(questionData);

                /**
                 * @type {Answer[]}
                 */
                const answers = [];
                answersData.forEach((a, i) => {
                    const answer = new Answer({
                        answer: a.answer,
                        player: { id: i }
                    });
                    answers.push(answer);
                    calculateOnQuestionAnswered(question, answer);
                });

                calculateClosestAnswer(question);

                answersData.forEach((a, i) => {
                    expect(answers[i].wasClosest)
                        .toBe(a.expectWasClosest);
                    expect(answers[i].distanceFromAnswer)
                        .toBe(a.expectDistance);
                    expect(answers[i].points)
                        .toBe(a.expectPoints);
                });
            }
        );
    });
});
