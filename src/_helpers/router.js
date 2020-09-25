import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/home/Home';
import EditAccount from '@/home/EditAccount';
import Login from '@/login/Login';
import { authGuard } from '@/_helpers';

Vue.use(Router);

const routes = [
    { path: '/', component: Home, beforeEnter: authGuard },
    { path: '/edit/:id', component: EditAccount, beforeEnter: authGuard },
    { path: '/login', component: Login },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
];

export const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes
});