<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Perfil from './components/Perfil.vue'
import Main from './components/Main.vue'
</script>

<template>
  <div class="header">
    <h2>Hola</h2>
    <input class="searchbar" type="text" placeholder="¿Que tipo de evento estas buscando?">
  </div>
  <div class="navbar">
    <router-link to="/m">Main</router-link>
    <router-link to="/">Perfil</router-link>
  </div>
  <router-view></router-view>

  <Perfil msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
