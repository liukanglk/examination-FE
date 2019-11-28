import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from "@/components/Login/Login";
import Home from "../components/Home/Home";


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,

        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        }
    ]
});
module.exports = router;

