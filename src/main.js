// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import App from './App';

import './common/js/flexible.js';
import './common/scss/index.scss';

import Home from 'components/home';


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: resolve => require(['components/login'], resolve)
    },
    {
        path: '/userInfo',
        component: resolve => require(['components/userInfo'], resolve),
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('userInfo')) {
                next('/login');
            } else {
                next();
            }
        }
    },
    {
        path: '*',
        redirect: '/'
    }
];

const router = new VueRouter({
    // mode: 'abstract',
    base: __dirname,
    linkActiveClass: 'active',
    routes
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    ...App
});

// 定位到home页面
router.push('*');

