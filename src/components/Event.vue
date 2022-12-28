<!----><script>
import { stringifyStyle } from "@vue/shared";
import ApiCalls from "../js/APIcalls.js";
import router from "../router/index.js";
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue';

export default{

data() {
    return {
       // logedUser: [],
        event: [],
        assistances: [],
        eventStartDate:"",
        eventEndDate:"",
        eventCreator:"",
        eventRating:"",
        totalComents:"",
        userComment:"",
        userRating:"",

        participate: false,
        postComment: false,
        displaySocials:'none',
        displayStars:'none',

        errorValoration: false,
        errorParticipation: ""
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
    this.getAssistancesByID(this.ID)
    this.participateEvent(this.ID)
    this.forceUpdate()
    //getLoggedUser()
},

methods: {

    showSocials(){
        if (this.displaySocials.localeCompare("none") == 0) {
            this.displaySocials = "flex";
        } else {
            this.displaySocials = "none"; 
        }
    },

    showStars(){
        if (this.displayStars.localeCompare("none") == 0) {
            this.displayStars = "flex";
        } else {
            this.displayStars = "none"; 
        }
    },
    
    async participateEvent(eventID) {
        return ApiCalls.getUserAssistanceEvents().then((eventsAssistance) =>{
            for (let i = 0; i < eventsAssistance.length; i++) {
                if (parseInt(eventID) === eventsAssistance[i].id) {
                    this.participate = true;
                    this.userRating = eventsAssistance[i].puntuation;
                    this.userComment = eventsAssistance[i].comentary;
                    if (this.userComment) {
                        this.postComment = true;
                    }
                }
            }
        });
    },

    async changeParticipationEvent(){
        
        let localDate = (new Date()).toISOString();
        if (localDate > this.event.eventStart_date) {
            this.errorParticipation = 'No se admiten cambios tras el inicio del evento.';

        } else {
            if (this.participate === true) {
                this.participate = false;
                return ApiCalls.deleteUserAssistanceEvent(this.event.id).then((response) =>{
                });

            } else {
                if (this.assistances.length < this.event.n_participators) {
                    this.participate = true;
                    this.errorValoration = false;
                    return ApiCalls.createUserAssistanceEvent(this.event.id).then((response) =>{
                    });
                } else {
                    this.errorParticipation = 'Inscripciones agotadas.';
                    this.errorValoration = false;
                }
            }
        }
    },

    async addEventValoration(userRating, userComment){
        console.log(userRating, userComment)
        if (this.participate === true) {
            
            if ((userRating.toString()).localeCompare("delete") == 0 || userComment.localeCompare("delete") == 0) {
                console.log('borrar')
                if (userRating.localeCompare("delete") == 0) {console.log("aaa")
                    this.userRating = '';
                } else {
                    this.userComment = ''; console.log('borrare')
                    this.postComment = false;
                }

            } else {
                console.log('guardar')
                if (userRating !== '' || userRating !== null) {
                    this.userRating = userRating; console.log("aaae")
                } else {
                    this.userComment = userComment;console.log("eeeee")
                    this.postComment = true;
                }
            }

            console.log(this.event.id, this.userRating, this.userComment)
            return ApiCalls.editUserAssistanceEvent(this.event.id, this.userRating, this.userComment).then((response) =>{});
        } else {
            this.errorValoration = true;
        }  
    },

    async getOwnerByID(userID){
        return ApiCalls.getInfoInfoUserByID(userID).then((ownerEventUser) =>{
            this.eventCreator = ownerEventUser[0].name + " " + ownerEventUser[0].last_name;
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
            
            this.event.location = this.event.location.replace('(', ' (');

            this.getOwnerByID(this.event.owner_id).then((eventCreator) =>{});
        });
    },

    async getAssistancesByID(eventID){
        return ApiCalls.getAssistancesFromEvent(eventID).then((assistances) =>{
           this.assistances = assistances;
           let totalStars = 0;
           let totalComents = 0;
           let numRatings = 0;
           for (let i = 0; i < assistances.length; i++) {
                if (assistances[i].puntuation !== null) {
                   totalStars += parseInt(assistances[i].puntuation);
                   numRatings += 1;
                }
                if(assistances[i].puntuation !== null || assistances[i].comentary !== null){
                    totalComents += 1;
                }
           }

           this.totalComents = totalComents;
           if (numRatings !== 0) {
                this.eventRating = Math.round(totalStars / numRatings);
           } else {
                this.eventRating = "Sin Valoraciones"
           }
        });
    },

    updateContent() {
        this.getEventByID(this.event.id);
        this.getAssistancesByID(this.event.id);
        this.errorParticipation = false;
    },

    forceUpdate() {
        this.timer = window.setInterval(() => {
            this.updateContent();
        }, 5000)
    },

    goToProfile(userID){
        router.push({name: 'user', params: {id: userID}});
    }
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
            <div class="footer_basicEvent"><div class="titulo; flex_row_spaceBetween"><h2>{{event.name}} </h2><h5> - ({{eventCreator}})</h5></div></div>
        </div>

        <div class="event_descrip_box">
            <div class="event_descrip">
                <div class="titulo"><h2>Descripción</h2></div>
                <div class="star" v-if="eventRating != 'Sin Valoraciones'">
                    <h5>{{eventRating}}</h5>
                    <div v-for="i in parseInt(eventRating/2)" :key="i">
                        <img class="stars" src="../assets/images/icons/star_b.png" alt="estrella">
                    </div>
                    <div><img class="stars" v-if="eventRating%2 != 0" src="../assets/images/icons/star_c.png" alt="estrella"></div>
                    <div v-for="i in parseInt(5-eventRating/2)" :key="i">
                        <img class="stars" src="../assets/images/icons/star_a.png" alt="estrella">
                    </div>
                </div>
                <div v-else><h5>{{eventRating}}</h5></div>
            </div>
            <div class="texto"><h5>({{event.type}}) {{event.description}}</h5></div>
            <p class="Error_Input " v-if="errorParticipation != ''">Ya no pueden realizarse cambios en la inscripción</p>
            <div class="event_buttons">
                <button v-on:click="changeParticipationEvent()" class="button_pink_small" v-if="!participate">Participar</button>
                <button v-on:click="changeParticipationEvent()" class="button_pink_small" v-else>Inscrito</button>
                <div class="shareSocials">
                    <button v-on:click="showSocials()" class="button_purple_small">Compartir</button>
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
                            <div class="texto"><h5>Desde: {{eventStartDate}}</h5></div>
                            <div class="texto"><h5>Hasta: {{eventEndDate}}</h5></div>
                        </div>
                    </div>
                    <div class="event_info">
                        <img class="icon" src="../assets/images/icons/gglMapsButton.png" alt="icon">
                        <div class="texto"><h5>{{event.location}}</h5></div>
                    </div>
                </div>
            </div>

            <div class="rectangle_gradient"><div class="helper_box">
                <div class="event_info">
                    <div class="titulo"><h2>{{assistances.length}}</h2></div>
                    <div class="titulo"><h3 class="pink">Participantes</h3></div>
                </div>
                <div class="event_info"><div class="texto"><h5>(máx {{event.n_participators}})</h5></div></div>
            </div></div>
        </div>
        
        <div class="helper_box">
            <div class="event_resenas_header">
                <div class="titulo"><h2>Reseñas del Evento</h2></div>
                <!--<button-icon><img class="icon" src="../assets/images/icons/up-down.png" alt="filter"></button-icon>-->
            </div>

            <div v-if="!totalComents"><h5>No hay comentarios.</h5></div>
            <div v-else>
                <table>
                    <tr v-for="assistance in assistances" :key="assistance.id"><div clas="resena" v-if="assistance.puntuation !== null || assistance.comentary !== null">
                        <div class="resena_persona" v-on:click="goToProfile(assistance.id)">
                            <img class="profile_pic_message" src="../assets/images/icons/verified.png" alt="Foto de perfil">
                            <div class="resena_info">
                                <div class="texto"><h5>{{assistance.name}} {{assistance.last_name}}</h5></div>
                                <div class="punctuation" v-if="assistance.puntuation !== null">
                                    <div v-for="i in parseInt(assistance.puntuation/2)" :key="i">
                                        <img class="stars" src="../assets/images/icons/star_b.png" alt="estrella">
                                    </div>
                                    <img class="stars" v-if="assistance.puntuation%2 != 0" src="../assets/images/icons/star_c.png" alt="estrella">
                                    <div v-for="i in parseInt(5-assistance.puntuation/2)" :key="i">
                                        <img class="stars" src="../assets/images/icons/star_a.png" alt="estrella">
                                    </div>
                                    <h5>{{assistance.puntuation}}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="texto" v-if="assistance.comentary !== null"><h5>{{assistance.comentary}}</h5></div>
                    </div></tr>
                </table>
            </div>

            <p class="Error_Input " v-if="errorValoration">Inscribete al evento para añadir una reseña</p>
           
            <div class="size_input" v-if="!postComment"><input class="general_input" type="text" placeholder="Añade tu comentario" v-model="userComment"></div>
            <div class="size_input" v-else><input class="general_input" type="text" readonly="readonly" placeholder="Añadiste un comentario"></div>
            <div class="flex_row_spaceBetween">
                <div class="row_flexStart">
                    <button v-on:click="addEventValoration('delete', '')" v-if="userRating"><img class="stars" src="../assets/images/icons/cancel.png" alt="cancelar"></button>
                    <button v-on:click="showStars()"><img class="stars" src="../assets/images/icons/userStar.png" alt="estrellaUser"></button>
                    <h5 v-if="userRating">{{userRating}}</h5>
                </div>
                <div class="row_flexEnd" v-if="!userRating" v-bind:style="{display: displayStars}">
                    <div v-for="i in parseInt(10)" :key="i">
                        <button v-on:click="showStars(); addEventValoration(i, '')"><img class="stars" src="../assets/images/icons/star_a.png" alt="estrella"></button>
                    </div>
                </div>
                <div class="row_flexEnd" v-if="userRating" v-bind:style="{display: displayStars}">
                    <div v-for="i in parseInt(userRating)" :key="i">
                        <button v-on:click="showStars(); addEventValoration(i, '')"><img class="stars" src="../assets/images/icons/star_b.png" alt="estrella"></button>
                    </div>
                    <div v-for="i in parseInt(10 - userRating)" :key="i">
                        <button v-on:click="showStars(); addEventValoration(i + userRating, '')"><img class="stars" src="../assets/images/icons/star_a.png" alt="estrella"></button>
                    </div>
                </div>
                
            </div>
        </div>
        
        
        <button class="button_pink_small" v-on:click="addEventValoration('', userComment)" v-if="!postComment">Crear comentario</button>
        <button class="button_pink_small" v-on:click="addEventValoration('', 'delete')" v-else>Borrar comentario</button>
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

.flex_row_spaceBetween {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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

.row_flexStart {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.row_flexStart > h5 {
    margin: 0px;
    margin-left: 5px;
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
    margin-bottom: 15px;
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