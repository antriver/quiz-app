<template>
    <div v-if="isHost"
         id="host"
         class="container">
        <div id="left">
            <div class="container">
                <div id="room-code">
                    <div class="alert alert-info">
                        <p>Your room code is <strong>{{ room.code }}</strong>. Players can join with this link:</p>
                        <input type="text"
                               class="form-control text-center"
                               readonly
                               :value="'https://questicals.com/' + room.code" />
                        <p>
                            The page you are now on is the only way to host the room. Bookmark it if you don't want to
                            lose it!
                        </p>
                    </div>
                </div>

                <!-- If a question has been created and the answer entered. -->
                <template v-if="roomQuestion">
                    <div
                        id="question-status"
                        class="box">
                        <template v-if="!roomQuestion.started">
                            <h2>Question Ready To Answer</h2>
                            <p>
                                The buttons are visible on player's screens but are disabled. The buttons will be enabled
                                when you click Start.
                            </p>
                        </template>
                        <template v-else-if="!roomQuestion.ended">
                            <h2>Question Is Being Answered</h2>
                            <p>
                                The buttons are visible and enabled on players' screens. Players can enter their answers
                                right now.
                            </p>
                        </template>
                        <template v-else>
                            <h2>Answering Finished</h2>
                            <p>The buttons are no longer visible on player's screens.</p>
                        </template>

                        <div class="my">
                            <h3>Correct Answer:</h3>
                            <span class="label correct-answer-label label-warning">{{ roomQuestion.answer }}</span>
                        </div>

                        <div v-if="!roomQuestion.started"
                             class="my">
                            <h3>Time Limit:</h3>
                            <div class="btn-group"
                                 role="group">
                                <button type="button"
                                        :class="[roomQuestion.timeLimit === 10000 ? 'active btn-primary' : 'btn-default']"
                                        class="btn"
                                        @click.prevent="setTimeLimit(10000)">
                                    10 Seconds
                                </button>
                                <button type="button"
                                        :class="[roomQuestion.timeLimit === 30000 ? 'active btn-primary' : 'btn-default']"
                                        class="btn"
                                        @click.prevent="setTimeLimit(30000)">
                                    30 Seconds
                                </button>
                                <!-- <button type="button"
                                        :class="[roomQuestion.timeLimit === 60000 ? 'active btn-primary' : 'btn-default']"
                                        class="btn"
                                        @click.prevent="setTimeLimit(60000)">
                                    60 Seconds
                                </button> -->
                                <button type="button"
                                        :class="[roomQuestion.timeLimit === null ? 'active btn-primary' : 'btn-default']"
                                        class="btn"
                                        @click.prevent="setTimeLimit(null)">
                                    None
                                </button>
                            </div>
                        </div>

                        <div v-if="!roomQuestion.started">
                            <a class="btn btn-success btn-lg"
                               @click.prevent="startQuestion"><i class="fas fa-play"></i> Start Answering</a>
                        </div>
                        <div v-else-if="!roomQuestion.ended">
                            <template v-if="roomQuestion.timeLimit">
                                <h3>Time Remaining:</h3>
                                <h4>{{ timeRemainingString }}</h4>
                            </template>
                            <template v-else>
                                <h3>Time Since Starting:</h3>
                                <h4>{{ getTimeSinceStartedString() }}</h4>
                            </template>

                            <a class="btn btn-danger btn-lg mt"
                               :class="[roomQuestion.timeLimit ? 'btn-sm' : 'btn-lg']"
                               @click.prevent="endQuestion"><i class="fas fa-stop"></i> Stop Answering</a>
                        </div>
                        <div v-else>
                            <a class="btn btn-warning btn-lg"
                               @click.prevent="clearQuestion"><i class="fas fa-arrow-right"></i> Next Question</a>
                        </div>
                    </div>

                    <div v-if="roomQuestion.started"
                         class="box text-center">
                        <h3>Answers</h3>
                        <Answers />
                    </div>
                </template>

                <!-- If a question has been created but the answer entered. -->
                <template v-else-if="nextQuestion">
                    <div class="box">
                        <h2 class="text-center">
                            Provide The Correct Answer
                        </h2>
                        <AnswerInput title=""
                                     :question-type="nextQuestion.type"
                                     :question="nextQuestion"
                                     :active="true"
                                     @choice="setCorrectAnswer"></AnswerInput>
                    </div>
                </template>

                <!-- If no question has been created. -->
                <template v-else>
                    <div id="new-question-btns"
                         class="box">
                        <h2>Start A New Question</h2>
                        <a class="btn btn-warning btn-lg"
                           @click.prevent="newQuestion('letters')">
                            <i class="fas fa-text"></i> New Letter Question
                        </a>

                        <a class="btn btn-warning btn-lg"
                           @click.prevent="newQuestion('multiple')">
                            <i class="fas fa-check-square"></i> New Multiple Choice Question
                        </a>

                        <a class="btn btn-warning btn-lg"
                           @click.prevent="newQuestion('numbers')">
                            <i class="fas fa-calculator"></i> New Number Question
                        </a>
                    </div>
                </template>
            </div>
        </div>

        <div id="right">
            <div class="container">
                <div id="scores"
                     class="box">
                    <h3>
                        Scores
                    </h3>

                    <Scores @remove-player="removePlayer"
                            @adjust-score="adjustScore" />

                    <div class="text-center">
                        <a class="btn btn-sm btn-danger"
                           @click.prevent="resetScores">Reset Scores</a>

                        <a class="btn btn-sm btn-danger"
                           @click.prevent="resetPlayers">Reset Players</a>
                    </div>
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

const { millisecondsToString, millisecondsToSecondsString } = require('@/functions/time');

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

            isHost: false,

            lastTimeLimit: null
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
        },

        timeRemainingString() {
            if (this.roomQuestion && this.roomQuestion.timeRemaining) {
                return millisecondsToSecondsString(this.roomQuestion.timeRemaining);
            }

            return null;
        },

        questionStartedAtMs() {
            return this.roomQuestion && this.roomQuestion.startedAt ? new Date(this.roomQuestion.startedAt).getTime() : null;
        }
    },

    watch: {
        roomQuestion(newVal) {
            if (newVal) {
                this.lastTimeLimit = newVal.timeLimit;
            }
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

    mounted() {
        // To make the timer work.
        setInterval(() => this.$forceUpdate(), 51);
    },

    methods: {
        getTimeSinceStartedString() {
            if (!this.questionStartedAtMs) {
                return null;
            }

            const diff = (new Date()).getTime() - this.questionStartedAtMs;
            return millisecondsToString(diff);
        },

        newQuestion(type) {
            this.nextQuestion = new Question({
                id: generateId(),
                type,
                timeLimit: this.lastTimeLimit,
                points: type === 'numbers' ? 2 : 1
            });
        },

        setCorrectAnswer(answer) {
            this.nextQuestion.answer = answer;

            this.$options.socket.emit('newQuestion', this.nextQuestion);
        },

        setTimeLimit(timeLimit) {
            this.$options.socket.emit('updateQuestion', { timeLimit });
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

        adjustScore({ player, adjustBy }) {
            this.$options.socket.emit('adjustScore', { playerId: player.id, adjustBy });
        },

        removePlayer(playerId) {
            this.$options.socket.emit('removePlayer', playerId);
        }
    }
};
</script>

<style lang="less">
@import (less, reference) "../../less/app.less";

#host {
    padding: 0;

    hr {
        margin: 30px 0;
    }

    .correct-answer-label {
        font-size: 16px;
    }
}

#new-question-btns {
    .btn {
        margin: 5px;
    }
}

#room-code {
    margin: -15px -15px 15px;

    .alert {
        margin: 0;
        text-align: center;

        input {
            margin: 5px 0;
        }
    }
}

#question-status {
    text-align: center;

    > :first-child {
        margin-top: 0;
    }
}

@media (min-width: @screen-sm-min) {
    #room-code {
        margin: 0 0 15px;
    }
}

@media (max-width: @screen-sm-max) {
    #host {
        #right {
            > .container {
                padding-top: 0;
            }
        }
    }
}

@media (min-width: @screen-md-min) {
    #host {
        h2,
        h3 {
            &:first-child {
                margin-top: 0;
            }
        }

        #left {
            float: left;
            max-width: none;
            width: 65%;
        }

        #right {
            width: 35%;
            float: right;

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
