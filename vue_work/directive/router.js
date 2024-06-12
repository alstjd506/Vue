const {createRouter, createWebHistory } = VueRouter;
import todos from './todo.js';
import dataBindings from './dataBinding.js';
import fors from './for.js';
import ifs from './if.js';
import events from './event.js';
import posts from './post.js';


const routes = [
    {path : '/todo', component : todos},
    {path : '/dataBinding', component : dataBindings},
    {path : '/for', component : fors},
    {path : '/if', component : ifs},
    {path : '/event', component : events},
    {path : '/post', component : posts},

]

const router = createRouter({
    history: createWebHistory(),
    routes:routes
})

export default router;