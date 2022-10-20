<template>
    <div class="event_image_box">
        <h1>Nombre del Evento</h1>
        <p>hola</p>
        <img class="event_img" src="../assets/images/events/80_party_event.jpg" alt="image of the event">
    </div>

    <div class="event_descrip_box">
        <div class="event_descrip_puntuat_box">
            <h1>Descripción</h1>
            <div class="puntuation">
                <h5>5</h5>
                <img class="stars" src="../assets/images/icons/star_b.png" alt="1 estrella">
                <img class="stars" src="../assets/images/icons/star_b.png" alt="2 estrellas">
                <img class="stars" src="../assets/images/icons/star_b.png" alt="3 estrellas">
                <img class="stars" src="../assets/images/icons/star_b.png" alt="4 estrellas">
                <img class="stars" src="../assets/images/icons/star_b.png" alt="5 estrellas">
            </div>
        </div>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit facilisis erat eu pulvinar. Nam in tincidunt dolor. Fusce non rhoncus ligula. Proin gravida ex a nisi mollis, venenatis gravida sapien aliquet. Nam sed lectus magna.</h5>
        <div class="event_buttons_box">
            <button>Participar</button>
            <button>Compartir</button>
        </div>
    </div>

    <div class="event_info_box">
        <div class="event_date_box">
            <img class="icon" src="../assets/images/icons/schedule.png" alt="icon">
            <h5>25 Diciembre 2022 (20h00 - 24h00)</h5>
        </div>
        <div class="event_location_box">
            <h5>Calle 4 Camins 256, 08019, Barcelona</h5>
            <img class="icon" src="../assets/images/icons/gglMapsButton.png" alt="icon">
        </div>
    </div>

    <div class="event_participantes_box">
        <h1>Paticipantes</h1>
         <!--retangulo azul-->
        <!--<img class="icon" src="../assets/images/icons/schedule.png" alt="open calendar">-->
    </div>

    <div class="event_resenas_box">
        <div class="event_resenas_header_box">
            <h1>Reseñas del Evento</h1>
            <button-icon><img class="icon" src="../assets/images/icons/up-down.png" alt="filter"></button-icon>
        </div>
        <div class="resenas_box">
            <div class="resena_box">
                <div class="resena_persona_box">
                    <h5>Nombre Apellido</h5>
                    <div class="punctuation">
                        <h5>5</h5>
                        <img class="stars" src="../assets/images/icons/star_b.png" alt="1 estrella">
                        <img class="stars" src="../assets/images/icons/star_b.png" alt="2 estrellas">
                        <img class="stars" src="../assets/images/icons/star_b.png" alt="3 estrellas">
                        <img class="stars" src="../assets/images/icons/star_b.png" alt="4 estrellas">
                        <img class="stars" src="../assets/images/icons/star_b.png" alt="5 estrellas">
                    </div>
                </div>
                <p class="grey_normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit facilisis erat eu pulvinar. Nam in tincidunt dolor. Fusce non rhoncus ligula. Proin gravida ex a nisi mollis, venenatis gravida sapien aliquet. Nam sed lectus magna.</p>
            </div>
            <div class="resena_box">
                <h5>Nombre Apellido</h5>
                <div class="punctuation">
                    <h5>5</h5>
                    <img class="stars" src="../assets/images/icons/star_b.png" alt="1 estrella">
                    <img class="stars" src="../assets/images/icons/star_b.png" alt="2 estrellas">
                    <img class="stars" src="../assets/images/icons/star_b.png" alt="3 estrellas">
                    <img class="stars" src="../assets/images/icons/star_b.png" alt="4 estrellas">
                    <img class="stars" src="../assets/images/icons/star_b.png" alt="5 estrellas">
                </div>
                <p class="grey_normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit facilisis erat eu pulvinar. Nam in tincidunt dolor. Fusce non rhoncus ligula. Proin gravida ex a nisi mollis, venenatis gravida sapien aliquet. Nam sed lectus magna.</p>
            </div><div class="resena_box">
                <div class="resena_persona_box">
                    <h5>Nombre Apellido</h5>
                    <div class="punctuation">
                        <h5>5</h5>
                        <img class="stars" src="../assets/images/icons/star_b.png" alt="1 estrella">
                        <img class="stars" src="../assets/images/icons/star_b.png" alt="2 estrellas">
                        <img class="stars" src="../assets/images/icons/star_b.png" alt="3 estrellas">
                        <img class="stars" src="../assets/images/icons/star_b.png" alt="4 estrellas">
                        <img class="stars" src="../assets/images/icons/star_b.png" alt="5 estrellas">
                    </div>
                </div>
                <p class="grey_normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit facilisis erat eu pulvinar. Nam in tincidunt dolor. Fusce non rhoncus ligula. Proin gravida ex a nisi mollis, venenatis gravida sapien aliquet. Nam sed lectus magna.</p>
            </div>
        </div>
        <button>Añadir Comentario</button>
    </div>
    
</template>

<style scoped>

.event_image_box{
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

.event_image_box > img{
    width: 90%;
    height: 200px;
    object-fit: cover;

}


</style>