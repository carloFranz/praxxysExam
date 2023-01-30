/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
import Vue from 'vue'; // if this is not work add this =>  window.Vue = require('vue');
window.Vue = require('vue');
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
import App from './app.vue';
import { routes } from './routes';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/dist/css/adminlte.min.css?v=3.2.0';
import 'admin-lte/plugins/jquery/jquery.min.js';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/dist/js/adminlte.min.js?v=3.2.0';
import 'admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
const router = new VueRouter({
    mode: 'history',
    routes: routes
});
const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
