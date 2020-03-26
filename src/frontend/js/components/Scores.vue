<template>
    <table class="table table-striped text-center">
        <thead>
            <tr>
                <th class="text-center">
                    Name
                </th>
                <th class="text-center">
                    Score
                </th>
            </tr>
        </thead>
        <tbody>
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
        }
    }
};
</script>
