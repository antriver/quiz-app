import Vue from 'vue';
import VueRouter from 'vue-router';

const createRouter = () => {
    Vue.use(VueRouter);

    const routes = [
        { path: '/', component: () => import('@frontend/views/PlayerView.vue') },
        { path: '/host', component: () => import('@frontend/views/HostView.vue') },
        { path: '/players', component: () => import('@frontend/views/PlayersView.vue') },
    ];

    const router = new VueRouter({
        routes // short for `routes: routes`
    });

    return router;
};

export { createRouter };
