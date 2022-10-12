import { createRouter, createWebHistory } from 'vue-router'
import Perfil from '../components/Perfil.vue'
import Main from '../components/Main.vue'
import Welcome from '../components/Welcome.vue'
import SignIn from '../components/SignIn.vue'
import Register from '../components/Register.vue'
import CreateEvent from '../components/CreateEvent.vue'

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
    },
    {
        path: '/s',
        name: 'Sign in',
        component: SignIn
    },
    {
        path: '/r',
        name: 'Register',
        component: Register
    },
    {
        path: '/c',
        name: 'Create Event',
        component: CreateEvent
    }
 
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router