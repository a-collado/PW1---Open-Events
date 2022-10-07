import { createRouter, createWebHistory } from 'vue-router'
import Perfil from '../components/Perfil.vue'
import Main from '../components/Main.vue'
import Welcome from '../components/Welcome.vue'
<<<<<<< HEAD
=======

>>>>>>> 311e5e3229d8854f615a64811d76347ef77a598e

const routes = [
    {
        path: '/',
        name: 'Perfil',
        component: Perfil
    },
    {
        path: '/m',
        name: 'Main',
        component: Main
    },
    {
        path: '/w',
        name: 'Welcome',
        component: Welcome
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router