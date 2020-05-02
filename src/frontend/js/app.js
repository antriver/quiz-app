import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import App from './App.vue';
import { createRouter } from '@frontend/router';
import { createStore } from '@frontend/store';
import axios from 'axios';

axios.defaults.baseURL = process.env.SERVER_URL;

const router = createRouter();
const store = createStore();

Vue.use(VueAnalytics, {
    id: process.env.ANALYTICS_ID,
    router
});

Vue.filter('points', (value) => {
    if (value > 0) {
        return '+' + value;
    }
    return value;
});

const app = new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
