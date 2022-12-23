<template>

    <div class="events_statistics_background">
        <div class = "events_statistics_buttons">
        <button v-on:click="$emit('add', true)" class="eventStatistics_Nselected"> Eventos </button>
        <button class="eventStatistics"> Estadísticas </button>
        </div>
        
        <div class="centered_horitzontal">
        <div class="timeline">
            <div class="timeline_header"> 
                <h2 class="blue_big"> Timeline</h2>
            </div>

            <div id="line"></div>

            <div id="Abril2021"> 
                <p class="darkblue_normal_bold">Abril<br>2021</p>
                <button class="button_timeline">1</button>
            </div>

            <div id="Noviembre2021"> 
                <p class="darkblue_normal_bold">Noviembre<br>2021</p>
                <button class="button_timeline">1</button>
            </div>

            <div id="Marzo2023"> 
                <p class="darkblue_normal_bold">Marzo<br>2023</p>
                <button class="button_timeline">2</button>
            </div>


        </div> <!--Tanquem div timeline-->
        </div> <!--Tanquem div centered_horitzontal-->

        <div class="centered_horitzontal"> 
        <div class="background_white_opac">
            
            <h2 class="blue_big" style="margin-left:20px">Marzo 2023</h2>

            <div class="flex_row_wrap">
            
            <router-link to="/event">
                <figure class="timeline_event">
                <img class="event_img" src="../../assets/images/events/80_party_event.jpg" alt="image of the event">
                    
                <div class="footer_timelineEvent"> 
                    <div>
                    <h2 class="blue_big">Fiesta de los 80</h2>
                    <div class="flex_row_wrap">
                        <img class="icon" src="../../assets/images/icons/comment.png" alt="icon">
                        <p class="pink_small_bold">134 comentarios</p>
                    </div>
                    <p class="blue_small_bold">Un 96% de usuarios han comentado más que tu</p>
                    </div>

                    <div class="column"> 
                    <div class="flex_row_wrap">
                        <img class="icon" src="../../assets/images/icons/schedule.png" alt="icon">
                        <p class="blue_small_bold">09/11/2021<br>20:00</p>
                    </div>

                    <div class="flex_row_wrap">
                        <img class="icon" src="../../assets/images/icons/maps.png" alt="icon">
                        <p class="blue_small_bold">Barcelona</p>
                    </div>
                    </div>

                </div><!--Footer del event-->
                </figure> <!--Tanquem figure del event-->
            </router-link>
                
            <router-link to="/event">
                <figure class="timeline_event">
                <img class="event_img" src="../../assets/images/events/80_party_event.jpg" alt="image of the event">
                
                <div class="footer_timelineEvent"> 
                    <div>
                    <h2 class="blue_big">Fiesta de los 80</h2>
                    <div class="flex_row_wrap">
                        <img class="icon" src="../../assets/images/icons/comment.png" alt="icon">
                        <p class="pink_small_bold">134 comentarios</p>
                    </div>
                    <p class="blue_small_bold">Un 96% de usuarios han comentado más que tu</p>
                    </div>

                    <div class="column"> 
                    <div class="flex_row_wrap">
                        <img class="icon" src="../../assets/images/icons/schedule.png" alt="icon">
                        <p class="blue_small_bold">09/11/2021<br>20:00</p>
                    </div>

                    <div class="flex_row_wrap">
                        <img class="icon" src="../../assets/images/icons/maps.png" alt="icon">
                        <p class="blue_small_bold">Barcelona</p>
                    </div>
                    </div>

                </div><!--Footer del event-->
                </figure> <!--Tanquem figure del event-->
            </router-link>

            </div> <!--tanquem div només envents - flex_row_wrap-->
            
        </div>  <!--Tanquem div de tots els events + títol white opac -->
        </div> <!--Tanquem div centered_horitzontal-->
        
    </div> <!--Tanquem div gran dels events i estadístiques AMB botons-->

</template>