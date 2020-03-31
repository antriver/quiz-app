<template>
    <div class="number-pad">
        <div class="result">
            {{ result }}
        </div>
        <div class="numbers">
            <a class="btn btn-primary"
               :disabled="disabled"
               @click.prevent="input(1)">1</a>
            <a class="btn btn-primary"
               :disabled="disabled"
               @click.prevent="input(2)">2</a>
            <a class="btn btn-primary"
               :disabled="disabled"
               @click.prevent="input(3)">3</a>
            <a class="btn btn-primary"
               :disabled="disabled"
               @click.prevent="input(4)">4</a>
            <a class="btn btn-primary"
               :disabled="disabled"
               @click.prevent="input(5)">5</a>
            <a class="btn btn-primary"
               :disabled="disabled"
               @click.prevent="input(6)">6</a>
            <a class="btn btn-primary"
               :disabled="disabled"
               @click.prevent="input(7)">7</a>
            <a class="btn btn-primary"
               :disabled="disabled"
               @click.prevent="input(8)">8</a>
            <a class="btn btn-primary"
               :disabled="disabled"
               @click.prevent="input(9)">9</a>
            <a class="btn btn-danger"
               :disabled="disabled || !result"
               @click.prevent="clear">Clear</a>
            <a class="btn btn-primary"
               :disabled="disabled"
               @click.prevent="input(0)">0</a>
            <a class="btn btn-success"
               :disabled="disabled || !result"
               @click.prevent="submit">OK</a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NumberPad',

    props: {
        active: {
            type: Boolean,
            default: false
        },
        existingChoice: {
            type: String,
            required: false,
            default: null
        }
    },

    data() {
        return {
            result: this.existingChoice || ''
        };
    },

    computed: {
        disabled() {
            return !this.active || this.existingChoice;
        }
    },

    methods: {
        input(number) {
            if (!this.disabled) {
                this.result += ('' + number);
            }
        },

        clear() {
            if (!this.disabled) {
                this.result = '';
            }
        },

        submit() {
            if (!this.disabled && this.result) {
                this.$emit('choice', this.result);
            }
        }
    }
};
</script>

<style lang="less">
.number-pad {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .result {
        height: 70px;
        border: 1px #ddd solid;
        border-radius: 5px;
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 5px;
        font-size: 36px;
        background: #fff;
    }

    .numbers {
        flex-grow: 1;
        flex-shrink: 1;
        width: 100%;
        padding: 5px;
        height: 100%;
        display: grid;
        grid-gap: 5px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        overflow: hidden;

        .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;

            &:active {
                animation-name: wiggle;
                animation-timing-function: ease-in;
                animation-duration: 1s;
            }
        }
    }
}
</style>
