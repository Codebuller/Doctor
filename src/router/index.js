import {createRouter, createWebHashHistory} from 'vue-router'
import AppLayout from '../layout/AppLayout.vue';
import VueRouteMiddleware from 'vue-route-middleware';
import middleware from "vue-router-middleware-system"
 import firebase from 'firebase/compat/app';

import Home from '../components/Home.vue'
import Login from '../views/pages/auth/Login.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/',
        component: Login,
        // children: [
            
        // ]
        
        },
        {
            path: '/home',
            component: Home,
            // meta: {auth:true}
        }

    ]
})  
// router.beforeEach((to,from, next)=>{
//     if (to.name !== '/' && !isAuthenticated) 
//     next({ name: '/' })
//     else 
//     next()
    

// })

export default router;