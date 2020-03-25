<template>
    <div class="answer-input">
        <div class="title-row text-center">
            <h3>{{ title }}</h3>
        </div>
        <Letters :active="active"
                 @choice="choice" />
    </div>
</template>

<script>
import Letters from './Letters.vue';

export default {
    name: 'AnswerInput',
    components: { Letters },
    props: {
        active: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            required: true
        }
    },

    methods: {
        choice(data) {
            if (this.active) {
                this.$emit('choice', data);
            }
        }
    }
};
</script>

<style lang="less">
.answer-input {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .title-row {
        flex-grow: 0;
        flex-shrink: 0;
    }

    .letters {
        flex-grow: 1;
        flex-shrink: 1;
    }

    h3 {
        margin: 10px 0 5px;
        padding: 0;
        font-size: 16px;
    }

    .btn {
        transition: opacity 0.1s ease-out;
    }

    .btn[disabled]:not(.active) {
        filter: grayscale(100%);
    }
    .btn.active {
        opacity: 1 !important;
    }
}
</style>
