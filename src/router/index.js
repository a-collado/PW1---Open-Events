import { createRouter, createWebHistory } from 'vue-router'
import Hellow_World from '../components/HelloWorld.vue'


const routes = [
    {
        path: '/',
        name: 'Hellow_World',
        component: Hellow_World
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router