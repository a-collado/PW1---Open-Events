<template>

  <div class="profile_header">
    <img class="landscape" src="https://cnnespanol.cnn.com/wp-content/uploads/2022/08/220731233929-hyperion-tree-full-169.jpg?quality=100&strip=info" alt="Profile">
    <img class="profilePic" src="../assets/images/profilepic.webp" alt="Avatar">
    
    <div class="profileButtons">
      <button>10 Amigos</button>
      <button>2 Eventos</button>
    </div>
  </div>

  <div class="profile_friends">
    <h1>Amigos (5)</h1>
    <div class="flex_row_wrap">
      <img src="../assets/images/profilepic.webp" alt="profile pic">
        <div class="column">
          <h2>Amigo1</h2>
          <p class="grey_normal">@amigo1</p>
      </div>  
    </div>
    <hr>
    <div class="flex_row_wrap">
      <img src="../assets/images/profilepic.webp" alt="profile pic">
        <div class="column">
          <h2>Amigo1</h2>
          <p class="grey_normal">@amigo1</p>
      </div>  
    </div>
    <hr>
    <div class="flex_row_wrap">
      <img src="../assets/images/profilepic.webp" alt="profile pic">
        <div class="column">
          <h2>Amigo1</h2>
          <p class="grey_normal">@amigo1</p>
      </div>  
    </div>
    <hr>
    <div class="flex_row_wrap">
      <img src="../assets/images/profilepic.webp" alt="profile pic">
        <div class="column">
          <h2>Amigo1</h2>
          <p class="grey_normal">@amigo1</p>
      </div>  
    </div>
    <hr>
    <div class="flex_row_wrap">
      <img src="../assets/images/profilepic.webp" alt="profile pic">
        <div class="column">
          <h2>Amigo1</h2>
          <p class="grey_normal">@amigo1</p>
      </div>  
    </div>
    <hr>
    
  </div>

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
    <button>Editar perfil</button>
    <button-icon><img class="icon" src="../assets/images/icons/config.png" alt="profile configuration">
    </button-icon>
    <button-icon><img class="icon" src="../assets/images/icons/dots_h.png" alt="more options">
    </button-icon>
  </div>
  <hr>

</div>
<!-- -->
      

    <div class="events_statistics_background">
        <div class = "events_statistics_buttons">
          <button class="eventStatistics"> Eventos </button>
          <button class="eventStatistics_Nselected"> Estadísticas </button>
        </div>
        
        <div class="centered_horitzontal">
            <div id="timeline">
                <div class="timeline_header"> 
                    <h2 class="tittle_basicEvent"> Timeline</h2>
                </div>

                <div id="line"></div>

                <div class="column" >
                    <div id="Abril2021"> 
                        <p class="darkblue_normal_bold">Abril<br>2021</p>
                        <button class="button_timeline">1</button>
                    </div>
                </div>

                <div class="column" >
                    <div id="Noviembre2021"> 
                        <p class="darkblue_normal_bold">Noviembre<br>2021</p>
                        <button class="button_timeline">1</button>
                    </div>
                </div>

                <div class="column" >
                    <div id="Marzo2023"> 
                        <p class="darkblue_normal_bold">Marzo<br>2023</p>
                        <button class="button_timeline">2</button>
                    </div>
                </div>


            </div> <!--Tanquem div timeline-->

        </div> <!--Tanquem div centered_horitzontal-->
    </div> <!--Tanquem div gran dels events i estadístiques AMB botons-->

  <!---->





  




</template>
