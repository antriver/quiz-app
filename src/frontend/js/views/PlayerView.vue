<template>
    <div id="player">
        <img v-if="!isRegisteredPlayer || !(currentQuestion && !currentQuestion.ended)"
             id="corner-img"
             src="/assets/img/question.png" />

        <template v-if="!isRegisteredPlayer">
            <RegisterForm @registered="registered" />
        </template>
        <template v-else>
            <AnswerInput v-if="currentQuestion && !currentQuestion.ended"
                         :questionType="currentQuestion.type"
                         :active="currentQuestion.started"
                         :title="title"
                         :existing-choice="answer ? answer.answer : null"
                         @choice="answerChosen"></AnswerInput>
            <div v-else>
                Wait for the host to send you a question...
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

    created() {
        this.$root.$options.socket.on('roomUpdated', () => {
            setTimeout(() => {
                this.$root.$options.socket.emit(
                    'reRegisterPlayer',
                    this.player
                );
            }, 500);
        });

        this.$root.$options.socket.on('connect', () => {
            if (this.player) {
                this.$root.$options.socket.emit(
                    'registerPlayer',
                    this.player
                );
            }
        });
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

<style lang="less">
#corner-img {
    position: absolute;
    bottom: 12px;
    right: 12px;
    width: 150px;
    z-index: -1;
}
</style>
