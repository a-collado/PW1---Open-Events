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
            recomendedEvent: ""
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
    methods: {

        shakeElement(el) {
            //el.classList.add('rotateable');
            el.style.marginLeft = '20px';
            console.log("Shake shake");

            setTimeout(function() {
                el.style.marginLeft = '-20px';
                setTimeout(function() {
                el.style.marginLeft = '0px';
                }, 100);
            }, 100);

        },
        getUser(){

          ApiCalls.getAllUsers().then((output) =>{
            if(output == ApiCalls.getCORRECT()) {
               
            }else{
                
            }
            
           } );
           
        },

        createEvent(){
          if(ApiCalls.hasLoggedIn()){
            window.location.replace("/create_event");
          }else{
            alert("No se puede crear un evento si no se inicia sessión");
          }
        },
        toggleFilter() {
            this.isFilterShown = !this.isFilterShown;
        },
        getAllEvents() {
          ApiCalls.GetAllEvents()
          .then((allEvents) => {
            this.events = allEvents;
            this.events.forEach(event => {
              event.isShown = true;
            });
            console.log(this.events);
            return;
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
                console.log("Sorting by rating");
                

                break;

              default:
                console.log("Sorting gone wrong: " + type + " - " + dir);
                break;
            }
          }
          
          //reset shown events
          this.events.forEach(event => {
            event.isShown = true;
          });

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
          
          var filteredEvent = [];
          this.events.forEach(event => {
              if (event.isShown){
                filteredEvent.push(event);
              }
          });
          console.log(filteredEvent);
        


        },resetFilter(){
          this.events.forEach(event => {
            event.isShown = true;
          });
        },async loadRecomendedEvent() {
             await ApiCalls.sortByRating()
                .then((sortedEvents) => {
                  this.recomendedEvent = sortedEvents[0];
                  console.log(this.recomendedEvent);
                })
        }
        
      },created() {
        console.log("Loading events");
        this.loadRecomendedEvent();
        this.getAllEvents();  
      }
      
   
}
</script>

<!-- ##################### HTML #####################-->

<template>

<div class="home-wrapper">
  <hr>
  <router-link to="/event">
    <figure class="recomended_event">
      <div class="recomended_event_img" style="background-image: url({{this.recomendedEvent.image}});">
          <div class="footer_event"> 
            <h1 class="Name">{{this.recomendedEvent.name}}</h1>
            <p class="Data">{{this.recomendedEvent.eventStart_date.substring(0,10)}}   -  {{this.recomendedEvent.eventStart_date.substring(11,16)}}</p>
            <p class="Location">{{this.recomendedEvent.location}}</p>
          </div>
      </div>
    </figure>
  </router-link>

  <div class="create_event">
    <hr>
    <button class="button" v-on:click="createEvent()"> Crea tu propio evento </button>
  </div>

  <div class="categories">
    <div class="cat1">Descubrir</div>
    <div class="cat2">Tu zona</div>
    <div class="cat3">Amigos</div>
  </div>
  <div class="filter-row">
    <p style="margin:0px">Populares</p>
      <button  v-on:click="toggleFilter()"><img src="src\assets\images\icons\options 1.png" width="30px" height="30px"></button>
  </div>

  <Filter/>
    
  <div class="events">
    <div class="event_group" v-for ="event in events" :key="event.id">
        <figure class="basic_event" v-on:click="goToEvent(event.id)"  v-if="event.isShown">
          
            <img class="event_img" :src="event.image" alt="image of the event">
            
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
  flex-direction: row;
  align-content: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 0px;
}

.footer_event{
  height: 40%;
  border-radius: 0px 0px 20px 20px;
  background-color: rgba(23, 22, 22, 0.6);
  position: relative;
  padding: 5px;
  padding-left: 15px;

}

.recomended_event_img{
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width:94vw;
  max-width: 800px;
  height:40vw;
  max-height: 320px;
  border-radius: 20px;
  box-sizing: border-box;
  filter: saturate(75%);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-self: center;
  margin-top: 3vw;
  margin-bottom: 3vw;
}

.Name{
  font-weight: bold;
  font-size: 100%;
  color: white;
  margin:1px;

}

.Data{
  font-size: 80%;
  font-weight: bold;
  color: rgb(237, 70, 234);
  margin:1px;
}

.Location{
  font-weight: bold;
  font-size: 80%;
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
}.cat3{
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


@media (min-width: 450px) {

  .footer_event{
    height: 40%;
    border-radius: 0px 0px 20px 20px;
    background-color: rgba(23, 22, 22, 0.6);
    position: relative;
    padding: 5px;
    padding-left: 30px;
  }
  .Name{
    font-weight: bold;
    font-size: 24px;
    color: white;
    margin:2px;

  }

  .Data{
    font-size: 20px;
    font-weight: bold;
    color: rgb(237, 70, 234);
    margin:2px;
  }

  .Location{
    font-weight: bold;
    font-size: 20px;
    color: white;
    margin:2px;
  }

}
</style>