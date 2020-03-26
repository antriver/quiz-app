import Vue from 'vue';
import App from './App.vue';
import { createRouter } from '@frontend/router';
import { createStore } from '@frontend/store';

const router = createRouter();
const store = createStore();

const app = new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
