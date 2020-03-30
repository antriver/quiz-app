<template>
    <div class="scores">
        <table class="table table-striped text-center">
            <thead>
                <tr>
                    <th class="text-center">
                        Player
                    </th>
                    <th class="text-center">
                        Score
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="playerCount < 1">
                    <td colspan="2">
                        No players.
                    </td>
                </tr>
                <tr v-for="player in players"
                    :key="player.id">
                    <td>
                        {{ player.name }} <span v-if="!player.active"
                                                class="label label-default">Disconnected</span>
                    </td>
                    <td>{{ player.score }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Scores',

    computed: {
        ...mapState(['room']),

        players() {
            return Object.values(this.room.players).sort(
                /**
                 * @param {Player} a
                 * @param {Player} b
                 */
                (a, b) => {
                    if (a.score === b.score) {
                        return 0;
                    }
                    return a.score > b.score ? -1 : 1;
                }
            );
        },

        playerCount() {
            return Object.values(this.room.players).length;
        }
    }
};
</script>

<style lang="less">
.scores {
    background: #fff;
    border: 1px #ddd solid;
    border-radius: 3px;
    margin: 30px 0;

    .table {
        margin: 0;

        td {
            width: 50%;
            vertical-align: middle;
        }
    }
}
</style>
