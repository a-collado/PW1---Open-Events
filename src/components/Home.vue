<template>

<div class="home-wrapper">
  <hr>
  <div class="recomended_event">
    <div class="recomended_event_img">
        <div class="footer_event"> 
          <h1 class="Name">Festival anual de Barcelona</h1>
          <p class="Data">14 de octubre a las 18:00h</p>
          <p class="Location">Sala Tango, calle Ruiseñor, Barcelona</p>
        </div>
    </div>
  </div>
  <div class="create_event">
    <hr>
    <router-link to="/create_event" class="button"> Crea tu propio evento </router-link>
  </div>
  <div class="categories">
    <div class="cat1">Descubrir</div>
    <div class="cat2">Tu zona</div>
    <div class="cat3">Amigos</div>
  </div>
  <div class="filter-row">
    <p style="margin:0px">Populares</p>
      <img src="src\assets\images\icons\options 1.png" width="30px" height="30px">
  </div>
  <div class="events">
    <div class="event_group">
          <div class="basic_event">
            <img class="event_img" src="../assets/images/events/80_party_event.jpg" alt="image of the event">
            
            <div class="footer_basicEvent"> 
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

          <div class="basic_event">
            <img class="event_img" src="../assets/images/events/80_party_event.jpg" alt="image of the event">
            
            <div class="footer_basicEvent"> 
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

          <div class="basic_event">
            <img class="event_img" src="../assets/images/events/80_party_event.jpg" alt="image of the event">
            
            <div class="footer_basicEvent"> 
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

          <div class="basic_event">
            <img class="event_img" src="../assets/images/events/80_party_event.jpg" alt="image of the event">
            
            <div class="footer_basicEvent"> 
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

      </div> <!--Event group-->
  </div>
</div>

</template>

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
  background-image: url("../assets/images/events/80_party_event.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width:100vw;
  max-width: 800px;
  height:40vw;
  max-height: 320px;
  border-radius: 20px;
  filter: saturate(75%);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-self: center;
  margin: 20px;
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
  margin: 10px;
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
  margin: 20px;
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

.filter-row{
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 26px;
  font-weight: bold;
  margin: 20px 20px 0px 20px;
  width:100vw;
  max-width: 800px;
}

.basic_event{
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 5px;
  margin-bottom:0px;
  margin-top: 20px;
}

.event_group{
  margin-left:20px;
  margin-right:20px;
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