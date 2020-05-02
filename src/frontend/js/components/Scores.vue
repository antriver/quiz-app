<template>
    <div class="scores">
        <transition-group class="scores-list"
                          name="scores-list"
                          tag="ul">
            <li v-if="playerCount < 1"
                :key="'no-players-score'">
                <span class="name text-center">No players here.</span>
            </li>
            <li v-for="player in players"
                :key="player.id">
                <span class="name">
                    <span v-if="player.active"
                          class="dot dot-success"> </span>
                    <span v-else
                          class="dot dot-danger"> </span>
                    {{ player.name }}
                </span>
                <span class="score">
                    {{ player.score }}
                </span>
                <span class="actions">
                    <small v-if="player.manualScoreAdjustment">
                        {{ player.manualScoreAdjustment | points }}
                    </small>
                    <a class="btn btn-default btn-sm"
                       @click.prevent="adjustScore(player, -1)">
                        <i class="fas fa-minus" />
                    </a>
                    <a class="btn btn-default btn-sm"
                       @click.prevent="adjustScore(player, 1)">
                        <i class="fas fa-plus" />
                    </a>
                    <a class="btn btn-danger btn-sm"
                       :class="[player.active ? 'vis-hide' : '']"
                       @click.prevent="removePlayer(player)">
                        <i class="fas fa-trash" />
                    </a>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Scores',

    computed: {
        ...mapState(['room']),

        players() {
            return Object.values(this.room.players)
                .sort(
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
        },

        adjustScore(player, adjustBy) {
            this.$emit('adjust-score', {
                player,
                adjustBy
            });
        }
    }
};
</script>

<style lang="less">
.scores-list {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        padding: 5px;

        &:nth-child(even) {
            background: #f9f9f9;
        }

        .name {
            text-align: left;
            flex-grow: 1;
            padding-left: 5px;
        }

        .score {
            text-align: right;
            flex-grow: 0;
            font-weight: bold;
        }

        .actions {
            width: 150px;
            text-align: right;
            white-space: nowrap;
            overflow: hidden;
            flex-grow: 0;
            padding-left: 10px;
        }
    }
}

.scores-list-move {
    transition: transform 0.5s;
}
</style>
