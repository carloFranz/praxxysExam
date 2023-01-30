import VueRouter from 'vue-router'
import ProductIndex from './components/products/index.vue';
import ProductCreate from './components/products/create.vue';
import ProductEdit from './components/products/edit.vue';
import Register from './components/register.vue';
import Login from './components/login.vue';
import Home from './components/home.vue';
export const routes = [
    {
        path: '/products',
        component: ProductIndex,
        name: "ProductIndex"
    },
    {
        path: '/products/create',
        component: ProductCreate,
        name: "ProductCreate"
    },
    {
        path: '/products/edit/:productId',
        component: ProductEdit,
        name: "ProductEdit"
    },
    {
        path: '/register',
        component: Register,
        name: "Register"
    },
    {
        path: '/login',
        component: Login,
        name: "Login"
    },
    {
        path: '/home',
        component: Home,
        name: "Home"
    },
    {
        path: '/',
        component: Home,
        name: "Home"
    }
];
export default new VueRouter({
    routes,
    mode: 'history'
})