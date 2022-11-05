<template>

  <div class="profile_header">
    <img class="landscape" src="https://cnnespanol.cnn.com/wp-content/uploads/2022/08/220731233929-hyperion-tree-full-169.jpg?quality=100&strip=info" alt="Profile">
    <img class="profilePic" src="../assets/images/profilepic.webp" alt="Avatar">
    
    <div class="profileButtons">
      <button class="button_blues_small">10 Amigos</button>
      <button class="button_blues_small">2 Eventos</button>
    </div>
  </div>

  <div class="profile_friends">
    <router-link to="/friends">
      <h1>Amigos (5)</h1>
    </router-link>

    <router-link to="/perfilR">
      <div class="flex_row_wrap">
        <img src="../assets/images/other_user.png" alt="profile pic">
        <div class="column">
          <h2>Amigo1</h2>
          <p class="grey_normal">@amigo1</p>
        </div>  
      </div>
    </router-link>

    <hr>

    <router-link to="/perfilR">
      <div class="flex_row_wrap">
        <img src="../assets/images/other_user.png" alt="profile pic">
        <div class="column">
          <h2>Amigo1</h2>
          <p class="grey_normal">@amigo1</p>
        </div>  
      </div>
    </router-link>

    <hr>

    <router-link to="/perfilR">
      <div class="flex_row_wrap">
        <img src="../assets/images/other_user.png" alt="profile pic">
        <div class="column">
          <h2>Amigo1</h2>
          <p class="grey_normal">@amigo1</p>
        </div>  
      </div>
    </router-link>

    <hr>

    <router-link to="/perfilR">
      <div class="flex_row_wrap">
        <img src="../assets/images/other_user.png" alt="profile pic">
        <div class="column">
          <h2>Amigo1</h2>
          <p class="grey_normal">@amigo1</p>
        </div>  
      </div>
    </router-link>

    <hr>

    <router-link to="/perfilR">
      <div class="flex_row_wrap">
        <img src="../assets/images/other_user.png" alt="profile pic">
        <div class="column">
          <h2>Amigo1</h2>
          <p class="grey_normal">@amigo1</p>
        </div>  
      </div>
    </router-link>
    <hr>
  </div> <!--tanquem profile friends-->

  <!-- User info-->
  <div class="profile_info"> 
    <article>
      <h1>Nombre</h1>
      <!--<h4>@nombre2</h4>-->
      <p class="grey_normal">@nombre</p> 
    </article>
    <div class="flex_row_wrap">
      <p class="pink_normal">Barcelona, España</p>
      <div class="punctuation">
        <img class="stars" src="../assets/images/icons/star_b.png" alt="1 estrella">
        <img class="stars" src="../assets/images/icons/star_b.png" alt="2 estrellas">
        <img class="stars" src="../assets/images/icons/star_b.png" alt="3 estrellas">
        <img class="stars" src="../assets/images/icons/star_b.png" alt="4 estrellas">
        <img class="stars" src="../assets/images/icons/star_b.png" alt="5 estrellas">
        <h5>5</h5>
      </div>
    </div>

    <p class="grey_normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit facilisis erat eu pulvinar. Nam in tincidunt dolor. Fusce non rhoncus ligula. Proin gravida ex a nisi mollis, venenatis gravida sapien aliquet. Nam sed lectus magna.</p>
    <div class="button_flex">
      <router-link to="/editarPerfil"><button class="button_pink_normal">Editar perfil</button></router-link>
      <button-icon><router-link to="/welcome"><img class="icon" src="../assets/images/icons/logout.png" alt="profile configuration"></router-link></button-icon>
    </div>
    <hr>

  </div>
  <!-- -->
      

  <div class="events_statistics_background">
    <div class = "events_statistics_buttons">
      <router-link to="/perfil" id="button"><button class="eventStatistics_Nselected"> Eventos </button></router-link>
      <button class="eventStatistics"> Estadísticas </button>
    </div>
      
    <div class="centered_horitzontal">
      <div class="timeline">
          <div class="timeline_header"> 
            <h2 class="blue_big"> Timeline</h2>
          </div>

          <div id="line"></div>

          <div id="Abril2021"> 
            <p class="darkblue_normal_bold">Abril<br>2021</p>
            <button class="button_timeline">1</button>
          </div>

          <div id="Noviembre2021"> 
            <p class="darkblue_normal_bold">Noviembre<br>2021</p>
            <button class="button_timeline">1</button>
          </div>

          <div id="Marzo2023"> 
            <p class="darkblue_normal_bold">Marzo<br>2023</p>
            <button class="button_timeline">2</button>
          </div>


      </div> <!--Tanquem div timeline-->
    </div> <!--Tanquem div centered_horitzontal-->

    <div class="centered_horitzontal"> 
      <div class="background_white_opac">
          
        <h2 class="blue_big" style="margin-left:20px">Marzo 2023</h2>

        <div class="flex_row_wrap">
          
          <router-link to="/event">
            <figure class="timeline_event">
              <img class="event_img" src="../assets/images/events/80_party_event.jpg" alt="image of the event">
                
              <div class="footer_timelineEvent"> 
                <div>
                  <h2 class="blue_big">Fiesta de los 80</h2>
                  <div class="flex_row_wrap">
                    <img class="icon" src="../assets/images/icons/comment.png" alt="icon">
                    <p class="pink_small_bold">134 comentarios</p>
                  </div>
                  <p class="blue_small_bold">Un 96% de usuarios han comentado más que tu</p>
                </div>

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
            <figure class="timeline_event">
              <img class="event_img" src="../assets/images/events/80_party_event.jpg" alt="image of the event">
            
              <div class="footer_timelineEvent"> 
                <div>
                  <h2 class="blue_big">Fiesta de los 80</h2>
                  <div class="flex_row_wrap">
                    <img class="icon" src="../assets/images/icons/comment.png" alt="icon">
                    <p class="pink_small_bold">134 comentarios</p>
                  </div>
                  <p class="blue_small_bold">Un 96% de usuarios han comentado más que tu</p>
                </div>

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

        </div> <!--tanquem div només envents - flex_row_wrap-->
        
      </div>  <!--Tanquem div de tots els events + títol white opac -->
    </div> <!--Tanquem div centered_horitzontal-->
      
  </div> <!--Tanquem div gran dels events i estadístiques AMB botons-->




  




</template>
