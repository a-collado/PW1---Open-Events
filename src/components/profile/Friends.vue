<script>
import ApiCalls from "../../js/APIcalls.js";
import FriendList from "./FriendsList.vue"
import Requests from "./Requests.vue";
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue'
import router from "../../router/index.js";




export default{
    /*props: {
        friends: Array,
        logedUser: Boolean
    },*/
    setup(){
        const route = useRoute();
        const id = ref();
        
        id.value = route.params.id;

       /* watch(
        () => route.params.id,
        async newId => {
            window.location.reload()
        },
        () => { 
            id.value = route.params.id; 
        }
        )
        */

        return { id };
    },
    components:{
      FriendList: FriendList,
      Requests: Requests
    },
    data() {
      return {
        friends: [],
        requests : [],
        showFriends : true,
        show : false,
        logedUser: true
      };
    },
    created(){
      //this.getUserFriends(this.id);
        this.getData(this.id)

      //this.getFriendsRequests()
    },
    methods: {

        async getFriendsByID(userID){
          return ApiCalls.getFriendsByID(userID).then((friends) =>{
            return friends
          })
        },

        async getFriendsRequestsByID(){
          return ApiCalls.showFriendsRequests().then((output) =>{
            return output
          });
        },

        async getData(userID){
            return await this.getFriendsByID(userID).then((user) =>{
                 
                 return this.getFriendsRequestsByID(userID).then(request =>{
                     this.friends = user;
                     this.requests = request;
                     this.show = true;

                     if (userID != localStorage.getItem("loggedUser")){
                        this.logedUser = false;
                     }


                     return
                 });
            });
        },

        showfriends(show){
            this.showFriends = show;
        },

        goToProfileR(userID){
            router.push({name: 'user', params: { id: userID }});
        },

        goBack(){
            router.push({name: 'user', params: { id: this.id }});
        }
    },

}
</script>



<template>

    <div v-if="logedUser">
        <article class="centered_vertical">
        <div class="flex_row_wrap">
            <img class="icon" v-on:click.prevent="goBack" src="../../assets/images/icons/return.png" alt="Pagina anterior">
            <h2 v-on:click="showfriends(true)">Amigos( {{ friends.length }} )</h2>
            <div class="centered_horitzontal">
            <h2 v-on:click="showfriends(false)">Solicitudes</h2>
            <ellipse>{{requests.length}}</ellipse>
            </div>
        </div>
        </article>
    </div>
    <div v-else>
        <article class="centered_vertical" id="cv">
            <div class="flex_row_wrap" id="f">
                <img class="icon" v-on:click.prevent="goBack" src="../../assets/images/icons/return.png" alt="Pagina anterior">
                <h2>Amigos( {{ friends.length }} )</h2>
            </div>
            </article>
        <FriendsList :friends = "this.friends"></FriendsList>
    </div>

    <FriendList v-if="showFriends" :friends = "this.friends" @goToProfileR="goToProfileR($event)"></FriendList>
    <Requests v-else :requests = "this.requests"></Requests>

</template>


<style scoped>

    .flex_row_wrap{
        width: 90%;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin-top: 20px;
    }

    .centered_vertical{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .centered_horitzontal{
        align-items:center;
    }

    .column{
        align-items: center;
    }

    .column .flex_row_wrap{
        margin-top: 0px;
        width: 90%;
        justify-items:center;
        align-items: stretch;
        justify-content: left;
    }
    .searchbar{
        background: rgba(0, 0, 0, 0.07);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        padding: 15px; 
        margin-bottom: 5px;
        border-style: none;
        outline: none;        
    }
    .profile_pic_message{
        margin-right: -20px;
    }

    .profile_pic_message img{
        width: 61px;
        height: 61px;
        object-fit: cover;
        object-position: 100% 0;
        border-radius: 50%;
    }

    hr{
        width: 90vw;
    }

    .column hr{
        width: 100vw;
        margin-top: 4px;
        background-color: rgba(0, 0, 0, 0.25);
        border: none;
        height: 1px;
       /* border: 0.1px solid rgba(0, 0, 0, 0.25);*/
    }

    ellipse{
        padding-top: 3px;
        padding-right: 7px;
        padding-bottom: 3px;
        padding-left: 7px;
        border-radius: 50%;
        background: #E26ABA;
        margin-left: 5px;
        
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 12px;
        color: #FFFFFF;
    }

    h2 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    h4{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 15px;
        margin: 0px;
        margin-left: 35px;
    }

    h5{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        color: rgba(0, 0, 0, 0.66);
        margin: 0px;
        margin-left: 35px;

    }

    
@media (min-width: 768px) {
    

    .flex_row_wrap{
        width: 50%;
    }

    .column .flex_row_wrap{
        width: 50vw;
        /*justify-content: center;*/
    }
    .searchbar{    
        width: 30%;  
    }
    hr{
        width: 60vw;
    }

    .column hr{
        width: 55vw;
    }

    h2 {
        font-size: 26px;
    }

    h4{
        font-size: 18px;
    }

    h5{
        font-size: 15px;
    }
}

</style>
