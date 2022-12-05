<script>
import { stringifyStyle } from "@vue/shared";
import UserManagement from "./js/APIcalls.js";
export default{
    data() {
        return {
        }
    },
    methods: {

        goToUserAccount(){

          if(UserManagement.hasLoggedIn())
            window.location.replace("/perfil");
          else
            window.location.replace("/sign_in");
          
        }
    }
}

</script>

<template>
  <div id="header">
    <router-link to="/"><img class=logo_header src="src\assets\images\icons\logo.png"></router-link>
    <input class="searchbar" type="text" placeholder="¿Que tipo de evento estas buscando?">
  
    <div>
      <router-link to="/messages"><img src="src\assets\images\icons\chat.png" style="width:50px; height:50px"></router-link>
      <button><img class="small_profilePic" src="src\assets\images\profilepic.jpg" v-on:click="goToUserAccount()"></button>
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

  
  <div id="footer">
    <div id="titleFooter">
     <div><img class=logo_header src="src\assets\images\icons\logo.png"></div>
      <div>
        <img class="icon" src="src\assets\images\icons\youtube.png">
        <img class="icon" src="src\assets\images\icons\twitter.png">
        <img class="icon" src="src\assets\images\icons\instagram.png">
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

button:has(.small_profilePic){
  background-color: rgb(0,0,0,0);
  border: none;
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


