<template>
    <div id="app">
        <main>
            <router-view class="view" />
        </main>
    </div>
</template>

<script>
import io from 'socket.io-client';
import Room from '@/classes/Room';

export default {
    data() {
        return {
            room: null
        };
    },

    created() {
        // Create socket.io connection.
        this.$root.$options.socket = io(
            process.env.SOCKET_URL,
            {
                transports: ['websocket']
            }
        );

        this.$root.$options.socket.on('roomUpdated', (room) => {
            this.room = new Room(room);
            this.$store.commit('setRoom', room);
        });

        this.$root.$options.socket.on('newPlayer', (data) => {
            console.log('New Player', data);
        });

        this.$root.$options.socket.on('playerLeft', (data) => {
            console.log('Player Left', data);
        });
    }
};
</script>

<style lang="less">
@import "../less/app.less";
</style>
