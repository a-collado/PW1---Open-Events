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
        this.createdEvents = createdEvents;
        console.log(this.createdEvents);
        return;
      })
      .then((vacio) => { 
        return ApiCalls.getAssitedEventsFromUser(userID)
        .then((assitedEvents) => {
          this.assitedEvents = assitedEvents
          this.eventsFinished = true;
          //console.log(this.assitedEvents);
          //console.log(this.eventsFinished);
        });

      });

    },

      //METHODS API__________________________________________________________

    
      //METHODS USED IN METHODS API___________________________________________
      goToProfileR(friendID){
          router.push({name: 'user', params: { id: friendID }});
        },
      goToEvent(eventID){
        router.push({name: '', params: {id: eventID}});
      }

      //______________________________________________________________________

      

  } //methods
} //Export default data

</script> 


<template>



<div v-if="eventsFinished">

  <div class="events_statistics_background">
    <div class = "events_statistics_buttons">
      <button class="eventStatistics"> Eventos </button>
      <router-link to="/perfil_statistics" id="button"><button class="eventStatistics_Nselected"> Estadísticas </button></router-link>
    </div>
    <div class="filter_events">
      <button>Todos</button>
      <button>Creados</button>
      <button>Inscrito</button>
      <button-icon><img class="icon" src="../../assets/images/icons/up-down.png" alt="filter">
      </button-icon>
    </div>

    <div class="event_group">

      <!-- <div class="flex_row_wrap" v-on:click="goToProfileR(friend.id)" v-for="friend in friends" :key="friend.id">
          <img :src="friend.image" alt="profile pic">
          <div class="column">
            <h2>{{ friend.name }}</h2>
          </div>  
        </div>-->

        <figure class="basic_event" v-for = "event in createdEvents" :key="event.id">
          <img class="event_img" v-bind:src=event.image alt="image of the event">
          
          <div class="footer_basicEvent"> 
            <h2 class="blue_big">{{event.name}}</h2>

            <div class="column"> 
              <div class="flex_row_wrap">
                <img class="icon" src="../../assets/images/icons/schedule.png" alt="icon">
                <p class="blue_small_bold">{{event.date}}<br>{{event.date}}</p>
              </div>

              <div class="flex_row_wrap">
                <img class="icon" src="../../assets/images/icons/maps.png" alt="icon">
                <p class="blue_small_bold">{{event.location}}</p>
              </div>
            </div>

          </div><!--Footer del event-->
        </figure> <!--Tanquem figure del event-->


    </div> <!--Event group-->
  </div> <!--Tanquem div gran dels events i estadístiques AMB botons-->

</div>

</template>