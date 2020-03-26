<template>
    <div v-if="room"
         id="players"
         class="container">
        <Scores />
    </div>
</template>

<script>
import Scores from '@frontend/components/Scores';

export default {
    name: 'PlayersView',
    components: { Scores }
};
</script>
