<script>
import { stringifyStyle } from "@vue/shared";
import ApiCalls from "../js/APIcalls.js";
import router from "../router/index.js";

export default{

    data() {
        return {
            //Data to send to the API to do the post
            imgEvent_URL: "",
            imgEventURLStyle: "",
            eventName: "",
            eventDescription: "",
            eventMaxAssistents: 1,
            initialDateTime: "",
            finalDateTime: "",
            eventAdress: "",
            provincia:"",
            eventLatitude: "",
            eventLongitude: "",
            eventType:"",

            //Other variables to help the code
            isHidden:true,
            errorIsHidden: false,
            error:"",
            displayError:true
        }  
    },
    setup(){
      //Default images that the user can choose for his event. Just when he/she don't want to search one
      const defaultImg1 = new URL('../images/events/defaultEvent1.webp', import.meta.url)
      const defaultImg2 = new URL('../images/events/defaultEvent2.webp', import.meta.url)
      const defaultImg3 = new URL('../images/events/defaultEvent3.jpg', import.meta.url)
      return { defaultImg1, defaultImg2, defaultImg3 };
    },
    methods: {

        //Method called everytime the user press to create the event. 
        createEvent(){

            /*We have decided to have the address with 2 parts. The address and the province.
            The format will be: address (province)
            
                As the address may be too long for our little representation of the events (in user profile, home...)
                we have added the province (just from spain)
                
                The little events, in out profile, will just show the province
                
            So, we use a datalist, that is helpful for the users to select the province. But, it has the problem that
            they can write whatever they want. So, this firts 2 lines, check if what they have written is in the datalist,
            if not, we will show an error
            */
            var obj = document.querySelector("#provincias" + " option[value='" + this.provincia + "']");

            if(obj != null && this.eventAdress.localeCompare("") != 0){

                /*This conditional is because the api don't check if there is a date. 
                The API just puts the current datetime, to prevent this, we have made mandatory
                putting the start date and the final date, if not, we will show an error*/
                if(this.initialDateTime.localeCompare("") != 0 && this.finalDateTime.localeCompare("") != 0){

                    //We call the API and post the information. 
                    ApiCalls.createEvent(this.imgEvent_URL, this.eventName, this.eventDescription, this.eventMaxAssistents, this.initialDateTime, this.finalDateTime, this.eventAdress+"("+this.provincia+")", this.eventType)
                    .then((output) =>{
                        if(output == ApiCalls.getCORRECT()) { //If the post is successfull, we return to home
                            router.push({name:'Home'});
                        }else{ //If not, we will show the error
                            this.error = output;
                            this.displayError = "flex";
                        }
                    });

                }else{
                    this.error = "You must select an Start date/hour and a Final date/hour for the event";
                    this.displayError = "flex";
                }

            }
            else{
                this.error = "Province or address not valid";
                this.displayError = "flex";
            }

        },
        
        //Method to change dinamically the background image of the div (v-bind)
        changeImageEvent(){
            this.imgEventURLStyle = "url('"+ this.imgEvent_URL +"')"
        },

        //Method to show or not the default images for the event (v-bind)
        showDefaultEventImages(){
            if (this.isHidden === false) {
                this.isHidden = true;
            } else {
                this.isHidden = false; 
            }
        },


        //Methods to apply to the image of the event, one of the default images
        defaultImg1(){
            this.imgEvent_URL = "../src/assets/images/events/defaultEvent1.webp";
            this.changeImageEvent();
        },

        defaultImg2(){
            this.imgEvent_URL = "../src/assets/images/events/defaultEvent2.webp";
            this.changeImageEvent();
        },

        defaultImg3(){
            this.imgEvent_URL = "../src/assets/images/events/defaultEvent3.jpg";
            this.changeImageEvent();
        }
    }
    
}

</script>



<template>

<datalist id="provincias">
    <option value="A Coruña">A Coruña</option>
    <option value="Alacant">Alacant</option>
    <option value="Albacete">Albacete</option>
    <option value="Almería">Almería</option>
    <option value="Araba">Araba</option>
    <option value="Asturias">Asturias</option>
    <option value="Ávila">Ávila</option>
    <option value="Badajoz">Badajoz</option>
    <option value="Barcelona">Barcelona</option>
    <option value="Bizkaia">Bizkaia</option>
    <option value="Burgos">Burgos</option>
    <option value="Cantabria">Cantabria</option>
    <option value="Castelló">Castelló</option>
    <option value="Ceuta">Ceuta</option>
    <option value="Ciudad Real">Ciudad Real</option>
    <option value="Cuenca">Cuenca</option>
    <option value="Cáceres">Cáceres</option>
    <option value="Cádiz">Cádiz</option>
    <option value="Córdoba">Córdoba</option>
    <option value="Gipuzcoa">Gipuzcoa</option>
    <option value="Girona">Girona</option>
    <option value="Granada">Granada</option>
    <option value="Guadalajara">Guadalajara</option>
    <option value="Huelva">Huelva</option>
    <option value="Huesca">Huesca</option>
    <option value="Illes Balears">Illes Balears</option>
    <option value="Jaén">Jaén</option>
    <option value="La Rioja">La Rioja</option>
    <option value="Las Palmas">Las Palmas</option>
    <option value="León">León</option>
    <option value="Lleida">Lleida</option>
    <option value="Lugo">Lugo</option>
    <option value="Madrid">Madrid</option>
    <option value="Melilla">Melilla</option>
    <option value="Murcia">Murcia</option>
    <option value="Málaga">Málaga</option>
    <option value="Navarra">Navarra</option>
    <option value="Ourense">Ourense</option>
    <option value="Palencia">Palencia</option>
    <option value="Pontevedra">Pontevedra</option>
    <option value="Salamanca">Salamanca</option>
    <option value="Tenerife">Tenerife</option>
    <option value="Segovia">Segovia</option>
    <option value="Sevilla">Sevilla</option>
    <option value="Soria">Soria</option>
    <option value="Tarragona">Tarragona</option>
    <option value="Teruel">Teruel</option>
    <option value="Toledo">Toledo</option>
    <option value="Valladolid">Valladolid</option>
    <option value="València">València</option>
    <option value="Zamora">Zamora</option>
    <option value="Zaragoza"></option>
</datalist>

    <form>
        <div class="centered_column_width">
            
            <div class="generic_inputLabel">
                <label><p class="darkblue_normal_bold">Imagen del Evento</p></label>
                <div id="background_image_box" v-bind:style="{backgroundImage: imgEventURLStyle}">
                    <div class="centered_horitzontal"><button v-on:click.prevent="showDefaultEventImages()"><img id="editIcon" src="../assets/images/icons/editar.png" alt="edit image"></button></div>
                </div>
                <input class="general_input" type="text" placeholder="URL imagen para el evento" v-model="imgEvent_URL" v-on:change="changeImageEvent()">
            </div>

            <div class="generic_inputLabel" v-bind:class="{hidden: isHidden}">
                <div class="generci_spaceBetween">
                    <button class="defaultImgButton" v-on:click.prevent="defaultImg1"><img class="defaultImg" src="../assets/images/events/defaultEvent1.webp"></button>
                    <button class="defaultImgButton" v-on:click.prevent="defaultImg2"><img class="defaultImg" src="../assets/images/events/defaultEvent2.webp"></button>
                    <button class="defaultImgButton" v-on:click.prevent="defaultImg3"><img class="defaultImg" src="../assets/images/events/defaultEvent3.jpg"></button>
                </div>
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
                        <input type="datetime-local" class="input_timeHour" v-model="initialDateTime">
                    </div>

                    <div>
                        <label><p class="darkblue_normal_bold">Fecha y hora del final evento</p></label>
                        <input type="datetime-local" class="input_timeHour" v-model="finalDateTime">
                    </div>
                </div>
                
            </div>

            <div class="generic_inputLabel">

                <div class="spaceBetween">
                    <div>
                        <label><p class="darkblue_normal_bold">Dirección del evento</p></label>
                        <input class="general_input" type="text" placeholder="Dirección del evento" v-model="eventAdress" >
                    </div>

                    <div>
                        <label><p class="darkblue_normal_bold">Provincia</p></label>
                        <input class="input_timeHour"  list="provincias" v-model="provincia"/>
                    </div>
                </div>
            </div>
            
            <br>
            <p class="Error_Input " v-bind:style="{display: errorIsHidden}">{{ error }}</p>
            <br>
            <button class="button_pink_normal" v-on:click.prevent="createEvent()">Crear Evento</button>

           
        </div>
    </form>
    
</template>

<style scoped>
.titulo > *{
    margin: 0px;
    margin-bottom: 4px;
}

#background_image_box[data-v-19a51518] {
    width: 100%;
    padding: 10px;
    height: 180px;
    margin-top: 5px;
    border-radius: 10px;
    border: 1px solid #00adbdf6;
    background-image: none;
    background-size: cover;
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

.defaultImgButton{
    width: 30%;
    height: 80px;
}

.defaultImg{ 
    width: 100%;
    height: 100%;
    object-fit: cover;
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