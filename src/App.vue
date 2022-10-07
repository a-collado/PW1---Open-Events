<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { createRouter, createWebHistory } from 'vue-router'

import Perfil from './components/Perfil.vue'
import Main from './components/Main.vue'
import Welcome from './components/Welcome.vue'
</script>

<template>
  <!--<div class="header">
    <h2>Hola</h2>
    <input class="searchbar" type="text" placeholder="¿Que tipo de evento estas buscando?">
  </div>-->
  <nav class="navbar">
    <router-link to="/m">Main</router-link>
    <router-link to="/">Perfil</router-link>
    <router-link to="/w">Welcome</router-link>
  </nav>
  <router-view></router-view>
  <!--<Perfil></Perfil>-->
  <Welcome></Welcome>

  </template>


