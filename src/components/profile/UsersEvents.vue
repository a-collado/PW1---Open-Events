<script>
import ApiCalls from "../../js/APIcalls.js"
import router from "../../router/index.js";
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue'

export default{

  props: {
    events: Array
  },
    
  data() {
    return {
      //vars for the filters
      showCreados:true,
      showAssistidos:true,
      showFinished:true,
      showSortFilter:false,

      //vars for the local events
      /* We have a filter that must order the events. As we can't change the prop, we will use the 
      var "local_events". Now it is initialized with a reference, but after, we will just copy the content
      */
      local_events: this.events,
      orderFirtsTime: false

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
  },

  mounted(){
    /*Here we wanted to copy the information of the events (prop), but, we have seen that, when we arrive here,
    sometimes, the array of the parent is already empty. So, we are going to change it to local events when we need
    to sort
    */
  },
  
  methods: {

      //Go to the event selected
      goToEvent(eventID){
        router.push({name: 'Event', params: {id: eventID}});
      },

      //From the filters, make all the events visible
      showAllEvents(){
        this.showCreados = true;
        this.showAssistidos = true;
      },

      //just show the created events
      showCreadosMethod(){
        this.showAssistidos = false;
        this.showCreados = true;
      },

      //just show the assisted events
      showAssistidosMethod(){
        this.showCreados = false;
        this.showAssistidos = true;
      },

      //Sort the events by name or date
      sortEvents(value){

        /*When we arrive here, we now for sure that this.events (prop) is not empty. So, to don't
        have problems, we copy the values of the events in the localEvents, so we will be able the sort 
        without affecting to the parent variable.

        the var "orderFirtsTime" is to just make it one time and to show in html the v-for with the copied 
        events and not the original ones*/

        if(!this.orderFirtsTime){
          this.orderFirtsTime = true;
          this.local_events = [...this.events];
        }

        switch (value) {
          case 1: //By name A-Z
            this.local_events = this.local_events.sort(function(a,b){return a.name.localeCompare(b.name);});
            break;
          case 2: //By name Z-A
            this.local_events = this.local_events.sort(function(a,b){return b.name.localeCompare(a.name);});
            break;
          
          case 3: //By date Oldest-Newest
            this.local_events = this.local_events.sort(function(a,b){return new Date(a.eventStart_date) - new Date(b.eventStart_date);});
            break;

          case 4: //By date Newest-Oldest
            this.local_events = this.local_events.sort(function(a,b){return new Date(b.eventStart_date) - new Date(a.eventStart_date);});
          break;

        }

      }, 

      //Show and hide the sorting filter
      showSortFilterMethod(){
        if(this.showSortFilter){
          this.showSortFilter = false;
        }else{ this.showSortFilter = true;}
      }
      ,

      setAltImg(event) { 
        event.target.src = "https://i.ibb.co/gV3wfX7/default-Event1.webp" ;
    } 
  } 
} 

</script> 


<template>

  <div class="events_statistics_background">
    <div class = "events_statistics_buttons">
      <button class="eventStatistics"> Eventos </button>
      <button v-on:click="$emit('add', false)" class="eventStatistics_Nselected"> Estadísticas </button>
    </div>


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

      <li v-if ="!this.orderFirtsTime" v-for = "event in this.events" :key="event.id">

      <figure class="basic_event" v-on:click="goToEvent(event.id)"   v-if="(showCreados && event.created) || (showAssistidos && event.assisted)">

          <img class="event_img" v-bind:src=event.image alt="image of the event" @error="setAltImg">
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

    </li>

    <li v-if ="this.orderFirtsTime" v-for = "event in this.local_events" :key="event.id">

      <figure class="basic_event" v-on:click="goToEvent(event.id)"   v-if="(showCreados && event.created) || (showAssistidos && event.assisted)">

          <img class="event_img" v-bind:src=event.image alt="image of the event" @error="setAltImg">
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

    </li>




    </div> <!--Event group-->


  </div> <!--Tanquem div gran dels events i estadístiques AMB botons-->

</template>

<style scoped>

  li{
    list-style-type: none;
  }
</style>
