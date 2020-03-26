<template>
    <div v-if="isHost"
         id="host">
        <div v-if="roomQuestion"
             class="text-center">
            <h3 v-if="!roomQuestion.started">
                Question Ready
            </h3>
            <h3 v-else-if="!roomQuestion.ended">
                Question Started
            </h3>
            <h3 v-else>
                Question Ended
            </h3>

            <p>
                <strong>Correct Answer:</strong> {{ roomQuestion.answer }}
            </p>

            <div v-if="!roomQuestion.started">
                <a class="btn btn-success btn-lg"
                   @click.prevent="startQuestion">Start Question</a>
            </div>
            <div v-else-if="!roomQuestion.ended">
                <a class="btn btn-danger btn-lg"
                   @click.prevent="endQuestion">End Question</a>
            </div>
            <div v-else>
                <a class="btn btn-warning btn-lg"
                   @click.prevent="clearQuestion">Next Question</a>
            </div>

            <div v-if="roomQuestion.started">
                <h3>Answers</h3>
                <table class="table table-striped">
                    <tbody>
                        <tr v-for="answer in answers"
                            :key="answer.player.id">
                            <td class="text-left">
                                {{ answer.player.name }}
                            </td>
                            <td class="text-right">
                                {{ answer.answer }}
                                <span v-if="answer.correct"
                                      class="label label-success">Correct</span>
                                <span v-else-if="answer.answer"
                                      class="label label-danger">Incorrect</span>
                                <span v-else
                                      class="label label-default">Unanswered</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <template v-else-if="nextQuestion">
            <AnswerInput v-if="nextQuestion && !nextQuestion.answer"
                         title="Provide the correct answer."
                         :question="nextQuestion"
                         :active="true"
                         @choice="setCorrectAnswer"></AnswerInput>
        </template>
        <div v-else
             id="new-question-btns">
            <a class="btn btn-primary btn-lg"
               @click.prevent="newQuestion('letters')">New Letters Question</a>

            <!--<a class="btn btn-primary btn-lg"
                   @click.prevent="newQuestion('multiple')">New Multiple Choice Question</a>

                <a class="btn btn-primary btn-lg"
                   @click.prevent="newQuestion('numbers')">New Numbers Question</a>-->
            <br />
            <br />
            <br />

            <Scores />

            <a class="btn btn-sm btn-danger"
               @click.prevent="resetScores">Reset Scores</a>
        </div>
    </div>
</template>

<script>
import Answer from '@/classes/Answer';
import AnswerInput from '../components/AnswerInput';
import Question from '@/classes/Question';
import { generateId } from '@/funcs';
import { mapState } from 'vuex';
import Scores from '@frontend/components/Scores';

export default {
    components: { Scores, AnswerInput },

    data() {
        return {
            /**
             * @type {?Question}
             */
            nextQuestion: null,

            isHost: false
        };
    },

    computed: {
        ...mapState(['room']),

        roomQuestion() {
            return this.room ? this.room.currentQuestion : null;
        },

        players() {
            // Return only currently connected users, or those that have answered.
            return Object.values(this.room.players).filter(
                (p) => p.active || this.room.currentQuestion.answers.hasOwnProperty(p.id)
            );
        },

        answers() {
            if (!this.room || !this.room.currentQuestion) {
                return [];
            }

            const answers = this.players.map((player) => {
                if (this.room.currentQuestion.answers.hasOwnProperty(player.id)) {
                    return this.room.currentQuestion.answers[player.id];
                }

                return new Answer({ player });
            });

            answers.sort((a, b) => {
                if (a.answeredAt && b.answeredAt) {
                    return a.answeredAt > b.answeredAt ? 1 : -1;
                } else if (a.answeredAt) {
                    return -1;
                } else if (b.answeredAt) {
                    return 1;
                }

                return a.player.name < b.player.name;
            });

            return answers;
        }
    },

    created() {
        // Tell the server this socket will be a host and should receive more info.
        // Hide the UI until we know this is done.
        this.$root.$options.socket.emit('becomeHost', {}, () => {
            this.isHost = true;
        });
    },

    methods: {
        newQuestion(type) {
            this.nextQuestion = new Question({
                id: generateId(),
                type
            });
        },

        setCorrectAnswer(answer) {
            this.nextQuestion.answer = answer;

            this.$root.$options.socket.emit('newQuestion', this.nextQuestion);
        },

        startQuestion() {
            this.$root.$options.socket.emit('startQuestion', this.roomQuestion.id);
        },

        endQuestion() {
            this.$root.$options.socket.emit('endQuestion', this.roomQuestion.id);
        },

        clearQuestion() {
            this.$root.$options.socket.emit('clearQuestion');
            this.nextQuestion = null;
        },

        resetScores() {
            this.$root.$options.socket.emit('resetScores');
        }
    }
};
</script>

<style lang="less">
#host {
    > div {
        width: 100%;
        max-width: 400px;
    }
}
#new-question-btns {
    padding: 10px;
    text-align: center;
    margin: auto;

    .btn {
        margin: 5px;
    }
}
</style>
