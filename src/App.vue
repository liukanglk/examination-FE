<template>
    <div id="app">
        <!--        <Login/>-->
        <router-view></router-view>

    </div>
</template>

<script>
    import Login from './components/Login/Login.vue'
    import VueRouter from "vue-router";
    import Foo from "./components/Home/Foo";
    import Home from "./components/Home/Home";
    // import router from "./router/index"

    const router = new VueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
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
    export default {
        router,
        name: 'app',
        components: {
            // Login
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }


</style>
