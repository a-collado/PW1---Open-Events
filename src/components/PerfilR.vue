<script>
import UsersEvents from "./UsersEvents.vue";
import UsersStatistics from "./UsersStatistics.vue";
import { stringifyStyle } from "@vue/shared";
import ApiCalls from "../js/APIcalls.js";
import { registerRuntimeCompiler } from "vue";
import FriendsList from "./FriendsList.vue"


//TODO IMPORTANTE: Hacer que no se vea la pagina hasta que acabe de cargar, porque puedes ver por un momento la pagina del anterior usuario

export default{
    components:{
      FriendsList: FriendsList
    },
    data() {
      return {
        friends : [],
        user: [],
        isFriend: false,
        showFriends: false
      };
    },

    mounted(){
      this.setProfileInfo()
      this.getFriends()
    },

    methods: {

        getFriends(){
          this.friends = ApiCalls.getUserRFriends().then((friends) =>{
            this.friends = friends;
            return friends
          }).then(body => {
            body.forEach(this.checkIfFriend);
          });
          
        },
         setProfileInfo(){
          this.user = ApiCalls.getInfoInfoUserR().then((user) =>{
            this.user = user[0];
          });
         },
         goToProfileR(id){

          if (id == localStorage.getItem("loggedUser"))
          {
              window.location.replace("/perfil");
          }else{
              window.localStorage.setItem("userR", id);
              window.location.replace("/perfilR");
          }
        } ,
        sendFriendRequest(){
          // Comprovar que no le hayas enviado ya una solicitud
          ApiCalls.sendFriendRequest(localStorage.getItem("userR")).then((output) =>{
            console.log(output)
          });
        },
        showFriendList(b){
          this.showFriends = b;
        },
        checkIfFriend(friend){

          if (friend.id == localStorage.getItem("loggedUser")) {
            this.isFriend = true;
          }

        },
         
        }
    }

</script>



<template>

<div v-if="!showFriends">
  <div class="profile_header">
    <img class="landscape" src="https://cnnespanol.cnn.com/wp-content/uploads/2022/08/220731233929-hyperion-tree-full-169.jpg?quality=100&strip=info" alt="Profile">
    <img class="profilePic" :src="user.image" alt="Avatar">
    
    <div class="profileButtons">
      <button class="button_blues_small" v-on:click.prevent="showFriendList(true)">{{friends.length}} Amigos</button>
      <button class="button_blues_small">2 Eventos</button>
    </div>
  </div>

  <div class="profile_friends">
    <h1 v-on:click.prevent="showFriendList(true)">Amigos ({{friends.length}})</h1>

    <div class="flex_row_wrap" v-on:click="goToProfileR(friend.id)" v-for="friend in friends" :key="friend.id">
        <img :src="friend.image" alt="profile pic">
        <div class="column">
          <h2>{{ friend.name }}</h2>
        </div>  
    </div>
  </div> <!--tanquem profile friends-->

    <!-- User info-->
  <main>
    <div class="profile_info"> 
      <article>
        <h1>{{user.name}}</h1>
        <p class="grey_normal">{{user.email}}</p> 
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
        <button v-if="!isFriend" class="button_pink_normal" v-on:click.prevent="sendFriendRequest">Enviar solicitud</button>
        <button v-else class="button_pink_normal">Amigo</button>
        <button-icon><router-link to="/chat"><img class="icon" src="../assets/images/icons/edit.png" alt="send message button"></router-link></button-icon>
      </div>
      <hr>

    </div>
  </main>
  <!-- -->

      
  <div class="events_statistics_background">
    <div class = "events_statistics_buttons">
      <button class="eventStatistics"> Eventos </button>
      <router-link to="/perfilR_statistics" id="button"><button class="eventStatistics_Nselected"> Estadísticas </button></router-link>
    </div>
    <div class="filter_events">
      <button>Todos</button>
      <button>Creados</button>
      <button>Inscrito</button>
      <button-icon><img class="icon" src="../assets/images/icons/up-down.png" alt="filter">
      </button-icon>
    </div>

    <div class="event_group">

      <router-link to="/event">
        <figure class="basic_event">
          <img class="event_img" src="../assets/images/events/80_party_event.jpg" alt="image of the event">
          
          <div class="footer_basicEvent"> 
            <h2 class="blue_big">Fiesta de los 80</h2>

            <div class="column"> 
              <div class="flex_row_wrap">
                <img class="icon" src="../assets/images/icons/schedule.png" alt="icon">
                <p class="blue_small_bold">09/11/2021<br>20:00</p>
              </div>

              <div class="flex_row_wrap">
                <img class="icon" src="../assets/images/icons/maps.png" alt="icon">
                <p class="blue_small_bold">Barcelona</p>
              </div>
            </div>

          </div><!--Footer del event-->
        </figure> <!--Tanquem figure del event-->
      </router-link>

      <router-link to="/event">
        <figure class="basic_event">
          <img class="event_img" src="../assets/images/events/80_party_event.jpg" alt="image of the event">
          
          <div class="footer_basicEvent"> 
            <h2 class="blue_big">Fiesta de los 80</h2>

            <div class="column"> 
              <div class="flex_row_wrap">
                <img class="icon" src="../assets/images/icons/schedule.png" alt="icon">
                <p class="blue_small_bold">09/11/2021<br>20:00</p>
              </div>

              <div class="flex_row_wrap">
                <img class="icon" src="../assets/images/icons/maps.png" alt="icon">
                <p class="blue_small_bold">Barcelona</p>
              </div>
            </div>

          </div><!--Footer del event-->
        </figure> <!--Tanquem figure del event-->
      </router-link>

      <router-link to="/event">
        <figure class="basic_event">
          <img class="event_img" src="../assets/images/events/80_party_event.jpg" alt="image of the event">
          
          <div class="footer_basicEvent"> 
            <h2 class="blue_big">Fiesta de los 80</h2>

            <div class="column"> 
              <div class="flex_row_wrap">
                <img class="icon" src="../assets/images/icons/schedule.png" alt="icon">
                <p class="blue_small_bold">09/11/2021<br>20:00</p>
              </div>

              <div class="flex_row_wrap">
                <img class="icon" src="../assets/images/icons/maps.png" alt="icon">
                <p class="blue_small_bold">Barcelona</p>
              </div>
            </div>

          </div><!--Footer del event-->
        </figure> <!--Tanquem figure del event-->
      </router-link>

      <router-link to="/event">
        <figure class="basic_event">
          <img class="event_img" src="../assets/images/events/80_party_event.jpg" alt="image of the event">
          
          <div class="footer_basicEvent"> 
            <h2 class="blue_big">Fiesta de los 80</h2>

            <div class="column"> 
              <div class="flex_row_wrap">
                <img class="icon" src="../assets/images/icons/schedule.png" alt="icon">
                <p class="blue_small_bold">09/11/2021<br>20:00</p>
              </div>

              <div class="flex_row_wrap">
                <img class="icon" src="../assets/images/icons/maps.png" alt="icon">
                <p class="blue_small_bold">Barcelona</p>
              </div>
            </div>

          </div><!--Footer del event-->
        </figure> <!--Tanquem figure del event-->
      </router-link>

    </div> <!--Event group-->
  </div> <!--Tanquem div gran dels events i estadístiques AMB botons-->

  <!---->

</div>

<div v-else>
  <article class="centered_vertical" id="cv">
    <div class="flex_row_wrap" id="f">
        <img class="icon" v-on:click.prevent="showFriendList(false)" src="../assets/images/icons/return.png" alt="Pagina anterior">
        <h2>Amigos( {{ friends.length }} )</h2>
    </div>
    </article>
  <FriendsList :friends = "this.friends"></FriendsList>
</div>


</template>

<style scoped>

#cv {
        width: auto;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20px;
}

#f {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
}

</style>
