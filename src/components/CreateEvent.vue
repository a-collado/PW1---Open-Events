<template>

        <div class="centered_column_width">
            
            <div class="generic_inputLabel">
                <label><p class="darkblue_normal_bold">Imagen del Evento</p></label>
                <div class="background_image_box">
                    <div class="centered_horitzontal"><button-icon><img class="icon" src="../assets/images/icons/editar.png" alt="edit image"></button-icon></div>
                </div>
            </div>

            <div class="generic_inputLabel">
                <label><p class="darkblue_normal_bold">Nombre del evento</p></label>
                <input class="general_input" type="text" placeholder="Nombre del Evento">
            </div>

            <div class="generic_inputLabel">
                <label><p class="darkblue_normal_bold">Descripción</p></label>
                <input class="general_input" type="text" placeholder="Descripción del Evento">
            </div>

            <div class="generic_inputLabel">
                <label><p class="darkblue_normal_bold">Numero máximo de assistentes (5-1000)</p></label>
                <div class="flex_row_center">
                    <input type="range" min="5" max="1000" value="0" id="slider_assistents">
                    <input class="price_input" type="text" placeholder="X €">
                </div>
            </div>

            <div class="generic_inputLabel">

                <div class="spaceBetween">
                    <div>
                        <label><p class="darkblue_normal_bold">Fecha y hora del inicio evento</p></label>
                        <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" class="input_timeHour">
                        <input type="time" class="input_timeHour">
                    </div>

                    <div>
                        <label><p class="darkblue_normal_bold">Fecha y hora del final evento</p></label>
                        <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" class="input_timeHour">
                        <input type="time" class="input_timeHour">
                    </div>
                </div>
                
            </div>

            <div class="generic_inputLabel">
                <label><p class="darkblue_normal_bold">Ubicación del evento</p></label>
                    <input class="general_input" type="text" placeholder="Ubicación del Evento">
            </div>
            
            <router-link to="/"><button class="button_pink_normal">Crear Evento</button></router-link>
        </div>
    
</template>

<style scoped>

/* General*/

/*h3.white{
    color: #ffffff;
}*/

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