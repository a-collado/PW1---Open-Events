import { createRouter, createWebHistory } from 'vue-router'
import Perfil from '../components/profile/Profile.vue'
import User from '../components/profile/User.vue'
import Welcome from '../components/Welcome.vue'
import SignIn from '../components/SignIn.vue'
import Register from '../components/Register.vue'
import CreateEvent from '../components/CreateEvent.vue'
import Event from '../components/Event.vue'
import Messages from '../components/Messages.vue'
import Chat from '../components/Chat.vue'
import RegisterProfilePicture from '../components/RegisterProfilePicture.vue'
import Home from '../components/Home.vue'
import Friends from '../components/profile/Friends.vue'
import EditarPerfil from '../components/profile/EditarPerfil.vue'
import Filter from '../components/Filter.vue'

const routes = [
    {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/perfil/:id',
        name: 'Perfil',
        component: Perfil,
        children: [
            {
                path: '', 
                name: 'user', 
                component: User
            },
            {
                path: 'friends',
                name: 'Friends',
                component: Friends
            },
        ]
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
        path: '/chat/:id',
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

        path: '/editarPerfil',
        name: 'EditarPerfil',
        component: EditarPerfil
    },
    {

        path: '/filter',
        name: 'Filter',
        component: Filter
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router