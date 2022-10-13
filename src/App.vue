<script setup>
import { createRouter, createWebHistory } from 'vue-router'

import Perfil from './components/Perfil.vue'
import Perfil2 from './components/Perfil2.vue'
import Main from './components/Main.vue'
import Welcome from './components/Welcome.vue'
import CreateEvent from './components/CreateEvent.vue'
</script>

<template>
  <div class="header">
    <img src="src\assets\images\icons\logo.png" style="width:200px;">
    <input class="searchbar" type="text" placeholder="¿Que tipo de evento estas buscando?">
  
    <nav class="navbar">
      <router-link to="/m">Main</router-link>
      <router-link to="/">Perfil</router-link>
      <router-link to="/p2">Perfil2</router-link>
      <router-link to="/w">Welcome</router-link>
      <router-link to="/s">Sign in</router-link>
      <router-link to="/r">Register</router-link>
      <router-link to="/c">CreateEvent</router-link>
    </nav>

</div>

  <router-view></router-view>
  
</template>


