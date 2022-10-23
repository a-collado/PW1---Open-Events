<template>
    
        <div class="general_page_box">
            
            <div class="create_event_box">
                <div class="titulo"><h2>Imagen del Evento</h2></div>
                <div class="background_image_box">
                    <div class="centered_horitzontal"><button-icon><img class="icon" src="../assets/images/icons/editar.png" alt="edit image"></button-icon></div>
                </div>
            </div>

            <div class="create_event_box">
                <div class="titulo"><h2>Nombre del Evento</h2></div>
                <div class="size_input"><input class="general_input" type="text" placeholder="Nombre del Evento"></div> 
            </div>

            <div class="create_event_box">
                <div class="titulo"><h2>Descripción</h2></div>
                <div class="size_input"><input class="general_input" type="text" placeholder="Descripción del Evento"></div>
            </div>

            <div class="create_event_box">
                <div class="titulo"><h2>Precio de la Entrada</h2></div>
                <div class="flex_row_center">
                    <div id="linea"><button class="boton_linea"></button></div>
                    <input class="price_input" type="text" placeholder="X €">
                </div>
            </div>

            <div class="create_event_box">
                <div class="titulo"><h2>Fecha del Evento</h2></div>
                <div class="flex_row_center">
                    <div class="size_input"><input class="general_input" type="text" placeholder="Fecha del Evento"></div> 
                    <button-icon><img class="icon" src="../assets/images/icons/schedule.png" alt="open calendar"></button-icon>
                </div>
            </div>

            <div class="create_event_box">
                <div class="titulo"><h2>Ubicación del Evento</h2></div>
                <div class="flex_row_center">
                    <div class="size_input"><input class="general_input" type="text" placeholder="Ubicación del Evento"></div> 
                    <button-icon><img class="icon" src="../assets/images/icons/gglMapsButton.png" alt="open google maps"></button-icon>
                </div>
            </div>

            <div class="centered_horitzontal"><div class="boton_rosa"><div class="titulo"><h3 class="white">Crear Evento</h3></div></div></div>
        </div>
    
</template>

<style scoped>

/* General*/

h3.white{
    color: #ffffff;
}

.titulo > *{
    margin: 0px;
    margin-bottom: 4px;
}

.background_image_box {
    width: 100%;
    height: 140px;
    margin-top: 5px;
    border-radius: 10px;
    border: 1px solid #00adbdf6;
    background-color: rgb(237, 237, 237);
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

.general_input{
  width:100%;
  height: 5px;
  margin:5px;
  padding: 20px 40px 20px 20px;
  border: 1px solid #00adbdf6;
  background-color: rgb(237, 237, 237);
  border-radius: 20px;
}

.boton_rosa{
    border-radius: 10px;
    border: 0px solid transparent;
    padding: 0.25em 0.5em;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 36px;
    cursor: pointer;
    background-color: #C772BA;
    transition: border-color 0.25s;
    filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.4))
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
    margin-left: 10px;
    width:70px;
    height: 5px;
    padding: 20px 40px 20px 20px;
    border: 1px solid #00adbdf6;
    background-color: rgb(237, 237, 237);
    border-radius: 20px;
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