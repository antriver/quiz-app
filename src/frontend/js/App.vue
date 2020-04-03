<template>
    <div id="app">
        <Header v-if="$route.name !== 'home'" />
        <main :key="$route.fullPath">
            <router-view class="view" />
        </main>
    </div>
</template>

<script>
import Header from './components/Header';

export default {
    components: {
        Header
    }
};
</script>

<style lang="less">
@import "../less/app.less";
</style>
