<!--<script>
import ApiCalls from "../../js/APIcalls.js"
import router from "../../router/index.js";
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue'

export default{
    
    data() {
        return {
            events:[],

            userEvents: false,
            profileKey:0

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
        
      //this.getEventsAll(this.ID);
      console.log("UserEvents", this.ID);
        
    }/*,
    methods: {
      async getEventsAll(userID){
        
          /*this.getUserByID(userID)
          .then((user) => {
              this.getFriendsByID(userID).then(friends =>{
                this.user = user;
                this.friends = friends;
              
                if (userID == localStorage.getItem("loggedUser")){
                this.ownProfile = true

                return;
              }

              return;
            });
          }).then((vacio) => {
              this.getEventsAll().then((events) => {
                this.events = events;
                return;
              })
              return;
          });*/


        /*},

        //METHODS API__________________________________________________________
        async getUserByID(userID){
            return ApiCalls.getInfoInfoUserByID(userID).then((user) =>{
            return user[0];
          });
        },
        

        //METHODS USED IN METHODS API___________________________________________


        //______________________________________________________________________

        

    }*/
}

</script> -->


<template>

     
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

      <router-link to="/event">
        <figure class="basic_event">
          <img class="event_img" src="../../assets/images/events/80_party_event.jpg" alt="image of the event">
          
          <div class="footer_basicEvent"> 
            <h2 class="blue_big">Fiesta de los 80</h2>

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
        <figure class="basic_event">
          <img class="event_img" src="../../assets/images/events/80_party_event.jpg" alt="image of the event">
          
          <div class="footer_basicEvent"> 
            <h2 class="blue_big">Fiesta de los 80</h2>

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
        <figure class="basic_event">
          <img class="event_img" src="../../assets/images/events/80_party_event.jpg" alt="image of the event">
          
          <div class="footer_basicEvent"> 
            <h2 class="blue_big">Fiesta de los 80</h2>

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
        <figure class="basic_event">
          <img class="event_img" src="../../assets/images/events/80_party_event.jpg" alt="image of the event">
          
          <div class="footer_basicEvent"> 
            <h2 class="blue_big">Fiesta de los 80</h2>

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

    </div> <!--Event group-->
  </div> <!--Tanquem div gran dels events i estadístiques AMB botons-->
</template>