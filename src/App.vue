<template>
  <div class="header">
    <img src="src\assets\images\icons\logo.png" style="width:200px;">
    <input class="searchbar" type="text" placeholder="¿Que tipo de evento estas buscando?">
  
    <nav class="navbar">
      <router-link to="/perfil">Perfil</router-link>
      <router-link to="/perfil_statistics">Perfil2</router-link>
      <router-link to="/welcome">Welcome</router-link>
      <router-link to="/sign_in">Sign in</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/create_event">CreateEvent</router-link>
      <router-link to="/messages">Messages</router-link>
      <router-link to="/chat">Chat</router-link>
      <router-link to="/register_profile_picture">Register Picture</router-link>
      <router-link to="/">Home</router-link>

    </nav>

</div>

  <router-view></router-view>
  
</template>

<style scoped>
.navbar{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>


