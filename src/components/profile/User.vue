<script>
import ApiCalls from "../../js/APIcalls.js"
import UsersEvents from "./UsersEvents.vue";
import UsersStatistics from "./UsersStatistics.vue";
import router from "../../router/index.js";
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue'

export default{
  components:{
    UsersEvents: UsersEvents,
    UsersStatistics: UsersStatistics,
  },
  data() {
    return {
      user: [],                     // Informacion del usuario correspondiente al perfil
      friends: [],                  // Lista de amigos del usuario
      userEvents:[],                // User events i user statistics

      ownProfile: false,            // Boolean que indica si estamos viendo el perfil del usuario logeado o el de cualquier otro usuario
      profile: false,               // Boolean que indica si la promise de la API para obtener la informacion del usuario ya esta completada
      isFriend: false,              // Boolean que indica si el usuario que estamos viendo es amigo del usario logeado
      showingFriends: false,        // Boolean que indica si se muestra o no la lista de amigos a la derecha del perfil

      showEvents:true,              // Boolean que indica si se debe mostrar el componente de eventos o el de estadisticas.
      eventsFinished: false,        // Boolean que indica si la promise de la API para obtener la informacion sobre los eventos del usuario ya esta completada

    }
  },

  setup(){

    // Obtenemos la id de la ruta actual
    const ROUTE = useRoute();
    const ID = ref();
    ID.value = ROUTE.params.id;

    // Si la ruta cambia actualizamos la pagina
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
        
    this.getUserInfo(this.ID);
    this.getEventsAll(this.ID);
        
  },

  methods: {
    
    // Obtenemos toda la informacion del usuario con una id determinada y la guardamos en variables
    async getUserInfo(userID){
        
    return this.getUserByID(userID)
    .then((user) => {
      this.getFriendsByID(userID).then(friends =>{
        this.user = user;
        this.friends = friends;
      
        if (userID == localStorage.getItem("loggedUser")){
        this.ownProfile = true
        }
        return;  
      });

      this.profile = true;
      return;   
    });


  },

  // Obtenemos toda la informacion sobre eventos relacionada al usuario y la guardamos en variables.
  async getEventsAll(userID){

    /*We get the events that the user has created, and we modify each element of the 
    array by saying that is a created events and not an assisted event.
      |
      |--> Thanks to this, in the child component, it will be easier to implement
           the filter of showing all of them, just the created ones or the assisted ones

      Also, we modify each element of the array with the updateInfoEvent, explained below
    */
    return ApiCalls.getCreatedEventsFromUser(userID)
    .then((createdEvents) => {
      createdEvents = createdEvents.map( createdEvent => {
        createdEvent.created = true;
        createdEvent.assisted = false;
        return createdEvent;
      });

      createdEvents.forEach(this.updateInfoEvent);
      this.userEvents = createdEvents;

      return;
    }) //Once we have finished, we do the same but for the assited events
    .then((vacio) => { 
      return ApiCalls.getAssitedEventsFromUser(userID)
      .then((assitedEvents) => {
        assitedEvents = assitedEvents.map( assitedEvent => {
          assitedEvent.created = false;
          assitedEvent.assisted = true;
          return assitedEvent;
        });

        //We put all the events in the same array
        assitedEvents.forEach(this.updateInfoEvent);
        this.userEvents = this.userEvents.concat(assitedEvents);
        this.eventsFinished = true;

        return;
      });

    });

  },

    // Obtenemos el usuario con la id determinada
    async getUserByID(userID){
      return ApiCalls.getInfoInfoUserByID(userID).then((user) =>{
        return user[0];
      });
    },
    
    // Obtenemos los amigos del usuario con la id determinada
    async getFriendsByID(userID){
          return ApiCalls.getFriendsByID(userID).then((friends) =>{
            var friendList = new Array;
            friends.forEach(friend => {
                if(friend.id != null)
                friendList.push(friend);
            });
            return friendList
          })
    },

    // Enviamos una solicitud de amistad al usuario correspondiente al perfil que estemos viendo
    sendFriendRequest(){
      return ApiCalls.sendFriendRequest(this.ID).then((respone) =>{
        return Response;
      });
    },

    // Actualizamos la informacoin sobre los eventos relacionados con el usuario
    updateInfoEvent(event){
      
      if(event.location.indexOf("(") >= 0){
        event.province = event.location.substring(event.location.indexOf("(") + 1, event.location.length - 1);

      }else{
        event.province = event.location;
      }

      if(event.eventStart_date == null){
        event.eventStart_date = event.date
      }

      if(event.eventEnd_date == null){
        event.eventStart_date = event.date
      }

    },

    // Comprovamos si el usuario que estamos viendo es amigo del usuario logeado
    checkIfFriend(friend){
        if (friend.id == localStorage.getItem("loggedUser")) {
        this.isFriend = true;
        }
    },

    // Setter para cambiar el valor de la variable "profile"
    showingProfile(boolean){
        this.profile = boolean;
    },

    // Ir a el perfil del usuario con la id determinada
    goToProfileR(friendID){
      router.push({name: 'user', params: { id: friendID }});
    },

    // Cerrar la sesion del usuario logeado
    logOut() {
        window.localStorage.setItem("accessToken", "");
        window.localStorage.setItem("loggedUser", "");
        window.location.replace("/sign_in");
    },
    // Ir a la lista de amigos del usuario que estemos viendo
    goToFriendList(){
      router.push({name: 'Friends'});
    },

    // Abrir una ventana de chat con el usuario que estemos viendo
    openChat(){
      router.push({ name: 'Chat' , params: {id: this.ID}});
    },

    // Setter para cambiar el valor de la variable "showEvents"
    changeShowingEventStatistics(value){
      this.showEvents = value;
    },

    // Si no se encuentra la imagen de perfil de un usuario se sustituye por una imagen por defecto. 
    setAltImg(event) { 
      event.target.src = import.meta.env.VITE_DEFAULT_PROFILE_PIC;
    } 

  } 
} 

</script>

  <template>
  <div v-if="profile">
  
    <div class="profile_header">
      <img class="landscape" src="https://cnnespanol.cnn.com/wp-content/uploads/2022/08/220731233929-hyperion-tree-full-169.jpg?quality=100&strip=info" alt="Profile">
      <img class="profilePic" :src="user.image" alt="Avatar" @error="setAltImg">
      
      <div class="profileButtons">
        <button class="button_blues_small" v-on:click.prevent="goToFriendList">{{ this.friends.length }} Amigos</button>
        
        <button class="button_blues_small">{{this.userEvents.length}} Eventos</button>
      </div>
    </div>

    <div class="profile_friends">

      <h1 v-on:click.prevent="goToFriendList">Amigos ({{ this.friends.length }})</h1>
      <div class="flex_row_wrap friend" v-on:click="goToProfileR(friend.id)" v-for="friend in friends.slice(0, 4)" :key="friend.id">
          <img :src="friend.image" alt="profile pic">
          <div class="column">
            <h2>{{ friend.name }}</h2>
          </div>
          <hr>
      </div>

      <div class="column" v-if="this.friends.length > 4">
        <h2 v-on:click.prevent="goToFriendList">Ver más</h2>
      </div>
   
      
    </div> <!--tanquem profile friends-->

      <!-- User info-->
    <main>
      <div class="profile_info"> 
        <article>
          <h1>{{user.name + " " + user.last_name}}</h1>
          <p class="grey_normal">{{user.email}}</p> 
        </article>

        <div v-if="this.ownProfile" class="button_flex">
          <router-link to="/editarPerfil"><button class="button_pink_normal">Editar perfil</button></router-link>
          <button-icon v-on:click = "logOut()"><img class="icon" src="../../assets/images/icons/logout.png" alt="profile configuration"></button-icon>
        </div>
        <div v-else class="button_flex">
          <button v-if="!isFriend" class="button_pink_normal" v-on:click.prevent="sendFriendRequest">Enviar solicitud</button>
          <button v-else class="button_pink_normal">Amigo</button>
          <button-icon v-on:click="openChat"><img class="icon" src="../../assets/images/icons/edit.png" alt="send message button"></button-icon>
        </div>
        <hr>

      </div>
   
    <UsersEvents :events="this.userEvents" v-on:add="changeShowingEventStatistics" v-if="showEvents" />
    <UsersStatistics :events="this.userEvents" v-on:add="changeShowingEventStatistics" v-else/> 
  </main>

  </div>  
  <div v-else class="empty"></div>

</template>


<style scoped>

.flex_row_wrap friend{
    display: inline-block;
    margin: 0; 
    text-align: center;
    justify-content: center;
    height: 1000px;
}

@font-face {
  font-family: inter;
  src: url("../../assets/fonts/inter/Inter-ExtraLight-BETA.ttf");
  font-weight: light;
}

@font-face {
  font-family: inter;
  src: url("../../assets/fonts/inter/Inter-Regular.ttf");
}


@font-face {
  font-family: inter;
  src: url("../../assets/fonts/inter/Inter-Medium.ttf");
  font-weight: medium;
}

@font-face {
  font-family: inter;
  src: url("../../assets/fonts/inter/Inter-Bold.ttf");
  font-weight: bold;
}

</style>

