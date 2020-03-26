<template>
    <div v-if="room"
         id="players"
         class="container">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="player in players"
                    :key="player.id">
                    <td>{{ player.name }}</td>
                    <td>{{ player.score }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'PlayersView',

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
