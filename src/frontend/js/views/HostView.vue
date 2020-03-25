<template>
    <div id="host">
        <template v-if="!broadcastQuestion">
            <div v-if="!currentQuestion"
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

                <a class="btn btn-sm btn-danger"
                   @click.prevent="resetScores">Reset Scores</a>
            </div>

            <AnswerInput v-if="currentQuestion && !currentQuestion.answer"
                         title="Provide the correct answer."
                         :question="currentQuestion"
                         :active="true"
                         @choice="setCorrectAnswer"></AnswerInput>
        </template>
        <div v-else-if="currentQuestion"
             class="text-center">
            <h3 v-if="!broadcastQuestion.started">
                Question Ready
            </h3>
            <h3 v-else-if="!broadcastQuestion.ended">
                Question Started
            </h3>
            <h3 v-else>
                Question Ended
            </h3>

            <p>
                <strong>Correct Answer:</strong> {{ currentQuestion.answer }}
            </p>

            <div v-if="!broadcastQuestion.started">
                <a class="btn btn-success btn-lg"
                   @click.prevent="startQuestion">Start Question</a>
            </div>
            <div v-else-if="!broadcastQuestion.ended">
                <a class="btn btn-danger btn-lg"
                   @click.prevent="endQuestion">End Question</a>
            </div>
            <div v-else>
                <a class="btn btn-warning btn-lg"
                   @click.prevent="clearQuestion">Next Question</a>
            </div>

            <div v-if="broadcastQuestion.started">
                <h3>Answers</h3>
                <table class="table table-striped">
                    <tr v-for="answer in answers"
                        :key="answer.player.id">
                        <td class="text-left">{{ answer.player.name }}</td>
                        <td class="text-right">
                            {{ answer.answer }}
                            <span v-if="answer.correct"
                                  class="label label-success">Correct</span>
                            <span v-else
                                  class="label label-danger">Incorrect</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import Question from '@/classes/Question';
import AnswerInput from '../components/AnswerInput';
import { generateId } from '@/funcs';

export default {
    components: { AnswerInput },
    data() {
        return {
            /**
             * @type {?Question}
             */
            currentQuestion: null,

            broadcastQuestion: null,

            answers: []
        };
    },

    created() {
        this.$root.$options.socket.on('questionUpdated', (data) => {
            if (data) {
                this.broadcastQuestion = new Question(data);
            } else {
                this.broadcastQuestion = null;
            }
        });

        this.$root.$options.socket.on('playerAnswered', (data) => {
            console.log('playerAnswered', data);

            this.answers.push(data.answer);
        });
    },

    methods: {
        newQuestion(type) {
            this.currentQuestion = new Question({
                id: generateId(),
                type
            });
        },

        setCorrectAnswer(answer) {
            this.currentQuestion.answer = answer;

            this.$root.$options.socket.emit('newQuestion', this.currentQuestion);
        },

        startQuestion() {
            this.$root.$options.socket.emit('startQuestion', this.currentQuestion.id);

            this.answers = [];
        },

        endQuestion() {
            this.$root.$options.socket.emit('endQuestion', this.currentQuestion.id);
        },

        clearQuestion() {
            this.$root.$options.socket.emit('clearQuestion');
            this.currentQuestion = null;
        },

        resetScores() {
            this.$root.$options.socket.emit('resetScores');
        }
    }
};
</script>

<style lang="less">
#new-question-btns {
    padding: 10px;
    text-align: center;
    margin: auto;

    .btn {
        margin: 5px;
    }
}
</style>
