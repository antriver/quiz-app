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
    }
};
</script>

<style lang="less">
@import "../less/app.less";
</style>
