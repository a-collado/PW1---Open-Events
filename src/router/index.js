import { createRouter, createWebHistory } from 'vue-router'
import Perfil from '../components/Perfil.vue'
import Welcome from '../components/Welcome.vue'
import SignIn from '../components/SignIn.vue'
import Register from '../components/Register.vue'
import CreateEvent from '../components/CreateEvent.vue'
import Perfil2 from '../components/Perfil2.vue'
import Messages from '../components/Messages.vue'
import Chat from '../components/Chat.vue'
import RegisterProfilePicture from '../components/RegisterProfilePicture.vue'
import Home from '../components/Home.vue'
const routes = [
    {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/perfil',
        name: 'Perfil',
        component: Perfil
    },
    {
        path: '/perfil_statistics',
        name: 'Perfil2',
        component: Perfil2
    },
    {
        path: '/sign_in',
        name: 'Sign in',
        component: SignIn
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/create_event',
        name: 'Create Event',
        component: CreateEvent
    },
    {
        path: '/messages',
        name: 'Messages',
        component: Messages
    },
    {
        path: '/chat',
        name: 'Chat',
        component: Chat
    },
    {
        path: '/register_profile_picture',
        name: 'Register Profile Picture',
        component: RegisterProfilePicture
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
 
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router