<script>
import ApiCalls from "../../js/APIcalls.js"
import router from "../../router/index.js";
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue'

export default{
    
  data() {
    return {
      createdEvents:[],
      assitedEvents:[],
      events:[],

      showCreados:true,
      showAssistidos:true,
      showFinished:true,

      showSortFilter:false,

      eventsFinished: false,

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
      
    this.getEventsAll(this.ID);
      
  },
  
  methods: {

    async getEventsAll(userID){

      return ApiCalls.getCreatedEventsFromUser(userID)
      .then((createdEvents) => {
        //this.createdEvents = createdEvents;
        //console.log(createdEvents);
        createdEvents = createdEvents.map( createdEvent => {
          createdEvent.created = true;
          createdEvent.assisted = false;
          return createdEvent;
        });

        //console.log(createdEvents);

        createdEvents.forEach(this.updateInfoEvent);

        this.events = createdEvents;
        return;
      })
      .then((vacio) => { 
        return ApiCalls.getAssitedEventsFromUser(userID)
        .then((assitedEvents) => {
          //this.assitedEvents = assitedEvents;

          assitedEvents = assitedEvents.map( assitedEvent => {
            assitedEvent.created = false;
            assitedEvent.assisted = true;
            return assitedEvent;
          });

          assitedEvents.forEach(this.updateInfoEvent);
          this.events = this.events.concat(assitedEvents);
          this.eventsFinished = true;

          return;
        });

      });

    },

      //METHODS API__________________________________________________________

    
      //METHODS USED IN METHODS API___________________________________________
      updateInfoEvent(event){
        
        if(event.location.indexOf("(") >= 0){
          event.province = event.location.substring(event.location.indexOf("(") + 1, event.location.length - 1);

        }else{
          event.province = event.location;
        }

        if(event.eventStart_date == null){
          event.eventStart_date = event.date
        }

        if(event.eventEnd_date == null){
          event.eventStart_date = event.date
        }

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
      <button class="eventStatistics"> Eventos </button>
      <button v-on:click="$emit('add', false)" class="eventStatistics_Nselected"> Estadísticas </button>
    </div>

    <div v-if="eventsFinished">

      <div class="filter_events">
        <div class="flex_row"> <!-- no treure DIV -> ajuda a un selector CSS-->
          <button v-on:click="showAllEvents()">Todos</button>
          <button v-on:click="showCreadosMethod()">Creados</button>
          <button v-on:click="showAssistidosMethod()">Inscrito</button>
          <button v-on:click="showSortFilterMethod()"><img class="icon" src="../../assets/images/icons/up-down.png" alt="filter"></button>
        </div>

        <form v-if="showSortFilter">
          <p>OrderBy:</p>
          <input type="radio" name="sort" value=1 v-on:change="sortEvents(1)">
          <label>By name A-Z</label><br>
          <input type="radio" name="sort" value=2 v-on:change="sortEvents(2)">
          <label>By name Z-A</label><br>  
          <input type="radio" name="sort" value=3 v-on:change="sortEvents(3)">
          <label>By date Oldest-Newest</label><br>
          <input type="radio" name="sort" value=4 v-on:change="sortEvents(4)">
          <label>By date Newest-Oldest</label>
        </form>

      </div>

      <div class="event_group">

        <figure class="basic_event" v-on:click="goToEvent(event.id)" v-if="showCreados" v-for = "event in events" :key="event.id">
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

      </div> <!--Event group-->

    </div><div v-else class="emptyEventsStatistics"></div>

  </div> <!--Tanquem div gran dels events i estadístiques AMB botons-->

</template>
