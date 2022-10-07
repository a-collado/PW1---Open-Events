import { createRouter, createWebHistory } from 'vue-router'
import Perfil from '../components/Perfil.vue'
import Main from '../components/Main.vue'


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
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router