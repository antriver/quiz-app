<template>
    <div id="app">
        <main>
            <router-view class="view" />
        </main>
    </div>

</template>

<script>
import io from 'socket.io-client';
import PlayerListService from '@/services/PlayerListService';

export default {
    data() {
        return {
            test: 'hello'
        };
    },

    created() {
        // Create socket.io connection.
        this.$root.$options.socket = io('https://quiz.amirite.com');

        this.$root.$options.socket.on('newPlayer', (data) => {
            console.log('newPlayer', data);
        });

        this.$root.$options.socket.on('playerLeft', (data) => {
            console.log('playerLeft', data);
        });

        this.$root.$options.socket.on('playersUpdated', (data) => {
            console.log('playersUpdated', data);
            PlayerListService.setPlayers(data.players);
        });
    }
};
</script>

<style lang="less">
@import "../less/app.less";
</style>
