<script>
import { stringifyStyle } from "@vue/shared";
import ApiCalls from "../js/APIcalls.js";
import Filter from "./Filter.vue";
import router from "../router/index.js";
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue'

export default{
    components :{
      Filter: Filter
    },
    data() {
        return {
            email: "",
            password: "",
            isFilterShown:true,
            events: [],
            recomendedEvent: "",
            showAll: false,
            show: false,
            categoryDescubrir: true,
            categoryTuZona: false,
            categoryAmigos: false

        }
    },
    setup(){
        const ROUTE = useRoute();
        const ID = ref();
        ID.value = ROUTE.params.id;

        watch(
        () => ROUTE.params.id,
        async newId => {
            this.$router.go()
        },
        () => { 
            ID.value = ROUTE.params.id; 
        }
        )

        return { ID };
    },
    methods: {

        createEvent(){
          if(ApiCalls.hasLoggedIn()){
            router.push({name: 'Create Event'});
          }else{
            alert("No se puede crear un evento si no se inicia sessión");
          }
        },
        toggleFilter() {
            this.isFilterShown = !this.isFilterShown;
        },
        async getAllEvents() {
          return ApiCalls.GetAllEvents()
          .then((allEvents) => {
            this.events = allEvents;
            this.events.forEach(event => {
              event.isShown = true;
            });
            this.show = true;
            return;
          }).catch((error)=>{
            console.error(error, " happened");
          });
        },
        goToEvent(eventID){
          router.push({name: 'Event', params: {id: eventID}});
        },
        //Filters and sorters
        async applyFilter(filters){

          //Sort the events
          if (filters[6] !== ""){
            var type = filters[6].split('_')[0];
            var dir = filters[6].split('_')[1];
            switch (type) {
              case "alph":
                  
                this.events.sort(function(a, b){
                  let x = a.name.toLowerCase();
                  let y = b.name.toLowerCase();
                  if (x < y) {return -1;}
                  if (x > y) {return 1;}
                  return 0;
                });

                if (dir === "do"){
                  this.events.reverse();
                }


                break;

              case "date":

                this.events.sort(function(a,b){
                  return new Date(b.eventStart_date) - new Date(a.eventStart_date);
                });

                if (dir === "do"){
                  this.events.reverse();
                }
                break;

              case "assi":

                this.events.sort(function(a, b){
                    return a.n_participators - b.n_participators}
                  );

                if (dir === "do"){
                  this.events.reverse();
                }
                break;

              case "rati":

                await ApiCalls.sortByRating()
                  .then((sortedEvents) => {
                    this.events = sortedEvents;
                  }).then((events)=>{
                    if (dir === "do"){
                      this.events.reverse();
                    }
                  });                

                break;

              default:

                break;
            }
          }
          
          //reset shown events
          
          /*this.events.forEach(event => {
            event.isShown = true;
          });*/

          //filter them
          this.events.forEach(event => {
            
              if (event.location !== filters[0] && filters[0]!=="") {
                event.isShown = false;
              }
              
              if (filters[1]!=="") {
                var d1 = new Date(event.eventStart_date);
                var d2 = new Date(filters[2]);
                if (d1 <= d2) {
                  event.isShown = false;
                }
              }
              if (filters[2]!=="") {
                var d1 = new Date(event.eventEnd_date);
                var d2 = new Date(filters[2]);
                if (d1 > d2) {
                  event.isShown = false;
                }
              }
              if (filters[3]!==""){
                  if (event.avg_score < parseInt(filters[3])*2) {
                    event.isShown = false;
                  }
                  
              }
              if (event.type !== filters[4] && filters[4]!=="") {
                event.isShown = false;
              }
              if (event.n_participators < filters[5] && filters[5]!=="") {
                event.isShown = false;
              }

          });

        },resetFilter(){
            this.getAllEvents();  
            this.events.forEach(event => {
                event.isShown = true;
            });

            this.categoryAmigos = false;
            this.categoryTuZona = false;
            this.categoryDescubrir = true;

        },loadRecomendedEvent() {
             ApiCalls.sortByRating()
                .then((sortedEvents) => {
                  this.recomendedEvent = sortedEvents[2];
                  this.showAll = true;
                })

        },applyFilterDescubrir() {
            this.categoryAmigos = false;
            this.categoryTuZona = false;
            this.categoryDescubrir = true;
            

            this.resetFilter();

        },applyFilterZona() {
            this.events.forEach(event => {
                event.isShown = true;
            });
            //Filter with events near your location
            this.categoryAmigos = false;
            this.categoryTuZona = true;
            this.categoryDescubrir = false;

            var zona = "Barcelona";

            this.events.forEach(event => {
                if (event.location !== zona) {
                event.isShown = false;
                }
            });   

        },applyFilterAmigos() {

            this.events.forEach(event => {
                event.isShown = true;
            });
            //Filter with events of your friends
            this.categoryAmigos = true;
            this.categoryTuZona = false;
            this.categoryDescubrir = false;


            var friendsEvent = ApiCalls.getFriendsEvents().then((friendsEvent)=>{

                for (let i = 0; i < friendsEvent.length; i++) {
                    let event = friendsEvent[i];
                    this.events.forEach(event => {
                        if (friendEvent.id === event.id){
                            event.isShown = true;
                        }else{
                            event.isShown = false;
                        }
                    });
                }
                       
            });
        },
        setAltImg(event) { 
          event.target.src = import.meta.env.VITE_DEFAULT_EVENT_PIC;
        } 
        
      },created() {
        this.loadRecomendedEvent();
        this.getAllEvents();  
      }
      
}
</script>

<!-- ##################### HTML #####################-->

<template>

<div class="home-wrapper" v-if="this.showAll">
  <hr>
  <figure class="recomended_event" v-on:click="goToEvent(this.recomendedEvent.id)">
    <img class="recomended_event_img" :src="this.recomendedEvent.image" @error="setAltImg">
    <div class="footer_event"> 
      <h1 class="Name">{{this.recomendedEvent.name}}</h1>
      <p class="Data" >{{this.recomendedEvent.date.substring(0,10)}}   -  {{this.recomendedEvent.date.substring(11,16)}}</p>
      <p class="Location">{{this.recomendedEvent.location}}</p>
    </div>
  </figure>    


  <div class="create_event">
     <hr>
    <button class="button" v-on:click="createEvent()"> Crea tu propio evento </button>
  </div>

  <div class="categories">
    <div class="cat1" v-bind:class="{selectedCategory:this.categoryDescubrir}" v-on:click="applyFilterDescubrir()" >Descubrir</div>
    <div class="cat2" v-bind:class="{selectedCategory:this.categoryTuZona}" v-on:click="applyFilterZona()">Tu zona</div>
    <div class="cat3" v-bind:class="{selectedCategory:this.categoryAmigos}" v-on:click="applyFilterAmigos()">Amigos</div>
  </div>
  <div class="filter-row">
    <p style="margin:0px">Eventos</p>
      <button  v-on:click="toggleFilter()"><img src="src\assets\images\icons\options 1.png" width="30px" height="30px"></button>
  </div>

  <Filter/>
    
  <div class="events" v-if="show">
    <div class="event_group" v-for ="event in events" :key="event.id">
        <figure class="basic_event" v-on:click="goToEvent(event.id)"  v-if="event.isShown">
          
            <!-- <img class="event_img" :src="event.image" @error="this.$root.replaceImgEventByDefault()" alt="image of the event"> --> 
            <img class="event_img" :src="event.image" @error="setAltImg" alt="image of the event">

            <div class="footer_basicEvent"> 
              <h2 class="blue_big">{{event.name}}</h2>

              <div class="column"> 
                <div class="flex_row_wrap">
                  <img class="icon" src="../assets/images/icons/schedule.png" alt="icon">
                  <p class="blue_small_bold">{{event.date.substring(0,10)}}<br>{{event.date.substring(11,16)}}</p>
                </div>

                <div class="flex_row_wrap">
                  <img class="icon" src="../assets/images/icons/maps.png" alt="icon">
                  <p class="blue_small_bold">{{event.location}}</p>
                </div>
              </div>
            </div><!--Footer del event-->
        </figure> <!--Tanquem figure del event-->
      </div> <!--Event group-->
  </div>
</div>

</template>


<!-- ##################### CSS ######################## -->


<style scoped>

.home-wrapper{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin:0px;
  
}
.recomended_event{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 0px;
  margin-bottom: 7vw;
  
}

.footer_event{
  height: 17vw;
  border-radius: 0px 0px 20px 20px;
  background-color: rgba(23, 22, 22, 0.6);
  position: relative;
  padding: 2vw;
  padding-left: 15px;
  margin-top: -21vw;



}


.recomended_event_img{
  margin: 0px;
  border-radius: 8px;
  width: 80vw;
  height: 40vw;
  object-fit: cover;
  filter: saturate(75%);


}

.Name{
  font-weight: bold;
  font-size: 5vw;
  color: white;
  margin:3px;

}

.Data{
  font-size: 3vw;
  font-weight: bold;
  color: rgb(237, 70, 234);
  margin:1px;
}

.Location{
  font-weight: bold;
  font-size: 3vw;
  color: white;
  margin:1px;
}

.create_event{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 30px;
  max-width: 800px;
  
}

.create_event hr{
  width: 100vw;
  border-top: 2px solid black;
  max-width: 800px;

}

.create_event .button{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 14px;
  font-weight: bold;
  background-color: aqua;
  border-radius: 10px;
  width: 210px;
  height: 50px;
  background: linear-gradient(180deg, #25585D 0%, rgba(0, 173, 189, 0.95) 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.categories{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  max-width: 800px;
}

.categories *{
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0px 0px;
  width: 30vw;
  height: 61px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.42) 13.02%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.17) 100%);
  margin: 2px;
}.selectedCategory{
  background: linear-gradient(180deg, rgba(226, 106, 186, 0.64) 13.02%, rgba(226, 106, 186, 0) 100%);
}


.basic_event{
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 5px;
  margin-bottom:0px;
  margin-top: 20px;
}

.event_group{
  display: flex;
  max-width: 1000px;
  justify-content: center;
}

.events{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80vw;
}



.filter-row button img{
    width: 30px;
    height: 30px;
  }




</style>