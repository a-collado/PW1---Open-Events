import { createRouter, createWebHistory } from 'vue-router'
import Perfil from '../components/Perfil.vue'
import Welcome from '../components/Welcome.vue'
import SignIn from '../components/SignIn.vue'
import Register from '../components/Register.vue'
import CreateEvent from '../components/CreateEvent.vue'
import Perfil2 from '../components/Perfil2.vue'

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/p',
        name: 'Perfil',
        component: Perfil
    },
    {
        path: '/p2',
        name: 'Perfil2',
        component: Perfil2
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