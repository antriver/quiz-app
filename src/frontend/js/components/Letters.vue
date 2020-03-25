<template>
    <div class="letters">
        <a v-for="letter in letters"
           :key="letter"
           class="btn"
           :disabled="!active || choice"
           :class="[
               choice === letter ? 'btn-success active' : 'btn-primary'
           ]"
           @click="click(letter)">{{ letter }}</a>
    </div>
</template>

<script>
export default {
    name: 'Letters',

    props: {
        active: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            choice: null,

            letters: [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'I',
                'J',
                'K',
                'L',
                'M',
                'N',
                'O',
                'P',
                'R',
                'S',
                'T',
                'U',
                'Q V',
                'W',
                'Y',
                'X Z',
            ]
        };
    },

    methods: {
        click(letter) {
            if (this.active && !this.choice) {
                this.choice = letter;
                this.$emit('choice', letter);
            }
        }
    }
};
</script>

<style lang="less">
.letters {
    width: 100%;
    padding: 5px;
    height: 100%;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    overflow: hidden;

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;

        &.btn-success {
            animation-name: wiggle;
            animation-timing-function: ease-in;
            animation-duration: 1s;
        }
    }
}

@keyframes wiggle {
    0% { transform: skewX(9deg); }
    10% { transform: skewX(-8deg); }
    20% { transform: skewX(7deg); }
    30% { transform: skewX(-6deg); }
    40% { transform: skewX(5deg); }
    50% { transform: skewX(-4deg); }
    60% { transform: skewX(3deg); }
    70% { transform: skewX(-2deg); }
    80% { transform: skewX(1deg); }
    90% { transform: skewX(0deg); }
    100% { transform: skewX(0deg); }
}
</style>
