<template>
    <div class="basic_event">
        <img class="event_image" src="../assets/images/events/80_party_event.jpg" alt="image of the event">
        
        <div class="footer_event"> 
        <h2 class="blue_big">Fiesta de los 80</h2>

        <div class="column"> 
            <div class="flex_row_wrap">
            <img class="icon" src="../assets/images/icons/schedule.png" alt="icon">
            <p class="blue_small_bold">09/11/2021<br>20:00</p>
            </div>

            <div class="flex_row_wrap">
            <img class="icon" src="../assets/images/icons/maps.png" alt="icon">
            <p class="blue_small_bold">Barcelona</p>
            </div>
        </div>

        </div><!--Footer del event-->
  </div> <!--Tanquem div del event-->
</template>

<style scoped>

.event_image{
    border-radius: 30px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(75%);
}
.footer_event{
  width: 100%;
  height: 40%;
  border-radius: 20px;
  background-color: rgba(23, 22, 22, 0.4);
  position: relative;

}


</style>