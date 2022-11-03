<template>

<div class="home-wrapper">
  <hr>
  <router-link to="/event">
    <figure class="recomended_event">
      <div class="recomended_event_img">
          <div class="footer_event"> 
            <h1 class="Name">Festival anual de Barcelona</h1>
            <p class="Data">14 de octubre a las 18:00h</p>
            <p class="Location">Sala Tango, calle Ruiseñor, Barcelona</p>
          </div>
      </div>
    </figure>
  </router-link>

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
  <div id="filter">
    <div class="filter_header">
      <img src="src\assets\images\icons\left-arrow 1.png">
      <h1>Filtros</h1>
      <p> Reset</p>
    </div>
    <hr class="small_divider">
    <div class="slider">
      <div>
        <p>Rango de precios</p>
        <p>0-12€</p>
      </div>
      <input type="range" min="0" max="50" value="12" class="slider_bar">
    </div>
    <hr class="small_divider">
    <div class="slider">
      <div>
        <p>Distancia</p>
        <p>&#60; 15 km</p>
      </div>
      <input type="range" min="0" max="50" value="12" class="slider_bar">
    </div>
    <hr class="small_divider">
    <div class="radio_buttons">
      <p>Puntuación media del creador:</p>
      <input type="radio"  name="punt" value="4">
      <label for="punt1"><img src="src\assets\images\icons\4_estrellas.png"></label><br>
      <input type="radio"  name="punt" value="3">
      <label for="punt1"><img src="src\assets\images\icons\3_estrellas.png"></label><br>
      <input type="radio"  name="punt" value="2">
      <label for="punt1"><img src="src\assets\images\icons\2_estrellas.png"></label><br>
      <input type="radio"  name="punt" value="1">
      <label for="punt1"><img src="src\assets\images\icons\1_estrella.png"></label><br>
    </div>
  </div>
  <div class="events">
    <div class="event_group">
      <router-link to="/event">
        <figure class="basic_event">
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
        </figure> <!--Tanquem figure del event-->
      </router-link>

      <router-link to="/event">
        <figure class="basic_event">
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
        </figure> <!--Tanquem figure del event-->
      </router-link>

      <router-link to="/event">
        <figure class="basic_event">
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
        </figure> <!--Tanquem figure del event-->
      </router-link>

      <router-link to="/event">
        <figure class="basic_event">
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
        </figure> <!--Tanquem figure del event-->
      </router-link>

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
  box-sizing: border-box;
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
  margin: 3vw;
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
  max-width: 1000px;
}

.small_divider{
  border:0;
  border-top: 1px solid #CCCCCC;
  margin: 8px
}

.filter_header{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  margin: 0px
}
.filter_header *{
  margin: 5px;
}
.filter_header h1{
  font-size: 18px;
}

#filter{
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 5px;
}

.slider div{
  display: flex;
  flex-direction: row;
  justify-content:  space-between;
  align-content:flex-start;
  font-size: 14px;
}

.slider input {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 5px;  
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%; 
  background: #000000;
  cursor: pointer;
}

.radio_buttons{
  font-size: 14px;
}
.radio_buttons label{
  margin-left: 80px;
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