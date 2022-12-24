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

            <div class="timeline_footer">
                <div id="line"></div>

                <div>
                    <div class="infoTimeline">
                        <p class="darkblue_normal_bold">Enero</p>
                        <button class="button_timeline">1</button>
                        <!--<div class = "elipseTimeline">-->
                    </div>

                    <div class="infoTimeline">
                        <p class="darkblue_normal_bold">Febrero</p>
                        <button class="button_timeline">1</button>
                        <!--<div class = "elipseTimeline">-->
                    </div>

                    <div class="infoTimeline">
                        <p class="darkblue_normal_bold">Marzo</p>
                        <button class="button_timeline">1</button>
                        <!--<div class = "elipseTimeline">-->
                    </div>

                    <div class="infoTimeline">
                        <p class="darkblue_normal_bold">Abril</p>
                        <button class="button_timeline">1</button>
                        <!--<div class = "elipseTimeline">-->
                    </div>

                    <div class="infoTimeline">
                        <p class="darkblue_normal_bold">Mayo</p>
                        <button class="button_timeline">1</button>
                        <!--<div class = "elipseTimeline">-->
                    </div>

                    <div class="infoTimeline">
                        <p class="darkblue_normal_bold">Junio</p>
                        <button class="button_timeline">1</button>
                        <!--<div class = "elipseTimeline">-->
                    </div>

                    <div class="infoTimeline">
                        <p class="darkblue_normal_bold">Julio</p>
                        <button class="button_timeline">1</button>
                        <!--<div class = "elipseTimeline">-->
                    </div>

                    <div class="infoTimeline">
                        <p class="darkblue_normal_bold">Agosto</p>
                        <button class="button_timeline">1</button>
                        <!--<div class = "elipseTimeline">-->
                    </div>

                    <div class="infoTimeline">
                        <p class="darkblue_normal_bold">Setiembre</p>
                        <button class="button_timeline">1</button>
                        <!--<div class = "elipseTimeline">-->
                    </div>

                    <div class="infoTimeline">
                        <p class="darkblue_normal_bold">Octubre</p>
                        <button class="button_timeline">1</button>
                        <!--<div class = "elipseTimeline">-->
                    </div>

                    <div class="infoTimeline">
                        <p class="darkblue_normal_bold">Noviembre</p>
                        <button class="button_timeline">1</button>
                        <!--<div class = "elipseTimeline">-->
                    </div>

                    <div class="infoTimeline">
                        <p class="darkblue_normal_bold">Diciembre</p>
                        <button class="button_timeline">1</button>
                        <!--<div class = "elipseTimeline">-->
                    </div>
                </div>


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

<style scoped>

/*Timeline elements__________________*/
.timeline{
  width: 98%;
  height: 270px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.timeline_header{
  background-color: rgba(255,255,255,1);
  border-radius: 8px 8px 0px 0px;
  height: 25%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline_footer{
  width:100%;
  height: 75%;
  background-color: rgba(255,255,255,0.5);
  border-radius: 0px 0px 8px 8px;
}

#line{
  content: '';
  width: 100%;
  height: 7px;
  background-color: #235F65;
  position: relative;
  top: 80px;
}

#Abril2021{
  position: absolute;
  left:15%;
  /*top: 105px;*/
}

#Noviembre2021{
  position: absolute;
  left:30%;
  /*top: 105px;*/
}

#Marzo2023{
  position: absolute;
  left:75%;
  /*top: 105px;*/
}

/*Timeline months__________________________________*/
.infoTimeline{
    min-width: 120px;
    height: 148px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.timeline_footer > div{
    display:flex;
    justify-content: space-around;
    overflow: auto;
}

.infoTimeline > p {

}


/*Timeline button__________*/
.button_timeline{
  width:50px;
  height: 50px;
  position: relative;
  top:14px;
}

.button_timeline::before{
  content:'';
  width:3px;
  height: 30px;
  background-color: #F9E4CE;
  position: absolute;
  left: 22px;
  bottom:50px;
  z-index: -1;
}

.button_timeline::after{
  content: '';
  width: 15px;
  height: 15px;
  border: 6px solid #235F65;
  background-color: #C772BA;
  border-radius: 50%;
  position: absolute;
  left: 10px;
  bottom: 70px;
}


/*Timeline elements_____________________*/
div.background_white_opac{
  width: 98%;
  background-color: rgba(255,255,255,0.5);
  border-radius: 8px 8px 8px 8px;
  margin-top: 5px;
  margin-bottom: 5px;
}

/*Timeline events_______*/
.timeline_event{
  height: 170px;
  width:81vw;
  min-width: 300px;
  filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.4));
  margin: 0px 0px 18px 10px;
  display: flex;
}

.footer_timelineEvent{
  width: 100%;
  height: 50%;
  top: 5%;
  border-radius: 0px 0px 8px 8px;
  background-color: rgba(255,255,255,0.8);
  position: absolute;
  top: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer_timelineEvent > *{
  margin: 10px;
}
.footer_timelineEvent > div > *, .footer_timelineEvent > div > div > p{
  margin: 1px;
}

.footer_timelineEvent > div > div > img{ display:none;}

@media (min-width: 437px) {

  .footer_timelineEvent > div > div > img{ display:block;}
}


@media (min-width: 768px) {
    .timeline_event{
    width: 370px;
    }
}


</style>