import {createRouter, createWebHashHistory} from 'vue-router'
import AppLayout from '../layout/AppLayout.vue';
import Home from '../components/home.vue'

export default createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: 'home',
                compoment: Home
            }
           



        ]
        }

    ]
})

