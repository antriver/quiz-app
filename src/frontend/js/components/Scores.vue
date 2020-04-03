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
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="playerCount < 1">
                    <td colspan="3">
                        No players have joined yet.
                    </td>
                </tr>
                <tr v-for="player in players"
                    :key="player.id">
                    <td>
                        <span v-if="player.active"
                              class="dot dot-success"> </span>
                        <span v-else
                              class="dot dot-danger"> </span>
                        {{ player.name }}
                    </td>
                    <td>{{ player.score }}</td>
                    <td>
                        <a class="btn btn-danger btn-xs"
                           :class="[player.active ? 'hide' : '']"
                           @click.prevent="removePlayer(player)">
                            <i class="fas fa-trash" />
                        </a>
                    </td>
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
    },

    methods: {
        removePlayer(player) {
            if (window.confirm(`Are you sure you want to remove ${player.name}? Their score will be lost.`)) {
                this.$emit('remove-player', player.id);
            }
        }
    }
};
</script>
