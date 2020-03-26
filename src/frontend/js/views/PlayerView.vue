<template>
    <div id="player">
        <template v-if="!isRegisteredPlayer">
            <RegisterForm @registered="registered" />
        </template>
        <template v-else>
            <AnswerInput v-if="currentQuestion && !currentQuestion.ended"
                         :active="currentQuestion.started"
                         :title="title"
                         :existing-choice="answer ? answer.answer : null"
                         @choice="answerChosen"></AnswerInput>
            <div v-else>
                Waiting for a question.
            </div>
        </template>
    </div>
</template>

<script>
import AnswerInput from '../components/AnswerInput';
import RegisterForm from '../components/RegisterForm';
import { mapState } from 'vuex';

export default {
    name: 'PlayerView',

    components: {
        AnswerInput,
        RegisterForm
    },

    computed: {
        ...mapState(['player', 'room']),

        isRegisteredPlayer() {
            return this.player && this.room && this.room.players[this.player.id];
        },

        currentQuestion() {
            return this.room.currentQuestion;
        },

        title() {
            if (!this.currentQuestion.started) {
                return 'Get ready to answer...';
            }

            if (this.answer) {
                return 'You have answered.';
            }


            return 'Select your answer...';
        },

        answer() {
            if (this.room && this.room.currentQuestion) {
                return this.room.currentQuestion.answers[this.player.id] || null;
            }

            return null;
        }
    },

    methods: {
        /**
         * @param {Player} player
         */
        registered(player) {
            console.log('Player registered', player);
            this.$store.commit('setPlayer', player);
        },

        /**
         * @param {string} answer
         */
        answerChosen(answer) {
            console.log('answerChosen', answer);
            this.$root.$options.socket.emit('questionAnswered', { answer, questionId: this.currentQuestion.id });
        }
    }
};
</script>
