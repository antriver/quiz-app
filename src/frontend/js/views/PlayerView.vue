<template>
    <div id="player">
        <img v-if="!isRegisteredPlayer || !(currentQuestion && !currentQuestion.ended)"
             id="corner-img"
             src="/assets/img/question.png" />

        <template v-if="validRoom === null">
            <i class="fas fa-spinner fa-spin" />
        </template>
        <template v-else-if="validRoom === false">
            <div>
                <div class="alert alert-danger">
                    This doesn't look like a link to a valid room.
                </div>
                <router-link class="btn btn-warning btn-lg"
                             to="/join">
                    Try A Different Code
                </router-link>
            </div>
        </template>
        <template v-else-if="!isRegisteredPlayer">
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
import WebsocketMixin from '@frontend/mixins/WebsocketMixin';
import { mapState } from 'vuex';
import { validateRoom } from '@frontend/functions/rooms';

export default {
    name: 'PlayerView',

    components: {
        AnswerInput,
        RegisterForm
    },

    mixins: [
        WebsocketMixin
    ],

    data() {
        return {
            validRoom: null
        };
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
        validateRoom(this.$route.params.room)
            .then(() => {
                this.validRoom = true;

                this.createSocket();

                this.$options.socket.on('roomUpdated', () => {
                    setTimeout(() => {
                        this.$options.socket.emit(
                            'reRegisterPlayer',
                            this.player
                        );
                    }, 500);
                });

                this.$options.socket.on('connect', () => {
                    if (this.player) {
                        this.$options.socket.emit(
                            'registerPlayer',
                            this.player
                        );
                    }
                });
            })
            .catch(() => {
                this.validRoom = false;
            });
    },

    methods: {
        /**
         * @param {Player} player
         */
        registered(player) {
            this.$options.socket.emit(
                'registerPlayer',
                player,
                () => {
                    this.$store.commit('setPlayer', player);
                }
            );
        },

        /**
         * @param {string} answer
         */
        answerChosen(answer) {
            this.$options.socket.emit('questionAnswered', {
                answer,
                questionId: this.currentQuestion.id
            });
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
