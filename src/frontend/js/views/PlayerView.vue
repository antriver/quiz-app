<template>
    <div id="player">
        <template v-if="!currentPlayer">
            <RegisterForm @registered="registered" />
        </template>
        <template v-else>
            <AnswerInput v-if="currentQuestion && !currentQuestion.ended"
                         @choice="answerChosen"
                         :active="currentQuestion.started"
                         :title="currentQuestion.started ? 'Select your answer...' : 'Get ready to answer.'"
                         :question="currentQuestion"></AnswerInput>
            <div v-else>
                Waiting for a question.
            </div>
        </template>
    </div>
</template>

<script>
import Question from '@/classes/Question';
import AnswerInput from '../components/AnswerInput';
import RegisterForm from '../components/RegisterForm';

export default {
    name: 'PlayerView',

    components: {
        AnswerInput,
        RegisterForm
    },

    data() {
        return {
            currentPlayer: null,
            currentQuestion: null
        };
    },

    created() {
        this.$root.$options.socket.on('questionUpdated', (data) => {
            console.log('questionUpdated', data);
            this.currentQuestion = data ? new Question(data) : null;
            console.log('questionUpdated', this.currentQuestion);
        });
    },

    methods: {
        /**
         * @param {Player} player
         */
        registered(player) {
            console.log('Player registered', player);
            this.currentPlayer = player;
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
