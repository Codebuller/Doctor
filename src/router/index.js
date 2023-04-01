import {createRouter, createWebHashHistory} from 'vue-router'
import AppLayout from '../layout/AppLayout.vue';
import VueRouteMiddleware from 'vue-route-middleware';
import middleware from "vue-router-middleware-system"
import firebase from "firebase/app"

import Home from '../components/Home.vue'
import Login from '../views/pages/auth/Login.vue'
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/',
        component: Login,
        children: [
            {
                path: 'home',
                component: Home,
                meta: {auth:true}
            }
        ]
        
        }

    ]
})  
router.beforeEach((to,from, next)=>{
    const currentUser = firebase.auth().currentUser
    const requireAuth = to.matched.some(e => e.meta.auth)

    (requireAuth && !currentUser) ? next('/') : next()
    

})

export default router;