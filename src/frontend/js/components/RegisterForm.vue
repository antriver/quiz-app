<template>
    <form class="register-form"
          @submit.prevent="register">
        <h1>Welcome!</h1>
        <input v-model="player.name"
               type="text"
               class="input form-control text-center input-lg"
               placeholder="What's your name?" />
        <button type="submit"
                class="btn btn-primary btn-lg">Let's Play
        </button>
    </form>
</template>

<script>
import Player from '@/classes/Player';

const { generateId } = require('@/funcs');

console.log('player', new Player());

export default {
    name: 'RegisterForm',

    data() {
        return {
            player: new Player()
        };
    },

    mounted() {
        this.player.id = window.localStorage.getItem('quiz-player-id');
        if (!this.player.id) {
            this.player.id = generateId();
        }

        this.player.name = window.localStorage.getItem('quiz-player-name') || '';
    },

    methods: {
        register() {
            if (!this.player.name) {
                window.alert('Please enter a name.');
                return;
            }

            window.localStorage.setItem('quiz-player-id', this.player.id);
            window.localStorage.setItem('quiz-player-name', this.player.name);

            this.$root.$options.socket.emit('registerPlayer', this.player);

            this.$emit('registered', this.player);
        }
    }
};
</script>

<style lang="less">
.register-form {
    width: 80%;
    max-width: 400px;
    text-align: center;

    .form-control {
        margin: 20px 0;
    }
}
</style>

