<template>
    <div class="answers">
        <table class="table table-striped text-center">
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Answer</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="answers.length < 1">
                    <td colspan="3">
                        No players have joined yet.
                    </td>
                </tr>
                <tr v-for="answer in answers"
                    :key="answer.player.id">
                    <td>
                        {{ answer.player.name }}
                        <span v-if="!answer.player.active"
                              class="label label-default">Disconnected</span>
                    </td>
                    <td>
                        {{ answer.answer }}
                        <span v-if="answer.correct"
                              class="label label-success">Correct</span>
                        <span v-else-if="answer.answer"
                              class="label label-danger">Incorrect</span>
                        <span v-else
                              class="label label-default">Unanswered</span>

                        <span v-if="answer.wasFirst"
                              class="label label-info">First</span>

                        <span v-if="answer.wasClosest"
                              class="label label-info">Closest</span>
                    </td>
                    <td>
                        {{ (answer.points > 0 ? '+' : '') + answer.points }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Answer from '@/classes/Answer';

export default {
    name: 'Answers',

    computed: {
        ...mapState(['room']),

        answers() {
            if (!this.room || !this.room.currentQuestion) {
                return [];
            }

            const answers = Object.values(this.room.players).map((player) => {
                if (this.room.currentQuestion.answers.hasOwnProperty(player.id)) {
                    return this.room.currentQuestion.answers[player.id];
                }

                return new Answer({ player });
            });

            answers.sort((a, b) => {
                if (a.player.name === b.player.name) {
                    return 0;
                }

                return a.player.name < b.player.name ? -1 : 1;
            });

            /*answers.sort((a, b) => {
                if (a.answeredAt && b.answeredAt) {
                    return a.answeredAt > b.answeredAt ? 1 : -1;
                } else if (a.answeredAt) {
                    return -1;
                } else if (b.answeredAt) {
                    return 1;
                }

                return a.player.name < b.player.name;
            });*/

            return answers;
        }
    }
};
</script>

<style lang="less">
.answers {
    table {
        td,
        th {
            width: 33% !important;
        }
    }
}
</style>
