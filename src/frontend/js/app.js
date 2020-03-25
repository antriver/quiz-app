import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';

const router = createRouter();

const app = new Vue({
    router,
    // store,
    render: (h) => h(App)
}).$mount('#app');
