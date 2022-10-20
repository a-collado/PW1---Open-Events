<template>
    <div class="create_event_name_box">
        <h1>Nombre del Evento</h1>
        <input class="eventNameInput" type="text" placeholder="Nombre del Evento"> 
    </div>

    <div class="create_event_image_box">
        <h1>Imagen del Evento</h1>
        <img class="icon" src="../assets/images/icons/rectangle.png" alt="EventImage">
        <button-icon><img class="icon" src="../assets/images/icons/editar.png" alt="edit image"></button-icon>
    </div>

    <div class="create_event_descrip_box">
        <h1>Descripción</h1>
        <input class="eventDescripInput" type="text" placeholder="Descripción del Evento"> 
    </div>

    <div class="create_event_date_box">
        <h1>Fecha del Evento</h1>
        <!--calendar-->
        <button-icon><img class="icon" src="../assets/images/icons/schedule.png" alt="open calendar"></button-icon>
    </div>

    <div class="create_event_price_box">
        <h1>Precio de la Entrada</h1>
        <!--barra precio-->
        <input class="eventPriceInput" type="text" placeholder="X €"> 
    </div>

    <div class="create_event_ubi_box">
        <h1>Ubicación del Evento</h1>
        <!--acceder maps-->
        <div class="create_event_ubi_box">
            <img class="eventPic" src="../assets/images/events/gglMaps.png" alt="EventMaps">
            <button-icon><img class="icon" src="../assets/images/icons/gglMapsButton.png" alt="open google maps"></button-icon>
        </div>
    </div>

    <button>Crear Evento</button>
    
</template>