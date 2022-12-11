<script>
import { stringifyStyle } from "@vue/shared";
import ApiCalls from "../js/APIcalls.js";
/*import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";*/

export default{

    /*defineComponent({
        components: {GoogleMap, Marker},
        setup() {
            const center= { lat: 41.3828939, lng: 2.1774322 },
            return center;
        },
    }),*/

    data() {
        return {
            imgEvent_URL: "",
            eventName: "",
            eventDescription: "",
            eventMaxAssistents: 1,
            initialDate: "",
            initialHour: "",
            finalDate: "",
            finalHour: "", 
            eventAdress: "",
            eventLatitude: "",
            eventLongitude: "",
            eventType:""
        }  
    },

    methods: {

        initializeMap(){
            
            var map = new google.maps.Map(document.getElementById("map"), mapInit);    
        },

        createEvent(){
            console.log(imgEvent_URL, eventName, eventDescription, eventMaxAssistents, initialDate, initialHour, finalDate, finalHour, eventAdress, eventLatitude, eventAltitud);
            //window.location.replace("/");
        }     
    }
    
}

</script>

<template>

        <div class="centered_column_width">
            
            <div class="generic_inputLabel">
                <label><p class="darkblue_normal_bold">Imagen del Evento</p></label>
                <div class="background_image_box">
                    <div class="centered_horitzontal"><button><img id="editIcon" src="../assets/images/icons/editar.png" alt="edit image"></button></div>
                </div>
                <input class="general_input" type="text" placeholder="URL imagen para el evento" v-model="imgEvent_URL">
            </div>

            <div class="generic_inputLabel">

                <div class="spaceBetween">
                    <div>
                        <label><p class="darkblue_normal_bold">Nombre del evento</p></label>
                        <input class="general_input" type="text" placeholder="Nombre del Evento" v-model="eventName">
                    </div>

                    <div>
                        <label><p class="darkblue_normal_bold">Tipo de evento</p></label>
                        <select class="input_timeHour" v-model="eventType">
                            <option value="Social">Social</option>
                            <option value="Educativo">Educativo</option>
                            <option value="Deportivo">Deportivo</option>
                            <option value="Empresarial">Empresarial</option>
                            <option value="Reunión">Reunión</option>
                            <option value="Convención">Convención</option>
                            <option value="Cultural">Cultural</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="generic_inputLabel">
                <label><p class="darkblue_normal_bold">Descripción</p></label>
                <input class="general_input" type="text" placeholder="Descripción del Evento" v-model="eventDescription">
            </div>

            <div class="generic_inputLabel">
                <label><p class="darkblue_normal_bold">Numero máximo de assistentes (1-1000)</p></label>
                <div class="flex_row_center">
                    <input type="range" min="1" max="1000" id="slider_assistents" v-model="eventMaxAssistents">
                    <input class="price_input" type="text" placeholder="XXX" v-model="eventMaxAssistents">
                </div>
            </div>

            <div class="generic_inputLabel">

                <div class="spaceBetween">
                    <div>
                        <label><p class="darkblue_normal_bold">Fecha y hora del inicio evento</p></label>
                        <input type="date" id="start" name="trip-start" class="input_timeHour">
                        <input type="time" class="input_timeHour">
                    </div>

                    <div>
                        <label><p class="darkblue_normal_bold">Fecha y hora del final evento</p></label>
                        <input type="date" id="start" name="trip-start" class="input_timeHour">
                        <input type="time" class="input_timeHour">
                    </div>
                </div>
                
            </div>

            <div class="generic_inputLabel">
                <label><p class="darkblue_normal_bold">Ubicación/dirección del evento</p></label>
                <input class="general_input" type="text" placeholder="Ubicación del Evento">
                <div id="map"></div>
            </div>

            <!-- <GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" style="width: 100%; height: 500px" :center="center" :zoom="10">
                <InfoWindow :options="{ position: center, content: 'Hello World!' }" />
                <InfoWindow :options="{ position: { lat: center.lat, lng: 150.8 } }"> Content passed through slot </InfoWindow>
            </GoogleMap> -->
            
            <button class="button_pink_normal" v-on:click="createEvent()">Crear Evento</button>
        </div>
    
</template>

<style scoped>
.titulo > *{
    margin: 0px;
    margin-bottom: 4px;
}

.background_image_box[data-v-19a51518] {
    width: 100%;
    padding: 10px;
    height: 110px;
    margin-top: 5px;
    border-radius: 10px;
    border: 1px solid #00adbdf6;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
}

.general_page_box {
    width: 85%;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.size_input{
  width:100%;
  display: flex;
}

.flex_row_center{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.flex_centered{
  display: flex;
  flex-direction: center;
  align-items: center;
}

#linea{
  content: '';
  width: 100%;
  height: 7px;
  background-color: #235F65;
  display: flex;
  align-items: center;
  justify-content: center;
}

.boton_linea{
    border-radius: 50%;
    padding: 0.4em 0.4em;
    cursor: pointer;
    border: 6px solid #235F65;
    background-color: #C772BA;
}

.image {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid #00adbdf6;
    background-color: rgb(237, 237, 237);
    
}

#editIcon{
    width: 40px;
    height: 40px;
    margin: 5px;
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

/* Apartados Evento */
.create_event_box {
    width:100%;
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

/* Precio */
.price_input{
    width:70px;
    padding: 10px;
    border: 1px solid #00adbdf6;
    background-color: rgb(255,255,255);
    border-radius: 20px;
    position: relative;
    left: 10px;
}

.input_timeHour{
  border: 1px solid #00adbdf6;
  border-radius: 30px;
  padding: 10px;
}

@media screen and (min-width: 640px){
    .spaceBetween{
    display: flex;
    justify-content: space-between;
    }

    .general_input{ min-width: 345px;}
}

#slider_assistents{
  -webkit-appearance: none;
  width: 90%;
  height: 5px;
  border-radius: 5px;  
  background: #235F65;
}

#slider_assistents::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%; 
  border: 6px solid #235F65;
  background-color: #C772BA;
  cursor: pointer;
}


@media screen and (min-width: 768px) {
    .create_event_box{
        width:768px;
        margin-top: 15px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
    }
}

</style>