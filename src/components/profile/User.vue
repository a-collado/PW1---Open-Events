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
      user: [],
      friends: [],
      userEvents:[], //user events i user statistics

      ownProfile: false,
      profile: false, //mira si de la API ja ha agafat la info
      isFriend: false,
      showingFriends: false,

      profileKey:0,

      showEvents:true, //canvi vista entre user events i user statistics
      eventsFinished: false, //mira si de la API ja ha agafat la info

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
        
    this.getUserInfo(this.ID);
    this.getEventsAll(this.ID);
        
  },

  methods: {
    
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

  async getEventsAll(userID){

    return await ApiCalls.getCreatedEventsFromUser(userID)
    .then((createdEvents) => {
      //this.createdEvents = createdEvents;
      //console.log(createdEvents);
      createdEvents = createdEvents.map( createdEvent => {
        createdEvent.created = true;
        createdEvent.assisted = false;
        return createdEvent;
      });

      //console.log(createdEvents);

      createdEvents.forEach(this.updateInfoEvent);

      this.userEvents = createdEvents;
      return;
    })
    .then((vacio) => { 
      return ApiCalls.getAssitedEventsFromUser(userID)
      .then((assitedEvents) => {
        //this.assitedEvents = assitedEvents;

        assitedEvents = assitedEvents.map( assitedEvent => {
          assitedEvent.created = false;
          assitedEvent.assisted = true;
          return assitedEvent;
        });

        assitedEvents.forEach(this.updateInfoEvent);
        this.userEvents = this.userEvents.concat(assitedEvents);
        this.eventsFinished = true;
        return;
      });

    });

  },

    //METHODS API__________________________________________________________
    async getUserByID(userID){
      return ApiCalls.getInfoInfoUserByID(userID).then((user) =>{
        return user[0];
      });
    },
    
    async getFriendsByID(userID){
      return ApiCalls.getFriendsByID(userID)
      .then(body => {
        body.forEach(this.checkIfFriend);
        return body;
      });
    },

    sendFriendRequest(){
      return ApiCalls.sendFriendRequest(this.ID).then((respone) =>{
        return Response;
      });
    },

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

    //METHODS USED IN METHODS API___________________________________________
    checkIfFriend(friend){
        if (friend.id == localStorage.getItem("loggedUser")) {
        this.isFriend = true;
        }
    },

    //______________________________________________________________________
    showingProfile(boolean){
        this.profile = boolean;
    },
    goToProfileR(friendID){
      router.push({name: 'user', params: { id: friendID }});
    },
    logOut() {
        window.localStorage.setItem("accessToken", "");
        window.localStorage.setItem("loggedUser", "");
        window.location.replace("/sign_in");
    },
    goToFriendList(){
      router.push({name: 'Friends'});
    },
    openChat(){
      router.push({ name: 'Chat' , params: {id: this.ID}});
    },

        

    changeShowingEventStatistics(value){
      //console.log(value);
      this.showEvents = value;
    }

  } //methods
} //export default

</script>

  <template>
  <div v-if="profile"><!--<div v-if="profile && eventsFinished">-->
  
    <div class="profile_header">
      <img class="landscape" src="https://cnnespanol.cnn.com/wp-content/uploads/2022/08/220731233929-hyperion-tree-full-169.jpg?quality=100&strip=info" alt="Profile">
      <img class="profilePic" :src="user.image" alt="Avatar">
      
      <div class="profileButtons">
        <button class="button_blues_small" v-on:click.prevent="goToFriendList">{{ this.friends.length }} Amigos</button>
        
        <button class="button_blues_small">{{this.userEvents.length}} Eventos</button>
      </div>
    </div>

    <div class="profile_friends">

      <h1 v-on:click.prevent="goToFriendList">Amigos ({{ this.friends.length }})</h1>
      <!-- Hay que hacer que las lineas horizontales entre amigos se muestren bien -->
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
         <!--<div class="flex_row_wrap">
          <p class="pink_normal">Barcelona, España</p>
          <div class="punctuation">
            <img class="stars" src="../../assets/images/icons/star_b.png" alt="1 estrella">
            <img class="stars" src="../../assets/images/icons/star_b.png" alt="2 estrellas">
            <img class="stars" src="../../assets/images/icons/star_b.png" alt="3 estrellas">
            <img class="stars" src="../../assets/images/icons/star_b.png" alt="4 estrellas">
            <img class="stars" src="../../assets/images/icons/star_b.png" alt="5 estrellas">
            <h5>5</h5>
          </div>
        </div>

        <p class="grey_normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit facilisis erat eu pulvinar. Nam in tincidunt dolor. Fusce non rhoncus ligula. Proin gravida ex a nisi mollis, venenatis gravida sapien aliquet. Nam sed lectus magna.</p>
        --> 
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
    </main>

    <UsersEvents :events="this.userEvents" v-on:add="changeShowingEventStatistics" v-if="showEvents" />
    <UsersStatistics :events="this.userEvents" v-on:add="changeShowingEventStatistics" v-else/> 

    <!--<UsersEvents v-on:add="changeShowingEventStatistics" v-if="showEvents" />
    <UsersStatistics v-on:add="changeShowingEventStatistics" v-else/> -->

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

