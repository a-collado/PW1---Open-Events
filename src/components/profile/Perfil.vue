<script>
import UsersEvents from "./UsersEvents.vue";
import UsersStatistics from "./UsersStatistics.vue";
import { stringifyStyle } from "@vue/shared";
import ApiCalls from "../../js/APIcalls.js";
import Friends from "./Friends.vue"


export default{
    components:{
      UsersEvents: UsersEvents,
      UsersStatistics: UsersStatistics,
      Friends: Friends
    },
    
    data() {
      return {
        friends : [],
        user: [],
        showFriends: false,

      };
    },

    mounted(){
      ApiCalls.getAllUsersEvents()
      this.setProfileInfo()
      this.getFriends()
    },

    methods: {
        logOut() {
            window.localStorage.setItem("accessToken", "");
            window.localStorage.setItem("loggedUser", "");
            window.location.replace("/sign_in");
        },

        getFriends(){
          this.friends = ApiCalls.getFriends().then((friends) =>{
            this.friends = friends;
          });
          
        },
         setProfileInfo(){
          this.user = ApiCalls.getInfoLoggedUser().then((user) =>{
            this.user = user[0];
          });
         },
         showFriendList(b){
          this.showFriends = b;
        },
         goToProfileR(id){
            window.localStorage.setItem("userR", id);
            window.location.replace("/perfilR");
        } 
        }
    }

</script>

<template>
  <div v-if="!showFriends">

  <div class="profile_header">
    <img class="landscape" src="https://cnnespanol.cnn.com/wp-content/uploads/2022/08/220731233929-hyperion-tree-full-169.jpg?quality=100&strip=info" alt="Profile">
    <img class="profilePic" :src="user.image" alt="Avatar">
    
    <div class="profileButtons">
      <button class="button_blues_small" v-on:click.prevent="showFriendList(true)">{{ this.friends.length }} Amigos</button>
      
      <button class="button_blues_small">2 Eventos</button>
    </div>
  </div>

  <div class="profile_friends">

    <h1 v-on:click.prevent="showFriendList(true)">Amigos ({{ this.friends.length }})</h1>
    <!-- Hay que hacer que las lineas horizontales entre amigos se muestren bien -->
    <div class="flex_row_wrap" v-on:click="goToProfileR(friend.id)" v-for="friend in friends" :key="friend.id">
        <img :src="friend.image" alt="profile pic">
        <div class="column">
          <h2>{{ friend.name }}</h2>
        </div>  
      </div>
    
    <hr>

    
  </div> <!--tanquem profile friends-->

    <!-- User info-->
  <main>
    <div class="profile_info"> 
      <article>
        <h1>{{user.name + " " + user.last_name}}</h1>
        <p class="grey_normal">{{user.email}}</p> 
      </article>
      <div class="flex_row_wrap">
        <p class="pink_normal">Barcelona, España</p>
        <div class="punctuation">
          <img class="stars" src="../../assets/images/icons/star_b.png" alt="1 estrella">
          <img class="stars" src="../../assets/images/icons/star_b.png" alt="2 estrellas">
          <img class="stars" src="../../assets/images/icons/star_b.png" alt="3 estrellas">
          <img class="stars" src="../../assets/images/icons/star_b.png" alt="4 estrellas">
          <img class="stars" src="../../assets/images/icons/star_b.png" alt="5 estrellas">
          <h5>5</h5>
        </div>
      </div>

      <p class="grey_normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit facilisis erat eu pulvinar. Nam in tincidunt dolor. Fusce non rhoncus ligula. Proin gravida ex a nisi mollis, venenatis gravida sapien aliquet. Nam sed lectus magna.</p>
      <div class="button_flex">
        <router-link to="/editarPerfil"><button class="button_pink_normal">Editar perfil</button></router-link>
        <button-icon v-on:click = "logOut()"><img class="icon" src="../../assets/images/icons/logout.png" alt="profile configuration"></button-icon>
      </div>
      <hr>

    </div>
  </main>

     <UsersEvents></UsersEvents>
     <UsersStatistics></UsersStatistics>

  </div>  
  <Friends v-else :friends = "this.friends"></Friends>

</template>

