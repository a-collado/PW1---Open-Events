<script>
import ApiCalls from "../../js/APIcalls.js"
import router from "../../router/index.js";
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue'

export default{

  props: {
    events:Array
  },
    
  data() {
    return {

      timeline:[{"month":"Enero", "num_month":1, "events":{}}, {"month":"Febrero", "num_month":2, "events":{}}, 
                {"month":"Marzo", "num_month":3, "events":{}, "events":{}}, {"month":"Abril", "num_month":4, "events":{}}, 
                {"month":"Mayo", "num_month":5, "events":{}}, {"month":"Junio", "num_month":6, "events":{}}, 
                {"month":"Julio", "num_month":7, "events":{}}, {"month":"Agosto", "num_month":8, "events":{}}, 
                {"month":"Setiembre", "num_month":9, "events":{}}, {"month":"Octubre", "num_month":10, "events":{}}, 
                {"month":"Noviembre", "num_month":11, "events":{}}, {"month":"Diciembre", "num_month":12, "events":{}}],
      statisticsFinished: false,

      inputYear: new Date().getFullYear(),

      avgScore: 0,
      numComents: 0,
      percentageComentersBelow: "0"

    }
  },
  setup(){
    const ROUTE = useRoute();
    const ID = ref();
    ID.value = ROUTE.params.id;

    watch(
    () => ROUTE.params.id,
    async newId => {
      window.location.reload()
    },
    () => { 
      ID.value = ROUTE.params.id; 
    }
    )

    return { ID };
  },
  
  created(){
    console.log(this.timeline);

    this.getEventsByMonths();
      
  },

  
  methods: {

    getEventsByMonths(){
      console.log(this.events);
      console.log(this.timeline);
      console.log(this.events.length);
      let trobat;

      //Esborrem per cada mes, els events que hi havien abans
      this.timeline.forEach(function(item){
        item.events = {};
      });

      //Per cada evento del usuari mirem si l'hem de ficar al timeline
      for(let i=0; i < this.events.length; i++){

        let date = new Date(this.events[i].eventStart_date);
        
        if(date.getFullYear() == this.inputYear){
          trobat = false;

          for(let j=0; j < this.timeline.length && !trobat; j++){

            if (this.timeline[j].num_month == date.getMonth){
              this.timeline[j].events.push(this.events[i]);
              trobat = true;
            }

          }
        } //if(date.getFullYear() == this.inputYear){

      } //for

      console.log(this.timeline);


    },
  


    //______________________________________________________________________
    goToEvent(eventID){
      router.push({name: 'Event', params: {id: eventID}});
    },

    showAllEvents(){
      this.showCreados = true;
      this.showAssistidos = true;
    },

    showCreadosMethod(){
      this.showAssistidos = false;
      this.showCreados = true;
    },

    showAssistidosMethod(){
      this.showCreados = false;
      this.showAssistidos = true;
    },

    sortEvents(value){
      switch (value) {
        case 1: //By name A-Z
          this.createdEvents = this.createdEvents.sort(function(a,b){return a.name.localeCompare(b.name);});
          this.assitedEvents = this.assitedEvents.sort(function(a,b){return a.name.localeCompare(b.name);});
          break;
        case 2: //By name Z-A
          this.createdEvents = this.createdEvents.sort(function(a,b){return b.name.localeCompare(a.name);});
          this.assitedEvents = this.assitedEvents.sort(function(a,b){return b.name.localeCompare(a.name);});
          break;
        
        case 3: //By date Oldest-Newest
          this.createdEvents = this.createdEvents.sort(function(a,b){return new Date(a.eventStart_date) - new Date(b.eventStart_date);});
          this.assitedEvents = this.assitedEvents.sort(function(a,b){return new Date(a.eventStart_date) - new Date(b.eventStart_date);});
          break;

        case 4: //By date Newest-Oldest
          this.createdEvents = this.createdEvents.sort(function(a,b){return new Date(b.eventStart_date) - new Date(a.eventStart_date);});
          this.assitedEvents = this.assitedEvents.sort(function(a,b){return new Date(b.eventStart_date) - new Date(a.eventStart_date);});
        break;

      }
      
      

    }, 

    showSortFilterMethod(){
      if(this.showSortFilter){
        this.showSortFilter = false;
      }else{ this.showSortFilter = true;}
    }

  } //methods
} //Export default data

</script> 

<template>

    <div class="events_statistics_background">
      <div class = "events_statistics_buttons">
        <button v-on:click="$emit('add', true)" class="eventStatistics_Nselected"> Eventos </button>
        <button class="eventStatistics"> Estadísticas </button>
      </div>

      <div class="centered_horitzontal">
        <table>
          <thead>
            <tr> 
              <th>Avg score</th>
              <th>Number of comments</th>
              <th>% Comentaristas por debajo</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{{avgScore}}</td>
              <td>{{numComents}}</td>
              <td>{{percentageComentersBelow}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="centered_horitzontal">
        <div class="timeline">
            <div class="timeline_header">
                <h2 class="blue_big"> Timeline</h2>
                <form>
                  <input class="general_input" type="number" min="2020" max="2030" step="1" v-model="inputYear" />
                </form>
            </div>

            <div class="timeline_footer">
              <div id="line"></div>

                <div>
                    <div class="infoTimeline">
                      <!--<p class="darkblue_normal_bold">Enero</p>
                      <button class="button_timeline">1</button>-->
                      <svg height="50" width="50">
                        <circle cx="25" cy="20" r="10" fill="#235F65" />
                      </svg>

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
  margin-bottom: 5px;
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

.timeline_header > form{
  margin:3%;
}

.timeline_footer{
  width:100%;
  height: 70%;
  background-color: rgba(255,255,255,0.5);
  border-radius: 0px 0px 8px 8px;
}

#line{
  content: '';
  width: 100%;
  height: 7px;
  background-color: #235F65;
  position: relative;
  top: 65px;
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

/*Table statistics*/
table {
  width:98%;
  border-collapse: separate;
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}


td, th {
  text-align: center;
  padding: 8px;
}

th{
  background-color: white;
}

td{
  background-color: rgba(255, 255, 255, 0.616);
}

table tr:first-child th:first-child {
  border-top-left-radius: 8px;
}

/* top-right border-radius */
table tr:first-child th:last-child {
  border-top-right-radius: 8px;
}

/* bottom-left border-radius */
table tr:last-child td:first-child {
  border-bottom-left-radius: 8px;
}

/* bottom-right border-radius */
table tr:last-child td:last-child {
  border-bottom-right-radius: 8px;
}


/*Timeline months__________________________________*/
.infoTimeline{
    min-width: 140px;
    height: 150px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.timeline_footer > div{
    display:flex;
    justify-content: space-around;
    justify-content: flex-start;
    position: relative;
    overflow-x:scroll;
    overflow-y:hidden;
    top:-8px;
}

/*ScrollBar*/
/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #1D7780; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #115258; 
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