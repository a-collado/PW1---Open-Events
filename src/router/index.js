import { createRouter, createWebHistory } from 'vue-router'
import Perfil from '../components/Perfil.vue'
import Welcome from '../components/Welcome.vue'
import SignIn from '../components/SignIn.vue'
import Register from '../components/Register.vue'
import CreateEvent from '../components/CreateEvent.vue'
import Event from '../components/Event.vue'
import Perfil2 from '../components/Perfil2.vue'
import PerfilR2 from '../components/PerfilR2.vue'
import PerfilR from '../components/PerfilR.vue'
import Messages from '../components/Messages.vue'
import Chat from '../components/Chat.vue'
import RegisterProfilePicture from '../components/RegisterProfilePicture.vue'
import Home from '../components/Home.vue'
import Friends from '../components/Friends.vue'
import Requests from '../components/Requests.vue'
import Pendant from '../components/Pendant.vue'
import EditarPerfil from '../components/EditarPerfil.vue'

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
        path: '/perfilR',
        name: 'PerfilR',
        component: PerfilR
    },
    {
        path: '/perfilR_statistics',
        name: 'PerfilR2',
        component: PerfilR2
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
        path: '/event',
        name: 'Event',
        component: Event
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
    {
        path: '/friends',
        name: 'Friends',
        component: Friends
    },
    {
        path: '/requests',
        name: 'Requests',
        component: Requests
    },
    {
        path: '/pendant',
        name: 'Pendant',
        component: Pendant
    },
    {

        path: '/editarPerfil',
        name: 'EditarPerfil',
        component: EditarPerfil
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router