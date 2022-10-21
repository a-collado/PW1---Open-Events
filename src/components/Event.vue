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
                <div class="button_pink"><div class="titulo"><h3>Participar</h3></div></div>
                <div class="button_purple"><div class="titulo"><h3>Compartir</h3></div></div>
            </div>
        </div>

        <div class="rectangle_gray">
            <div class="event_info_box">
                <div class="event_date_box">
                    <img class="icon" src="../assets/images/icons/schedule.png" alt="icon">
                    <div class="texto"><h5>25 Diciembre 2022 (20h00 - 24h00)</h5></div>
                </div>
                <div class="event_location_box">
                    <div class="texto"><h5>Calle 4 Camins 256, 08019, Barcelona</h5></div>
                    <img class="icon" src="../assets/images/icons/gglMapsButton.png" alt="icon">
                </div>
            </div>
        </div>

        <div class="rectangle_gradient">
            <div class="event_participantes_box">
                <div class="titulo"><h2>3.019</h2></div>
                <div class="titulo"><h3>Participantes</h3></div>
            </div>
        </div>

        <div class="event_resenas_box">
            <div class="event_resenas_header_box">
                <div class="titulo"><h2>Reseñas del Evento</h2></div>
                <button-icon><img class="icon" src="../assets/images/icons/up-down.png" alt="filter"></button-icon>
            </div>
            <div class="resenas_box">
                <div class="resena_box">
                    <div class="resena_persona_box">
                        <img class="profile_pic_message" src="../assets/images/profilepic.webp" alt="Foto de perfil">
                        <div class="resena_info_box">
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
                    </div>
                    <div class="texto"><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit facilisis erat eu pulvinar. Nam in tincidunt dolor. Fusce non rhoncus ligula. Proin gravida ex a nisi mollis, venenatis gravida sapien aliquet. Nam sed lectus magna.</h5></div>
                </div>
                <div class="resena_box">
                    <div class="resena_persona_box">
                        <img class="profile_pic_message" src="../assets/images/profilepic.webp" alt="Foto de perfil">
                        <div class="resena_info_box">
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
                    </div>
                    <div class="texto"><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit facilisis erat eu pulvinar. Nam in tincidunt dolor. Fusce non rhoncus ligula. Proin gravida ex a nisi mollis, venenatis gravida sapien aliquet. Nam sed lectus magna.</h5></div>
                </div>
            </div>
        </div>

        <div class="button_pink"><div class="titulo"><h3>Crear Comentario</h3></div></div>
    </div>
</template>

<style scoped>

/* General*/
.titulo > *{
    margin: 0px;
}

.texto > h5{
    margin: 0px;
    text-align: justify;
    text-justify: inter-word;
}
.button_purple{
    border-radius: 10px;
    border: 0px solid transparent;
    padding: 0.25em 0.5em;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 36px;
    cursor: pointer;
    background-color: #7280C7;
    transition: border-color 0.25s;
    filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.4))
}

.button_pink{
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
.rectangle_gray {
    width: 100%;
    height: 90px;
    margin-top: 5px;
    border-radius: 10px;
    background-color: rgb(237, 237, 237);
    display: flex;
    filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.1))
}

.rectangle_gradient {
    width: 100%;
    height: 90px;
    margin-top: 5px;
    border-radius: 10px;
    background: linear-gradient(#00ADBD, #ffffff);
    display: flex;
    filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.1))
}

.profile_pic_message{
    width: 61px;
    height: 61px;
    object-fit: cover;
    object-position: 100% 0;
    border-radius: 50%;
}

/*Evento Pagina*/
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

/* Info Event */
.event_info_box {
    width:100%;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.event_date_box {
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
}

.event_location_box {
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
}

/* Participantes */

.event_participantes_box{
    width:100%;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

/* Reseñas */
.event_resenas_box{
    width:100%;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.event_resenas_header_box{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}

.resenas_box {
    width:100%;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.resena_box {
    width:100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.resena_persona_box {
    width:100%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
}
.resena_info_box {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

</style>