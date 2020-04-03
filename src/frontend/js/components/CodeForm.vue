<template>
    <form class="code-form"
          @submit.prevent="join">
        <h1>Join A Room</h1>
        <p>Your quizmaster will have given you a 2 word code to enter here to join the room.</p>
        <input v-model="code"
               @input="onInput"
               type="text"
               class="input form-control text-center input-lg"
               placeholder="Enter the room code."
               ref="input" />

        <div class="alert alert-danger"
             v-if="error">
            {{ error }}
        </div>

        <button type="submit"
                class="btn btn-warning btn-lg">
            Join
        </button>
    </form>
</template>

<script>
import { validateRoom } from '@frontend/functions/rooms';

export default {
    name: 'CodeForm',

    data() {
        return {
            code: '',
            error: ''
        };
    },

    mounted() {
        this.$nextTick(() => {
            this.$refs.input.focus();
        });
    },

    methods: {
        onInput() {
            this.code = this.code.toLowerCase()
                .replace(' ', '-')
                .replace(/[^a-z-]/, '');
        },

        join() {
            this.error = '';

            if (!this.code) {
                this.error = 'Please enter a room code.';

                return;
            }

            validateRoom(this.code)
                .then(() => {
                    this.$router.push(`/${this.code}`);
                })
                .catch(() => {
                    this.error = 'We couldn\'t find a room with that code.';
                });
        }
    }
};
</script>

<style lang="less">
.code-form {
    width: 80%;
    max-width: 400px;
    text-align: center;
    padding-bottom: 60px;

    .form-control {
        margin: 20px 0;
    }
}
</style>
