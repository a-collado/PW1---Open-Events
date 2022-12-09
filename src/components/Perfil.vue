<script>
import UsersEvents from "./UsersEvents.vue";
import UsersStatistics from "./UsersStatistics.vue";
import { stringifyStyle } from "@vue/shared";
import ApiCalls from "../js/APIcalls.js";
export default{
    components:{
      UsersEvents: UsersEvents,
      UsersStatistics: UsersStatistics
    },
    
    data() {
        return {};
    },
    methods: {
        logOut() {
            window.localStorage.setItem("accessToken", "");
            window.localStorage.setItem("loggedUser", "");
            window.location.replace("/sign_in");
        }
    },

}
</script>

<template>

  <div class="profile_header">
    <img class="landscape" src="https://cnnespanol.cnn.com/wp-content/uploads/2022/08/220731233929-hyperion-tree-full-169.jpg?quality=100&strip=info" alt="Profile">
    <img class="profilePic" src="../assets/images/profilepic.webp" alt="Avatar">
    
    <div class="profileButtons">
      <router-link to="/friends">
        <button class="button_blues_small">10 Amigos</button>
      </router-link> 
      <button class="button_blues_small">2 Eventos</button>
    </div>
  </div>

  <div class="profile_friends">

    <router-link to="/friends">
      <h1>Amigos (5)</h1>
    </router-link>

    <router-link to="/perfilR">
      <div class="flex_row_wrap">
        <img src="../assets/images/other_user.png" alt="profile pic">
        <div class="column">
          <h2>Amigo1</h2>
          <p class="grey_normal">@amigo1</p>
        </div>  
      </div>
    </router-link>

    <hr>

    <router-link to="/perfilR">
      <div class="flex_row_wrap">
        <img src="../assets/images/other_user.png" alt="profile pic">
        <div class="column">
          <h2>Amigo1</h2>
          <p class="grey_normal">@amigo1</p>
        </div>  
      </div>
    </router-link>

    <hr>

    <router-link to="/perfilR">
      <div class="flex_row_wrap">
        <img src="../assets/images/other_user.png" alt="profile pic">
        <div class="column">
          <h2>Amigo1</h2>
          <p class="grey_normal">@amigo1</p>
        </div>  
      </div>
    </router-link>

    <hr>

    <router-link to="/perfilR">
      <div class="flex_row_wrap">
        <img src="../assets/images/other_user.png" alt="profile pic">
        <div class="column">
          <h2>Amigo1</h2>
          <p class="grey_normal">@amigo1</p>
        </div>  
      </div>
    </router-link>

    <hr>

    <router-link to="/perfilR">
      <div class="flex_row_wrap">
        <img src="../assets/images/other_user.png" alt="profile pic">
        <div class="column">
          <h2>Amigo1</h2>
          <p class="grey_normal">@amigo1</p>
        </div>  
      </div>
    </router-link>
    <hr>
  </div> <!--tanquem profile friends-->

    <!-- User info-->
  <main>
    <div class="profile_info"> 
      <article>
        <h1>Nombre</h1>
        <!--<h4>@nombre2</h4>-->
        <p class="grey_normal">@nombre</p> 
      </article>
      <div class="flex_row_wrap">
        <p class="pink_normal">Barcelona, España</p>
        <div class="punctuation">
          <img class="stars" src="../assets/images/icons/star_b.png" alt="1 estrella">
          <img class="stars" src="../assets/images/icons/star_b.png" alt="2 estrellas">
          <img class="stars" src="../assets/images/icons/star_b.png" alt="3 estrellas">
          <img class="stars" src="../assets/images/icons/star_b.png" alt="4 estrellas">
          <img class="stars" src="../assets/images/icons/star_b.png" alt="5 estrellas">
          <h5>5</h5>
        </div>
      </div>

      <p class="grey_normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit facilisis erat eu pulvinar. Nam in tincidunt dolor. Fusce non rhoncus ligula. Proin gravida ex a nisi mollis, venenatis gravida sapien aliquet. Nam sed lectus magna.</p>
      <div class="button_flex">
        <router-link to="/editarPerfil"><button class="button_pink_normal">Editar perfil</button></router-link>
        <button-icon v-on:click = "logOut()"><img class="icon" src="../assets/images/icons/logout.png" alt="profile configuration"></button-icon>
      </div>
      <hr>

    </div>
  </main>

     <UsersEvents></UsersEvents>
     <UsersStatistics></UsersStatistics>

</template>

