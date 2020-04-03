import io from 'socket.io-client';

export default {
    methods: {
        createSocket() {
            this.$options.socket = io(
                process.env.SERVER_URL + '/' + this.$route.params.room,
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
        }
    },

    beforeDestroy() {
        if (this.$options.socket) {
            this.$options.socket.disconnect();
            this.$options.socket.destroy();
            this.$options.socket = null;
        }
    }
};
