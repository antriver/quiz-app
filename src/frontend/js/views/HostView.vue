<template>
    <div v-if="isHost"
         id="host">
        <div id="left">

            <div id="room-code">
                <div class="alert alert-info">
                    <p>Your room code is <strong>{{ room.code }}</strong>. Players can join with this link:</p>
                    <input type="text"
                           class="form-control text-center"
                           readonly
                           :value="'https://questicals.com/' + room.code" />
                    <p>The page you are currently on is the only way to host the room. Bookmark it if you don't want to lose it!</p>
                </div>
            </div>

            <div class="container">

                <!-- If a question has been created and the answer entered. -->
                <div v-if="roomQuestion"
                     id="question-status">

                    <template v-if="!roomQuestion.started">
                        <h2>Question Ready To Answer</h2>
                        <p>The buttons are visible on player's screens but are disabled. The buttons will be enabled when you click Start.</p>
                    </template>
                    <template v-else-if="!roomQuestion.ended">
                        <h2>Question Is Being Answered</h2>
                        <p>The buttons are visible and enabled on players' screens. Players can enter their answers right now.</p>
                    </template>
                    <template v-else>
                        <h2>Answering Finished</h2>
                        <p>The buttons are no longer visible on player's screens.</p>
                    </template>

                    <p>
                        <strong>Correct Answer:</strong>
                        <span class="label label-warning">{{ roomQuestion.answer }}</span>
                    </p>

                    <div v-if="!roomQuestion.started">
                        <a class="btn btn-success btn-lg"
                           @click.prevent="startQuestion"><i class="fas fa-play"></i> Start Answering</a>
                    </div>
                    <div v-else-if="!roomQuestion.ended">
                        <a class="btn btn-danger btn-lg"
                           @click.prevent="endQuestion"><i class="fas fa-stop"></i> Stop Answering</a>
                    </div>
                    <div v-else>
                        <a class="btn btn-warning btn-lg"
                           @click.prevent="clearQuestion"><i class="fas fa-arrow-right"></i> Next Question</a>
                    </div>

                    <hr v-if="roomQuestion.started"/>

                    <div v-if="roomQuestion.started"
                         id="answers">
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
                    <a class="btn btn-warning btn-lg"
                       @click.prevent="newQuestion('letters')"><i class="fas fa-text"></i> New Letter Question</a>

                    <a class="btn btn-warning btn-lg"
                       @click.prevent="newQuestion('multiple')"><i class="fas fa-check-square"></i> New Multiple Choice Question</a>

                    <a class="btn btn-warning btn-lg"
                       @click.prevent="newQuestion('numbers')"><i class="fas fa-calculator"></i> New Number Question</a>
                </div>
            </div>
        </div>

        <div id="right">
            <div class="container">

                <h3 class="hidden-md hidden-lg text-center">Scores</h3>

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
        WebsocketMixin,
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

                const becomeHost = () => {
                    // Tell the server this socket will be a host and should receive more info.
                    // Hide the UI until we know this is done.
                    this.$options.socket.emit(
                        'becomeHost',
                        {
                            password: this.$route.params.password
                        },
                        (result) => {
                            this.isHost = result;
                        }
                    );
                };
                becomeHost();

                this.$options.socket.on('connect', () => {
                    this.isHost = false;
                    becomeHost();
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

#room-code {
    .alert {
        margin: 0;
        text-align: center;

        input {
            margin: 5px;
        }
    }
}

#host {
    hr {
        margin: 30px 0;
    }
}

#question-status {
    background: #fff;
    border: 1px #ddd solid;
    padding: 15px;
    border-radius: @border-radius-base;
    text-align: center;

    > :first-child {
        margin-top: 0;
    }
}

@media (min-width: @screen-md-min) {
    #host {
        overflow: auto;
        position: relative;
        height: ~"calc(100vh - @{header-height})";
        max-width: 1170px;
        margin: auto;

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

            float: left;
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
            float: right;
            background: #fff;

            .container {
                padding-left: 0;
            }

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
            margin-top: 15px;
            min-width: 600px;

            .answers {
                margin-top: 0;
            }
        }
    }
}
</style>
