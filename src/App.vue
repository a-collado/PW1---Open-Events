<template>
  <div id="header">
    <router-link to="/"><img src="src\assets\images\icons\logo.png" style="width:200px;"></router-link>
    <input class="searchbar" type="text" placeholder="¿Que tipo de evento estas buscando?">
  
    <div>
      <router-link to="/messages"><img src="src\assets\images\icons\chat.png" style="width:50px; height:50px"></router-link>
      <router-link to="/perfil"><img class="small_profilePic" src="src\assets\images\profilepic.jpg"></router-link>
    </div>
    <!--<nav class="navbar">
      <router-link to="/perfil">Perfil-</router-link>
      <router-link to="/perfil_statistics">Perfil2-</router-link>
      <router-link to="/perfilR">PerfilR-</router-link>
      <router-link to="/perfilR_statistics">PerfilR2-</router-link>
      <router-link to="/welcome">Welcome-</router-link>
      <router-link to="/sign_in">Sign in-</router-link>
      <router-link to="/register">Register-</router-link>
      <router-link to="/create_event">CreateEvent-</router-link>
      <router-link to="/event">Event-</router-link>
      <router-link to="/messages">Messages-</router-link>
      <router-link to="/chat">Chat-</router-link>
      <router-link to="/register_profile_picture">Register Picture-</router-link>
      <router-link to="/editarPerfil">editarpERFIL-</router-link>
      <router-link to="/">Home-</router-link>

    </nav>-->
</div>

  <router-view></router-view>
  
</template>

<style scoped>
/*.navbar{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}*/

#header {
  display:flex;
  text-align: center;
  background: linear-gradient(#00adbdf6, #00adbd38);
  justify-items: center;
  flex-wrap: wrap;
  align-items: center;
  width:100vw;
  justify-content: space-around;
}

#header > div > * {margin: 5px;}




</style>


