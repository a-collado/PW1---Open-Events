<template>
  <div class="header">
    <img src="src\assets\images\icons\logo.png" style="width:200px;">
    <input class="searchbar" type="text" placeholder="¿Que tipo de evento estas buscando?">
  
    <nav class="navbar">
      <router-link to="/p">Perfil</router-link>
      <router-link to="/p2">Perfil2</router-link>
      <router-link to="/">Welcome</router-link>
      <router-link to="/s">Sign in</router-link>
      <router-link to="/r">Register</router-link>
      <router-link to="/c">CreateEvent</router-link>
    </nav>

</div>

  <router-view></router-view>
  
</template>


