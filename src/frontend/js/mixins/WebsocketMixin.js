import io from 'socket.io-client';
import Room from '@/classes/Room';

export default {
    created() {
        console.log('created');
        this.$options.socket = io(
            process.env.SERVER_URL,
            {
                timeout: 1000,
                transports: ['websocket']
            }
        );

        this.$options.socket.on('connect', () => {
            console.log('Connected');
        });

        this.$options.socket.on('disconnect', () => {
            console.log('Disconnected');
        });

        this.$options.socket.on('roomUpdated', (room) => {
            this.$store.commit('setRoom', room);
        });
    },

    beforeDestroy() {
        console.log('beforeDestroy');
        this.$options.socket.disconnect();
        this.$options.socket.destroy();
        this.$options.socket = null;
    }
};
