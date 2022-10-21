<template>
    <div class="event_box">
        <div class="header_event_box">
            <img class="event_img" src="../assets/images/events/80_party_event.jpg" alt="image of the event">
            <div class="footer_basicEvent"><div class="titulo"><h2>Nombre del Evento</h2></div></div>
        </div>

        <div class="event_descrip_box">
            <div class="event_descrip_star_box">
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
            <div class="texto"><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit facilisis erat eu pulvinar. Nam in tincidunt dolor. Fusce non rhoncus ligula. Proin gravida ex a nisi mollis, venenatis gravida sapien aliquet. Nam sed lectus magna.</h5></div>
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
            <h2>Paticipantes</h2>
            <!--retangulo azul-->
            <!--<img class="icon" src="../assets/images/icons/schedule.png" alt="open calendar">-->
        </div>

        <div class="event_resenas_box">
            <div class="event_resenas_header_box">
                <div class="titulo"><h1>Reseñas del Evento</h1></div>
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
    </div>
</template>

<style scoped>
.titulo > h2{
    margin: 0px;
}

.texto > h5{
    margin: 0px;
    text-align: justify;
    text-justify: inter-word;
}

.event_box {
    width: 85%;
    margin: 20px;
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
    align-items: flex-start;
}

/* Descripcion */
.event_descrip_box {
    width:100%;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.event_descrip_star_box {
    width:100%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}
.event_descrip_star_box > {
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
.event_buttons_box {
    width:100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
}


</style>