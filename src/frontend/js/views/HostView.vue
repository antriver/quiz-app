<template>
    <div v-if="isHost"
         id="host">
        <div id="left">

            <div id="room-code">
                <div class="alert alert-info">
                    Your room code is <strong>{{ room.code }}</strong>. Players will need this to join or they can use this link:
                    <br/>
                    <input type="text"
                           class="form-control"
                           readonly
                           :value="'https://questicals.com/' + room.code" />
                </div>
            </div>

            <div class="container">

                <!-- If a question has been created and the answer entered. -->
                <div v-if="roomQuestion"
                     class="text-center">
                    <h2 v-if="!roomQuestion.started">
                        Question Ready To Answer
                    </h2>
                    <h2 v-else-if="!roomQuestion.ended">
                        Question Is Being Answered
                    </h2>
                    <h2 v-else>
                        Answering Finished
                    </h2>

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

                    <div v-if="roomQuestion.started" id="answers">
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

                    <a class="btn btn-primary btn-lg"
                       @click.prevent="newQuestion('numbers')">New Numbers Question</a>
                </div>
            </div>
        </div>

        <div id="right">
            <div class="container">
                <Scores @remove-player="removePlayer" />

                <div class="text-center">
                    <a class="btn btn-sm btn-danger"
                       @click.prevent="resetScores">Reset Scores</a>

                    <a class="btn btn-sm btn-danger"
                       @click.prevent="resetPlayers">Reset Players</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Answers from '../components/Answers';
import AnswerInput from '../components/AnswerInput';
import Question from '@/classes/Question';
import { generateId } from '@/functions/utils';
import { mapState } from 'vuex';
import Scores from '@frontend/components/Scores';
import WebsocketMixin from '@frontend/mixins/WebsocketMixin';
import { validateRoom } from '@frontend/functions/rooms';

export default {
    components: {
        Scores,
        AnswerInput,
        Answers
    },

    mixins: [
        WebsocketMixin
    ],

    data() {
        return {
            /**
             * @type {?Question}
             */
            nextQuestion: null,

            validRoom: null,

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
            return Object.values(this.room.players)
                .filter(
                    (p) => p.active || this.room.currentQuestion.answers.hasOwnProperty(p.id)
                );
        }
    },

    created() {
        validateRoom(this.$route.params.room)
            .then(() => {
                this.validRoom = true;

                this.createSocket();

                // Tell the server this socket will be a host and should receive more info.
                // Hide the UI until we know this is done.
                this.$options.socket.emit('becomeHost', {}, () => {
                    this.isHost = true;
                });

                this.$options.socket.on('connect', () => {
                    this.isHost = false;
                    this.$options.socket.emit('becomeHost', {}, () => {
                        this.isHost = true;
                    });
                });
            })
            .catch(() => {
                this.validRoom = false;
            });
    },

    methods: {
        newQuestion(type) {
            this.nextQuestion = new Question({
                id: generateId(),
                type,
                points: type === 'numbers' ? 2 : 1
            });
        },

        setCorrectAnswer(answer) {
            this.nextQuestion.answer = answer;

            this.$options.socket.emit('newQuestion', this.nextQuestion);
        },

        startQuestion() {
            this.$options.socket.emit('startQuestion', this.roomQuestion.id);
        },

        endQuestion() {
            this.$options.socket.emit('endQuestion', this.roomQuestion.id);
        },

        clearQuestion() {
            this.$options.socket.emit('clearQuestion');
            this.nextQuestion = null;
        },

        resetScores() {
            this.$options.socket.emit('resetScores');
        },

        resetPlayers() {
            this.$options.socket.emit('resetUsers');
        },

        removePlayer(playerId) {
            this.$options.socket.emit('removePlayer', playerId);
        }
    }
};
</script>

<style lang="less">
@import (less, reference) "../../less/app.less";

#new-question-btns {
    padding: 10px;
    text-align: center;
    margin: auto;

    .btn {
        margin: 5px;
    }
}

@media (min-width: @screen-md-min) {
    #host {
        overflow: auto;
        position: relative;
        height: ~"calc(100vh - @{header-height})"; // 45px is header height.

        h2,
        h3 {
            &:first-child {
                margin-top: 0;
            }
        }

        #left {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            float:left;
            max-width: none;
            width: 70%;

            #room-code {
                padding: 15px;
                flex-grow: 0;
                flex-shrink: 0;
                width: 100%;
                text-align: center;

                .alert {
                    margin: 0;
                }
            }

            > .container {
                flex-grow: 1;
                flex-shrink: 1;
            }
        }

        #right {
            width: 30%;
            float:right;
            background: #fff;

            h3 {
                margin: 0 0 15px 0;
            }

            .scores {
                margin: 0 0 15px 0;
            }
        }

        .container {
            width: auto;
        }

        #answers {
            margin-top: 45px;
            min-width: 600px;

            .answers {
                margin-top: 0;
            }
        }
    }
}
</style>
