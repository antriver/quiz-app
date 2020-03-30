<template>
    <div v-if="isHost"
         id="host">
        <!-- If a question has been created and the answer entered. -->
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
                   @click.prevent="startQuestion">Start Answering</a>
            </div>
            <div v-else-if="!roomQuestion.ended">
                <a class="btn btn-danger btn-lg"
                   @click.prevent="endQuestion">Stop Answering</a>
            </div>
            <div v-else>
                <a class="btn btn-warning btn-lg"
                   @click.prevent="clearQuestion">Next Question</a>
            </div>

            <div v-if="roomQuestion.started">
                <h3>Answers</h3>
                <Answers />
            </div>
        </div>

        <!-- If a question has been created but the answer entered. -->
        <template v-else-if="nextQuestion">
            <AnswerInput title="Provide the correct answer."
                         :question-type="nextQuestion.type"
                         :question="nextQuestion"
                         :active="true"
                         @choice="setCorrectAnswer"></AnswerInput>
        </template>

        <!-- If no question has been created. -->
        <div v-else
             id="new-question-btns">
            <a class="btn btn-primary btn-lg"
               @click.prevent="newQuestion('letters')">New Letters Question</a>

            <a class="btn btn-primary btn-lg"
               @click.prevent="newQuestion('multiple')">New Multiple Choice Question</a>

            <!--<a class="btn btn-primary btn-lg"
                   @click.prevent="newQuestion('numbers')">New Numbers Question</a>-->

            <Scores />

            <a class="btn btn-sm btn-danger"
               @click.prevent="resetScores">Reset Scores</a>

            <a class="btn btn-sm btn-danger"
               @click.prevent="resetPlayers">Reset Players</a>
        </div>
    </div>
</template>

<script>
import Answers from '../components/Answers';
import AnswerInput from '../components/AnswerInput';
import Question from '@/classes/Question';
import { generateId } from '@/funcs';
import { mapState } from 'vuex';
import Scores from '@frontend/components/Scores';

export default {
    components: { Scores, AnswerInput, Answers },

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
        },

        resetPlayers() {
            this.$root.$options.socket.emit('resetUsers');
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
