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
    created() {
        // Create socket.io connection.
        this.$root.$options.socket = io(process.env.SOCKET_URL);

        this.$root.$options.socket.on('newPlayer', (data) => {
            console.log('New Player', data);
        });

        this.$root.$options.socket.on('playerLeft', (data) => {
            console.log('Player Left', data);
        });

        this.$root.$options.socket.on('playersUpdated', (data) => {
            console.log('Players Updateed', data);
            PlayerListService.setPlayers(data.players);
        });
    }
};
</script>

<style lang="less">
@import "../less/app.less";
</style>
