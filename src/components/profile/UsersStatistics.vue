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

      timeline:[{"month":"Enero", "num_month":1, "events":[], "showEvents": false}, {"month":"Febrero", "num_month":2, "events":[], "showEvents": false}, 
                {"month":"Marzo", "num_month":3, "events":[], "showEvents": false}, {"month":"Abril", "num_month":4, "events":[], "showEvents": false}, 
                {"month":"Mayo", "num_month":5, "events":[], "showEvents": false}, {"month":"Junio", "num_month":6, "events":[], "showEvents": false}, 
                {"month":"Julio", "num_month":7, "events":[], "showEvents": false}, {"month":"Agosto", "num_month":8, "events":[], "showEvents": false}, 
                {"month":"Setiembre", "num_month":9, "events":[], "showEvents": false}, {"month":"Octubre", "num_month":10, "events":[], "showEvents": false}, 
                {"month":"Noviembre", "num_month":11, "events":[], "showEvents": false}, {"month":"Diciembre", "num_month":12, "events":[], "showEvents": false}],
      statisticsFinished: false,

      inputYear: new Date().getFullYear(),

      avgScore: 0,
      numComents: 0,
      percentageComentersBelow: 0,


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
    //console.log(this.timeline);

    this.getEventsByMonths();
      
  },

  
  methods: {

    getEventsByMonths(){
      //console.log(this.events);
      //console.log(this.timeline);
      let trobat;

      //Esborrem per cada mes, els events que hi havien abans
      this.timeline.forEach(function(item){
        item.events = [];
      });

      //Per cada evento del usuari mirem si l'hem de ficar al timeline
      for(let i=0; i < this.events.length; i++){

        let date = new Date(this.events[i].eventStart_date);
        //console.log(date.getFullYear(), date.getMonth());
        
        if(date.getFullYear() == this.inputYear){
          trobat = false;

          for(let j=0; j < this.timeline.length && !trobat; j++){

            //console.log(this.timeline[j].num_month + " - " + date.getMonth());
            if (this.timeline[j].num_month == date.getMonth()){
              //console.log("iguals");
              //console.log(this.events[i]);
              //console.log( this.timeline[j].events);
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
  
    showEventsOfMonth(num_month){

      console.log("showEventsOfMonh, " + num_month);
      
      if(this.timeline[num_month-1].showEvents == true){
        this.timeline[num_month-1].showEvents == false;

      }else{
        this.timeline.forEach(function(item){
          item.showEvents = false; //inicialitzem totes a false
        });
        this.timeline[num_month-1].showEvents = true;
      }

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
              <input class="general_input" type="number" min="2020" max="2030" step="1" v-on:change="getEventsByMonths()" v-model="inputYear"/>
            </form>
        </div> <!--Tanquem div timeline_header-->

        <div class="timeline_footer">
          <div id="line"></div>

            <div> <!--NO TREURE; CSS A DINS-->

              <div class="infoTimeline" v-for="month in timeline" :key="month.num_month">
                <p class="darkblue_normal_bold" >{{ month.month }}</p>
                <button class="button_timeline" v-on:click="showEventsOfMonth(month.num_month)" v-if="month.events.length > 0">{{ month.events.length }}</button>
                <svg height="50" width="50" v-else>
                  <circle cx="25" cy="20" r="10" fill="#235F65" />
                </svg>
              </div>

          </div>

        </div><!--Tanquem div timeline_footer-->
          
      </div> <!--Tanquem div timeline-->
    </div> <!--Tanquem div centered_horitzontal-->

      <div v-for = "monthTimeline in this.timeline" :key="monthTimeline.num_month">

      <div class="background_white_opac" v-if="monthTimeline.showEvents">
  
          <h2 class="blue_big" style="margin-left:20px">{{monthTimeline.month + " " + this.inputYear}}</h2>

          <div class="flex_row_wrap">
            <!--v-if="monthTimeline.showEvents && this.showEventsMonth"-->
            <figure class="basic_event" v-on:click="goToEvent(event.id)" v-for = "event in monthTimeline.events" :key="event.id">
              <img class="event_img" v-bind:src=event.image alt="image of the event">
              <div class="extraInfo_basicEvent">
                <p style="background-color: #C772BA;" v-if="event.created">creado</p>
                <p style="background-color: #FFA74A;" v-if="event.assisted">Inscrito</p>
                <p v-if="Date.now() > new Date(event.eventEnd_date)" style="background-color: #235F65;">finalizado</p>
              </div>
              
              <div class="footer_basicEvent"> 
                <h2 class="blue_big">{{event.name}}</h2>

                <div class="column"> 
                  <div class="flex_row_wrap">
                    <img class="icon" src="../../assets/images/icons/schedule.png" alt="icon">
                    <p class="blue_small_bold">{{event.eventStart_date.substring(0,10)}}<br>{{event.eventStart_date.substring(11,16)}}</p>
                  </div>

                  <div class="flex_row_wrap">
                    <img class="icon" src="../../assets/images/icons/maps.png" alt="icon">
                    <p class="blue_small_bold">{{event.province}}</p>
                  </div>
                </div>

              </div><!--Footer del event-->
            </figure> <!--Tanquem figure del event-->
        

          </div> <!--tanquem div només envents - flex_row_wrap-->
          
      </div>  <!--Tanquem div de tots els events + títol white opac -->
      </div>
      
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

.infoTimeline > svg{
  position: relative;
  top:-38px;
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