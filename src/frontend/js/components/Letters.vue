<template>
    <div class="letters"
         :class="multipleChoice ? 'multiple-choice' : ''">
        <template v-for="letter in letters">
            <a v-if="letter"
               :key="letter"
               class="btn"
               :disabled="!active || selectedOption"
               :class="[
                   selectedOption === letter ? 'btn-info active' : 'btn-primary'
               ]"
               @click="click(letter)">{{ letter }}</a>
            <span v-else
                  :key="letter"></span>
        </template>
    </div>
</template>

<script>

const allLetters = [
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
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    '',
    'Y',
    'Z',
];

const multipleChoiceLetters = [
    'A',
    'B',
    'C',
    'D'
];

export default {
    name: 'Letters',

    props: {
        active: {
            type: Boolean,
            default: false
        },
        multipleChoice: {
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
            choice: null
        };
    },

    computed: {
        letters() {
            return this.multipleChoice ? multipleChoiceLetters : allLetters;
        },

        selectedOption() {
            return this.choice || this.existingChoice || null;
        }
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
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    overflow: hidden;

    &.multiple-choice {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;

        &.active {
            animation-name: wiggle;
            animation-timing-function: ease-in;
            animation-duration: 1s;
        }
    }
}
</style>
