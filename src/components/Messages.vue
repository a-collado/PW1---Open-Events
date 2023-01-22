<script>
import ApiCalls from "../js/APIcalls.js"
import Chat from "./Chat.vue"
import router from "../router/index.js";


// TODO: Hay que corregir la preview de los mensajes

export default{
    components:{
      Chat: Chat
    },
    data() {
        return {
            users: [],                  // Lista de todos los usuarios que tienen un chat con el usuario logeado
            lastMessageContent: [],     // Ultimo mensaje enviado en cada conversacion
            lastMessageHour: [],        // Hora del ultimo mensaje enviado en cada conversacion
        }
    },
    created(){
        this.getPreviewMessages();
    },
    methods: {




        // Obtenemos todos los usuarios que tienen chats con el usuario logeado
        async getUserMessages(){
            return await ApiCalls.getMessageUsers().then((output) =>{
            this.users = output;
            return output;
          });
        },
        // Obtenemos todos los mensajes entre el usuario logeado y el usuario con correspondiente con la id
        getMessages(id){
            
            return ApiCalls.getMessages(id).then((output) =>{
                return output
            ;
         });
        },
        // Obtenemos el ultimo mensaje de cada uno de los chats del usuario registrado
        getLastMessage(id){
            return this.getMessages(id).then((output) =>{

            return output[output.length-1];
        });
        },

        // Entramos a el chat con el usuario correspondiente con la id
        enterChat(userID){
            router.push({ name: 'Chat' , params: {id: userID}})
        },

        // Mostramos en cada chat el ultimo mensaje y la hora a la que se ha enviado
        getPreviewMessages(){
            this.getUserMessages().then((users)=>{
            this.lastMessage = new Array();

            users.forEach(user => {
                this.getLastMessage(user.id).then((message)=>{
                    this.lastMessageContent.push(message.content)  
                    this.lastMessageHour.push(message.timeStamp.substr(11,5))                  
                });
                
            });

            });
        },

        // Cuando no se puede cargar la imagen de perfil de un usario la sustiuye por una foto por defecto. 
        setAltImg(event) { 
          event.target.src = import.meta.env.VITE_DEFAULT_PROFILE_PIC;
        }, 

    },


}

</script>


<template>

<div>    

<article class="centered_vertical">
    <div class="flex_row_wrap">
        <h1>Mensajes</h1>
    </div>
</article>

<main>
    <div class="column">

        <article class="flex_row_wrap" v-for="(user, index) in users" :key="user.id">     <!-- Persona -->
            <div class="profile_pic_message">
                <router-link :to="{ name: 'user' , params: {id: user.id}}"> <img class="small_profilePic" :src="user.image" alt="Foto de perfil" @error="setAltImg"> </router-link>
                <ellipse class="green"></ellipse>
            </div>
            <div class="centered_vertical" v-on:click="this.enterChat(user.id)">
                    <h4>{{user.name + " " + user.last_name}}</h4>
                    <div>
                        <img class = "message_icon" src="../assets/images/icons/read_g.png" align="left" />
                        <p>{{ this.lastMessageContent[index] }}</p>
                    </div>
            </div>
            <div>
                <h6>{{lastMessageHour[index]}}</h6>
            </div>
        </article>

    </div>
</main>

</div>

</template>


<style scoped>

    .flex_row_wrap{
        width: 83%;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    .column .flex_row_wrap{
        margin-top: 15px;
        width: 90%;
        justify-items:center;
        align-items: stretch;
    }

    .centered_vertical{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .flex_row_wrap .centered_vertical{
        align-items:flex-start;
        width: 80%;
    }

    .column{
        align-items: center;
    }

    .profile_pic_message{
        margin-right: -20px;
    }

    .searchbar{
        background: rgba(0, 0, 0, 0.07);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        padding: 15px; 
        margin-bottom: 5px;
        border-style: none;
        outline: none;        
    }

    .message_icon{
        width: 18px;
        height: 18px;
        margin-right: 15px;
        margin-left: 15px;
    }

    ellipse{
        padding-top: 3px;
        padding-right: 7px;
        padding-bottom: 3px;
        padding-left: 7px;
        border-radius: 50%;
        background: #E26ABA;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 12px;
        color: #FFFFFF;
    }

    .profile_pic_message ellipse{
        position: relative;
        padding-top: 4px;
        padding-right: 10px;
        padding-bottom: 4px;
        padding-left: 10px;
        top: -8px;
        left: -20px;
        background: #ABABAB;
        border: 2px solid #ffffff;
        z-index: 1;
    }

    .profile_pic_message ellipse.red{
        background: #FF265A;
    }

    .profile_pic_message ellipse.green{
        background: #75D073;
    }

    .profile_pic_message ellipse.yellow{
        background: #D5D916;
    }

    h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    h4{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 15px;
        margin: 0px;
        margin-left: 10px;
    }

    h6{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: -0.1em;
        color: #ABABAB;
        margin: 0px;
    }

    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        color: rgba(0, 0, 0, 0.33);
        margin: 0px;
        width: 90%;
        line-height: 1.5;
        margin-left: 20px;
    }

    p.writing{
        font-weight: 600;
        color: #E26ABA;
    }

    .empty{
        display: inline-block;
        margin: 0; 
        text-align: center;
        height: 1000px;
    }
       


    @media (min-width: 768px) {
        .column{
            width: 60vw;
            margin-left: 20vw;
        }

        .flex_row_wrap{
            width: 50vw;
            
        }

        .centered_vertical{
            margin-top: 10px;
            justify-content: flex-start;
            align-items: center;
        }

        .message_icon{
            margin-top: 5px;
        }

        .profile_pic_message{
            margin-right: -5vw;
        }

        p {
            margin-top: 5px;
            width: 100%;
        }
    }


</style>