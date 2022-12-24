<!-- v-bind:class = "{'participateEvent' : participateEvent()}"--><script>
import { stringifyStyle } from "@vue/shared";
import ApiCalls from "../js/APIcalls.js";
import router from "../router/index.js";
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue';

export default{

data() {
    return {
        user: [],
        event:[],
        eventStartDate:"",
        eventEndDate:"",
        eventCreator:"",
        comment:"",

        participateEvent: false,
        displaySocials:'none',
        rateEvent: false
    }  
},

setup(){
    const ROUTE = useRoute();
    const ID = ref();
    ID.value = ROUTE.params.id;

    return { ID };
},

created(){
    this.getEventByID(this.ID)
   // this.participateEvent(this.ID)
},

methods: {

    showSocials(){
        if (this.displaySocials.localeCompare("none") == 0) {
            this.displaySocials = "flex";
        } else {
            this.displaySocials = "none"; 
        }
    },
    
    async getOwnerByID(userID){
        return ApiCalls.getInfoInfoUserByID(userID).then((user) =>{
            this.user = user[0];
            this.eventCreator = this.user.name + " " + this.user.last_name;
        });
    },

    async getEventByID(eventID){
        return await ApiCalls.GetEvent(eventID).then((event) =>{
            this.event = event[0];

            var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            
            this.splitDate = this.event.eventStart_date.split(/-|T|\./);
            this.eventStartDate = this.splitDate[2] + " " + month[(parseInt(this.splitDate[1]) - 1)] + " " + this.splitDate[0] + " (" + this.splitDate[3] + ")";
            
            this.splitDate = this.event.eventEnd_date.split(/-|T|\./);
            this.eventEndDate = this.splitDate[2] + " " + month[(parseInt(this.splitDate[1]) - 1)] + " " + this.splitDate[0] + " (" + this.splitDate[3] + ")";
            
            return this.getOwnerByID(this.event.owner_id).then((eventCreator) =>{});

            return event;
        });
    },

    /*async participateEvent(eventID){
        if (this.participateEvent === false) {
            this.participateEvent = true;
            //ApiCalls.participateEvent();
        } else {
            this.participateEvent = false;
        }
        console.log(this.participateEvent);
    }*/
}

}
</script>

<template>
    <datalist id="opciones_filtro">
        <option value="Puntuación media del creador">Puntuacion Creador</option>
        <option value="Puntuación de las valoraciones">Puntuacion Valoraciones</option>
    </datalist>

    <div class="general_box">
        <div class="header_event_box">
            <img class="event_img" :src="event.image" alt="image of the event">
            <div class="footer_basicEvent"><div class="titulo"><h2>{{event.name}}</h2><h5> (De {{eventCreator}})</h5></div></div>
        </div>

        <div class="event_descrip_box">
            <div class="event_descrip">
                <div class="titulo"><h2>Descripción</h2></div>
                <div class="star">
                    <h5>5</h5>
                    <img class="stars" src="../assets/images/icons/star_b.png" alt="1 estrella">
                    <img class="stars" src="../assets/images/icons/star_b.png" alt="2 estrellas">
                    <img class="stars" src="../assets/images/icons/star_b.png" alt="3 estrellas">
                    <img class="stars" src="../assets/images/icons/star_b.png" alt="4 estrellas">
                    <img class="stars" src="../assets/images/icons/star_b.png" alt="5 estrellas">
                </div>
            </div>
            <div class="texto"><h5>({{event.type}}) {{event.description}}</h5></div>
            <div class="event_buttons">
                <button  v-on:click="participateEvent()" class="button_pink_small">Participar</button>
                <div class="shareSocials"><button v-on:click="showSocials()" class="button_purple_small">Compartir</button>
                    <div class="row_medias" v-bind:style="{display: displaySocials}">
                        <a href="https://www.whatsapp.com/"><button class="socialMedia"><img class="icon" src="../assets/images/icons/whatsapp.png"></button></a>
                        <a href="https://www.instagram.com/"><button class="socialMedia"><img class="icon" src="../assets/images/icons/instagram.png"></button></a>
                        <a href="https://twitter.com/"><button class="socialMedia"><img class="icon" src="../assets/images/icons/twitter.png"></button></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="helper_box_pant">
            <div class="rectangle_gray">
                <div class="helper_box">
                    <div class="event_info">
                        <img class="icon" src="../assets/images/icons/schedule.png" alt="icon">
                        <div class="column">
                            <div class="texto"><h5>From: {{eventStartDate}}</h5></div>
                            <div class="texto"><h5>To: {{eventEndDate}}</h5></div>
                        </div>
                    </div>
                    <div class="event_info">
                        <img class="icon" src="../assets/images/icons/gglMapsButton.png" alt="icon">
                        <div class="texto"><h5>{{event.location}}</h5></div>
                    </div>
                </div>
            </div>

            <div class="rectangle_gradient">
                <div class="event_info">
                    <div class="titulo"><h2>{{event.n_participators}}</h2></div>
                    <div class="titulo"><h3 class="pink">Participantes</h3></div>
                </div>
            </div>
        </div>
        
        <div class="helper_box">
            <div class="event_resenas_header">
                <div class="titulo"><h2>Reseñas del Evento</h2></div>
                <button-icon><img class="icon" src="../assets/images/icons/up-down.png" alt="filter"></button-icon>
            </div>


            <table>
                <tr><div class="resena">
                    <router-link to="/perfil" id="button"><div class="resena_persona">
                        <img class="profile_pic_message" src="../assets/images/profilepic.webp" alt="Foto de perfil">
                        <div class="resena_info">
                            <div class="texto"><h5>Nombre Apellido</h5></div>
                            <div class="punctuation">
                                <h5>5</h5>
                                <img class="stars" src="../assets/images/icons/star_b.png" alt="1 estrella">
                                <img class="stars" src="../assets/images/icons/star_b.png" alt="2 estrellas">
                                <img class="stars" src="../assets/images/icons/star_b.png" alt="3 estrellas">
                                <img class="stars" src="../assets/images/icons/star_b.png" alt="4 estrellas">
                                <img class="stars" src="../assets/images/icons/star_b.png" alt="5 estrellas">
                            </div>
                        </div>
                    </div></router-link>
                    <div class="texto"><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit facilisis erat eu pulvinar. Nam in tincidunt dolor. Fusce non rhoncus ligula. Proin gravida ex a nisi mollis, venenatis gravida sapien aliquet. Nam sed lectus magna.</h5></div>
                </div></tr>
                <tr><div class="resena">
                    <router-link to="/perfil" id="button"><div class="resena_persona">
                        <img class="profile_pic_message" src="../assets/images/profilepic.webp" alt="Foto de perfil">
                        <div class="resena_info">
                            <div class="texto"><h5>Nombre Apellido</h5></div>
                            <div class="punctuation">
                                <h5>5</h5>
                                <img class="stars" src="../assets/images/icons/star_b.png" alt="1 estrella">
                                <img class="stars" src="../assets/images/icons/star_b.png" alt="2 estrellas">
                                <img class="stars" src="../assets/images/icons/star_b.png" alt="3 estrellas">
                                <img class="stars" src="../assets/images/icons/star_b.png" alt="4 estrellas">
                                <img class="stars" src="../assets/images/icons/star_b.png" alt="5 estrellas">
                            </div>
                        </div>
                    </div></router-link>
                    <div class="texto"><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit facilisis erat eu pulvinar. Nam in tincidunt dolor. Fusce non rhoncus ligula. Proin gravida ex a nisi mollis, venenatis gravida sapien aliquet. Nam sed lectus magna.</h5></div>
                </div></tr>
            </table>

            <div class="size_input"><input class="general_input" type="text" placeholder="Añade tu comentario"></div> 
            <div class="row_flexEnd">
                <h5>5</h5>
                <button><img class="stars" src="../assets/images/icons/star_b.png" alt="1 estrella"></button>
                <button><img class="stars" src="../assets/images/icons/star_b.png" alt="2 estrellas"></button>
                <button><img class="stars" src="../assets/images/icons/star_b.png" alt="3 estrellas"></button>
                <button><img class="stars" src="../assets/images/icons/star_b.png" alt="4 estrellas"></button>
                <button><img class="stars" src="../assets/images/icons/star_b.png" alt="5 estrellas"></button>
            </div>

        </div>
        
        
        <button class="button_pink_small">Crear comentario</button>
    </div>
</template>

<style scoped>

/* General*/

.socialMedia {
    margin: 3px;
    margin-top:6px;
}

.row_medias {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}

.shareSocials {
    display: flex;
    flex-direction: column;
    align-items: center;
}

table {
    border-collapse: collapse;
    width: 100%;
}

.resena > * {
    margin-left: 10px;
    margin-right: 10px;
}

tr:nth-child(even) {background-color: rgb(237, 237, 237);}

.size_input{
  width:100%;
  display: flex;
  margin-top: 15px;
}

.row_flexEnd > h5 {
    margin: 4px;
}

.event_descrip_box > row_flexEnd {
    margin-top: 5px;
    margin-right: 145px;
}

.general_input{
  width:100%;
  height: 5px;
  margin:5px;
  padding: 20px 40px 20px 20px;
  border: 1px solid #00adbdf6;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
}

.row_flexEnd {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}

h3.pink{
    color: #C772BA;
}

.titulo > *{
    margin: 0px;
}

.texto > *{
    margin: 0px;
    text-align: justify;
    text-justify: inter-word;
}

.rectangle_gray {
    width: 100%;
    height: 90px;
    border-radius: 10px;
    background-color: rgb(237, 237, 237);
    border: 1px solid rgb(210, 210, 210);
    display: flex;
}

.rectangle_gradient {
    width: 100%;
    height: 90px;
    border-radius: 10px;
    background: linear-gradient(#00ADBD, #ffffff);
    border: 1px solid #00ADBD;
    display: flex;
}

.participateEvent {
    background-color: lightblue;
    border: green solid 2px;
    color: red;
}

.profile_pic_message{
    width: 61px;
    height: 61px;
    object-fit: cover;
    object-position: 100% 0;
    border-radius: 50%;
}

.helper_box {
    width:100%;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.helper_box_pant {
    width:100%;
    height: 210px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

/* Cuerpo Pagina */
.general_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-top: 2vw;
    margin-bottom: 2vw;
}

/*Evento Pagina*/
.general_page_box {
    width: 85%;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

/* Nombre Evento */
.header_event_box {
    width:100%;
    height: 140px;
    filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.4));
    margin-top: 10px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

/* Descripcion */
.event_descrip_box {
    width:100%;
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.event_descrip {
    width:100%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}
.event_descrip > {
    margin-top: 5px;
    margin-bottom: 0px;
}
.star {
    margin-bottom: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.star > h5 {
    margin: 3px;
}
.event_buttons {
    width:100%;
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
}

/* Info Event */
.event_info {
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
}

/* Reseñas */

.event_resenas_header{
    width:100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}

.resena {
    width:100%;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.resena_persona {
    width:100%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
}
.resena_info {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}


@media  screen and (min-width: 768px) {

    .rectangle_gray{
        width: 100%;
        height: 90px;
        margin-right: 10px;
        border-radius: 10px;
        background-color: rgb(237, 237, 237);
        border: 1px solid rgb(210, 210, 210);
        display: flex;
    }

    .rectangle_gradient{
        width: 100%;
        height: 90px;
        margin-left: 10px;
        border-radius: 10px;
        background: linear-gradient(#00ADBD, #ffffff);
        border: 1px solid #00ADBD;
        display: flex;
    }

    .helper_box_pant{
        width:100%;
        height: 90px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .event_descrip_box {
    margin-top: 70px;
}
}
</style>