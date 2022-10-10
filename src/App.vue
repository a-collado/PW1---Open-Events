<script setup>
import { createRouter, createWebHistory } from 'vue-router'

import Perfil from './components/Perfil.vue'
import Main from './components/Main.vue'
import Welcome from './components/Welcome.vue'
</script>

<template>
  <div class="header">
    <p id="logo_title">Hola</p>
    <input class="searchbar" type="text" placeholder="¿Que tipo de evento estas buscando?">
  
    <nav class="navbar">
      <router-link to="/m">Main</router-link>
      <router-link to="/">Perfil</router-link>
      <router-link to="/w">Welcome</router-link>
      <router-link to="/s">Sign in</router-link>
    </nav>

</div>

  <router-view></router-view>
  
</template>


