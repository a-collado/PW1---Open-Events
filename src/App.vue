<script>
import { stringifyStyle } from "@vue/shared";
import ApiCalls from "./js/APIcalls.js";
import SearchUsers from "./components/profile/SearchUsers.vue"
import SearchEvents from "./components/SearchEvents.vue";

import { RouterLink} from "vue-router";
import { watch } from 'vue'
import router from "./router/index.js";

export default{

  // NO PODEMOS USAR 'location.replace()', tenemos que usar el routing de Vue

    components: {
        SearchUsers:SearchUsers,
        SearchEvents: SearchEvents
    },
    data() {
        return {
          imgUrl_profile: this.defaultProfilePic,
          search_bar_text:"",
          search_result_user: [],
          search_result_event: [],
          show_results_user: false,
          show_results: false,
          hasLoggedIn: false,
        }
    },
    setup(){
      const logoUrl = new URL('../images/icons/logo.png', import.meta.url)
      const chatIconUrl = new URL('../images/icons/chat.png', import.meta.url)
      const youtubeIconUrl = new URL('../images/icons/youtube.png', import.meta.url)
      const instagramIconUrl = new URL('../images/icons/instagram.png', import.meta.url)
      const twitterIconUrl = new URL('../images/icons/twitter.png', import.meta.url)
      const defaultProfilePic = new URL('../images/userDefault_profilePic.jpg', import.meta.url)
      const defaultEventPic = new URL('../images/events/defaultEvent1.webp', import.meta.url)
      return { logoUrl, chatIconUrl, youtubeIconUrl, instagramIconUrl, twitterIconUrl, defaultProfilePic, defaultEventPic};
    },

    mounted(){
      this.hasLoggedIn = ApiCalls.hasLoggedIn();
      this.goToWelcome();
      this.showProfilePic();
    },
    methods: {

        goToUserAccount(){
          this.show_results = false;
          if(ApiCalls.hasLoggedIn())
          router.push({name: 'user', params: { id: localStorage.getItem("loggedUser") }});
          else
            window.location.replace("/sign_in");
        },

        goToMessages(){
          if(ApiCalls.hasLoggedIn())
            window.location.replace("/messages");
        },
        goToWelcome(){
          this.hideSearchResults();
          if(!ApiCalls.hasLoggedIn() && window.location.pathname != "/welcome"){
            window.location.replace("/welcome");
          }
        },
        showProfilePic(){
          if(ApiCalls.hasLoggedIn()){
            this.imgUrl_profile = ApiCalls.getUrlImgLoggedUser().then((image) =>{
            this.imgUrl_profile = image;
          });
        }
          else
          {
            this.imgUrl_profile = this.defaultProfilePic;
          }
        },
        async search(){
          if(!this.search_bar_text.length == 0 && ApiCalls.hasLoggedIn())
          await ApiCalls.searchUser(this.search_bar_text).then((output) =>{
            this.search_result_user = output;
            this.showResultsUser(true);
            this.show_results = true;
            
          });
          await ApiCalls.searchEventsKeyword(this.search_bar_text).then((output) => {
            this.search_result_event = output;
            this.show_results = true;

          })

        },
        showResults(){
            this.show_results = true;
        },
        hideSearchResults(){
            this.show_results = false;
        },
        showResultsUser(visibility){
          this.show_results_user = visibility;
        },
        setAltImg(event) { 
          event.target.src = import.meta.env.VITE_DEFAULT_PROFILE_PIC;
        }, 
        /*replaceImgEventByDefault(e){
            e.target.src = this.defaultEventPic;
        },
        replaceImgUserByDefault(e) {
            e.target.src = this.defaultProfilePic;
        }*/
    }
}

</script>



<template>

  <div id="header">
    <router-link :to="{ name: 'Home' }" v-on:click="goToWelcome" v-if="hasLoggedIn"><img class=logo_header :src="logoUrl"></router-link>
    <router-link :to="{ name: 'Welcome' }" v-else><img class=logo_header :src="logoUrl"></router-link>
    <input v-on:keyup.enter="search" class="searchbar" type="text" v-model="search_bar_text" placeholder="Busca un evento o una persona" v-if="hasLoggedIn">
    <input class="searchbar" type="text" v-model="search_bar_text" placeholder="Busca un evento o una persona" v-else>
  
    <div>
      <button v-on:click="goToMessages()"><img :src="chatIconUrl" style="width:50px; height:50px"></button>
      <button v-on:click="goToUserAccount()"><img class="small_profilePic" v-bind:src = imgUrl_profile @error="setAltImg"></button>
      <!--<router-link :to="{name: 'Perfil', params: { id: 15 }}"> <button><img class="small_profilePic" v-bind:src = imgUrl_profile></button> </router-link>-->
    </div>
  </div>

  <router-view v-if="!this.show_results"></router-view>
  <div v-else>
    <div style="display:flex; justify-content: center; margin: 10px;">
        <button v-on:click="this.showResultsUser(true)">Users</button>
        <button  v-on:click="this.showResultsUser(false)">Events</button>
    </div>

    <SearchUsers v-if="this.show_results_user" :results = "this.search_result_user" @goToProfile="hideSearchResults"></SearchUsers>
    <SearchEvents v-else :results = "this.search_result_event" @goToEvent="hideSearchResults"></SearchEvents>

  </div>
  

  
  <div id="footer">
    <div id="titleFooter">
     <div><img class=logo_header :src="logoUrl"></div>
      <div>
        <img class="icon" :src="youtubeIconUrl">
        <img class="icon" :src="twitterIconUrl">
        <img class="icon" :src="instagramIconUrl">
      </div>
    </div>

    <div class="centered_vertical">
    <table>
      <tr>
        <th>Company</th>
        <th>Social</th>
        <th>Legal</th>
      </tr>
      <tr>
        <td>About us</td>
        <td>Youtube</td>
        <td>Terms</td>
      </tr>
      <tr>
        <td>Contact us</td>
        <td>twitter</td>
        <td>Privacy</td>
      </tr>
      <tr>
        <td>FAQ</td>
        <td>Instagram</td>
        <td></td>
      </tr>
    </table>
  </div>

  </div>

  
</template>

<style scoped>
/*.navbar{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}*/
button{
    margin: 10px;
    width: 80px;
    height: 50px;
}

#header {
  display:grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 33.3% 33.3%;
  background: linear-gradient(#00adbdf6, #00adbd38);
  width:100vw;
  min-width: 375px;
  justify-items: center;
  align-items: center;
}

#header > div > * {margin: 5px;}

#header div{
  grid-row-start:1;
  grid-row-end: span 2;
  grid-column-start:4;
  grid-column-end: span 2;
  display: flex;
  align-items: center;
}

#header input{
  grid-row-start:3;
  grid-row-end: span 1;
  grid-column-start:1;
  grid-column-end: span 5;
  margin-bottom: 10px;
  padding: 15px 20px 15px 15px;
  border:none;
  width:70vw;
}

#header a{
  grid-row-start:1;
  grid-row-end: span 2;
  grid-column-start:1;
  grid-column-end: span 2;
}

.logo_header{
  width:140px;
  height:80px;
}

button:has(img){
  background-color: rgb(0,0,0,0);
}

@media only screen and (min-width: 760px) {

    #header {
    grid-template-columns: 16.67% 16.67% 16.67% 16.67% 16.67%;
    grid-template-rows: 50%;
    align-items: center;
  }

  #header > div > * {margin: 5px;}

  #header div{
    grid-column-start:5;
    grid-column-end: span 2;
  }

  #header input{
    grid-row-start:1;
    grid-row-end: span 2;
    grid-column-start:3;
    grid-column-end: span 2;
    width:40vw;
    padding: 20px 40px 20px 20px;
    
  }

  #header a{
    grid-column-start:1;
    grid-column-end: span 2;
  }

  .logo_header{
    width:170px;
    height:100px;
  }
}

#footer{
  margin-top: 50px;
  background-color: #2F3F40;
  color:white;
  display:flex;
  flex-direction: column;
  width:100vw;
  min-width: 375px;
  align-items: center;
  height: 200px;
  
}

#titleFooter {
  background-color: #25585D;
  width:100vw;
  min-width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#footer div div{
  margin-left:5vw;
  margin-right: 5vw;
  display: flex;
  width:auto;

}

#footer table{
  width:80vw;
  max-width: 500px;
  text-align: left;
  margin:20px 20px 0px 0px;
  min-width: 375px;
  margin: 0px;
}

#footer table td{
  font-size: 10px;
}

.icon{ width: 40px; height: 40px;}

.centered_vertical{
  display: flex;
  align-items: center;
  height:100vw;
}


</style>


