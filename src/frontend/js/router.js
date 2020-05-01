import Vue from 'vue';
import VueRouter from 'vue-router';

const createRouter = () => {
    Vue.use(VueRouter);

    const routes = [
        {
            name: 'home',
            path: '/',
            component: () => import('@frontend/views/HomeView.vue')
        },
        {
            name: 'privacy',
            path: '/privacy',
            component: () => import('@frontend/views/PrivacyView.vue')
        },
        {
            path: '/join',
            component: () => import('@frontend/views/JoinView.vue')
        },
        {
            path: '/:room',
            component: () => import('@frontend/views/PlayerView.vue')
        },
        {
            path: '/:room/host/:password',
            component: () => import('@frontend/views/HostView.vue')
        }
    ];

    return new VueRouter({
        mode: 'history',
        routes
    });
};

export { createRouter };
