<script>
import ApiCalls from "../js/APIcalls.js"
import ChatWindow from "./ChatWindow.vue"
import router from "../router/index.js";
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue'

// Corregir error al recibir mensajes muy largos
// Hacer que no puedas empezar un chat contigo mismo

export default{
    components: {
        ChatWindow: ChatWindow,
    },
    data() {
      return {
        user: [],
        messages: [],
        typingText: "",
        show: false,
        scrollTrigger: false
      };
    },
    setup(){
        const route = useRoute();
        const id = ref();
        id.value = route.params.id;

        /*watch(
        () => route.params.id,
        async newId => {
            window.location.reload()
        },
        () => { 
            id.value = route.params.id; 
        }
        )*/

        return { id };
    },
    
    created(){
        
        this.getChatInfo(this.id);
        this.forceUpdateChat();
        
    },
    methods: {

        async getMessages(id){
            
            return ApiCalls.getMessages(id).then((output) =>{
                return output;
         });
        },
        async getUserByID(userID){
            return ApiCalls.getInfoInfoUserByID(userID).then((user) =>{
            return user[0];
          });
        },
        async getChatInfo(userID){
            return await this.getMessages(userID).then((messages) =>{
                 
                 return this.getUserByID(userID).then(user =>{
                     this.user = user;
                     this.messages = messages;
                    
                     this.show = true;
                     return
                 });
            });
        },
        sendMessage(){
            ApiCalls.sendMessage(this.user.id, this.typingText).then((output) =>{
                this.updateMessages()
                this.typingText = ""
                //window.location.reload()
          })
        },
        updateMessages(){
            this.getMessages(this.id).then(message => {
                this.messages = message;
            });
        },
        forceUpdateChat() {
            this.timer = window.setInterval(() => {
                this.updateMessages();
            }, 5000)
        }, 
        setAltImg(event) { 
          event.target.src = import.meta.env.VITE_DEFAULT_PROFILE_PIC;
        }, 
    },

}
</script>

<template>
    <div v-if="show">
        <div class="centered_horitzontal">
            <router-link :to="{ name: 'Messages' }"> <img class="icon" src="../assets/images/icons/return.png" alt="Pagina anterior"> </router-link>
                <img class="icon" src="../assets/images/icons/dots.png" alt="Más opciones">
            </div>
        <article class="flex_row_wrap">
            <img class="small_profilePic" :src="user.image" alt="Foto de perfil" @error="setAltImg">
            <div class="column">
                <h4>{{user.name + " " + user.last_name}}</h4>
                <h5 class="yellow">Ocupado</h5>
            </div>
        </article>
        <ChatWindow :messages="this.messages"></ChatWindow>
        <footer class="flex_row_wrap">
            <input v-on:keyup.enter="sendMessage" class="searchbar" type="text" placeholder="Escribe aqui..." v-model="typingText">
            <ellipse>
                <img v-on:click="sendMessage" class="icon" src="../assets/images/icons/send.png" alt="leido">
            </ellipse>
        </footer>
    </div>
    <div v-else class="empty"></div>


</template>


<style scoped>

.flex_row_wrap{
    margin-top: 0px;
    width: 90%;
    padding-right: 10%;
    padding-bottom: 10px;
    justify-items:center;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.centered_horitzontal{
    width: 95%;
    margin-left: 2.5%;
    margin-bottom: -15px;
    justify-content: space-between;
}

footer.flex_row_wrap{
    position: relative;
    justify-content: space-evenly;
    padding-top: 20px;
    padding-bottom: 25px;
    padding-left: 5%;
    bottom: -50px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.03) 68.23%, rgba(0, 0, 0, 0.11) 100%);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

footer .searchbar{
    width: 30vh;
    background: rgba(0, 0, 0, 0.06);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 19px;
    outline: none;
    border: none;
}

ellipse{
    padding: 8px;
    border-radius: 50%;
    background: #E26ABA;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    color: #FFFFFF;

    background: radial-gradient(50% 50% at 50% 50%, #E26ABA 0%, rgba(226, 106, 186, 0.48) 15.62%, #E26ABA 80.21%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

.icon{
    width: 35px;
    height: 35px;
}

ellipse img.icon{
    width: 30px;
    height: 29px;
}

p{
    margin: 17px;
    margin-right: 3px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    line-clamp: 10px;
    width: 25vh;
    color: #000000;
}

h4{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 15px;
    margin: 0px;
    margin-left: 12px;
}


h5{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 17px;
    margin: 0px;
    margin-top: 8px;
    margin-left: 15px;
}

h5.yellow{
    color: #D5D916;
}
h5.green{
    color: #75D073;
}

h5.red{
    color: #FF265A;
}

.empty{
    display: inline-block;
    margin: 0; 
    text-align: center;
    height: 1000px;
}

@font-face {
  font-family: inter;
  src: url("../assets/fonts/inter/Inter-ExtraLight-BETA.ttf");
  font-weight: light;
}

@font-face {
  font-family: inter;
  src: url("../assets/fonts/inter/Inter-Regular.ttf");
}


@font-face {
  font-family: inter;
  src: url("../assets/fonts/inter/Inter-Medium.ttf");
  font-weight: medium;
}

@font-face {
  font-family: inter;
  src: url("../assets/fonts/inter/Inter-Bold.ttf");
  font-weight: bold;
}

@media (min-width: 768px) {
    .flex_row_wrap{
        justify-content: flex-start;
    }
    
    .small_profilePic{
        margin-left: 10vw;
    }

    footer .searchbar{
        width: 60vw;
    }

    p{
        width:auto;
    }
}

</style>