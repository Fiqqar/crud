import { sortUserPlugins } from 'vite';
import Vue from 'vue';
import {Router} from 'vue-router';

Vue.use(Router);
export default new Router({
    mode: "history",
    routes: [{
        path: "/",
        alias: "/users",
        name: "users",
        component: userlist
    },
    {
        path: "/users/:id",
        name: "userdetails",
        component: user
    },
    {
        path: "/adduser",
        name: "adduser",
        component: adduser
    }]
});