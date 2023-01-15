<script>
    import router from "../router/index.js";

    export default{
        props: {
            results: Array
        },
        data() {
            return {
            
            }
        },
        mounted() {
        },
        methods: {
            goToEvent(eventID){
            router.push({name: 'Event', params: { id: eventID }});
            this.$emit("goToEvent");
            },
            setAltImg(event) { 
              event.target.src = import.meta.env.VITE_DEFAULT_EVENT_PIC;
            },
        }
    }

</script>


<template>

<main>
    <div class="event_group" v-for ="event in results" :key="event.id">
        <figure class="basic_event" v-on:click="goToEvent(event.id)">
          
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
            </div>
        </figure>
      </div>
</main>


</template>


<style scoped>
    .basic_event{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 5px;
    margin-bottom:0px;
    margin-top: 20px;
    }

    .event_group{
    display: flex;
    justify-content: center;
    }

    .events{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80vw;
    }
</style>
