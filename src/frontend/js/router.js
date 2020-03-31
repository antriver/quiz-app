import Vue from 'vue';
import VueRouter from 'vue-router';

const createRouter = () => {
    Vue.use(VueRouter);

    const routes = [
        { path: '/', component: () => import('@frontend/views/HomeView.vue') },
        { path: '/:room/player', component: () => import('@frontend/views/PlayerView.vue') },
        { path: '/:room/host', component: () => import('@frontend/views/HostView.vue') },
    ];

    return new VueRouter({
        routes
    });
};

export { createRouter };
