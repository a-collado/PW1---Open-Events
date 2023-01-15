<script>
import ApiCalls from "../../js/APIcalls.js"

//TODO: Hay que hacer que se actualicen las request cuando aceptas o rechazas una
export default{
    props: {
        requests: Array
    },
    data() {
      return {}
    },
    methods: {

        acceptFriendRequest(id){
          ApiCalls.AcceptFriendRequest(id).then((output) =>{
            this.$router.go()
          });
        },
        rejectFriendRequest(id){
          ApiCalls.rejectFriendRequest(id).then((output) =>{
            this.$router.go()
          });      
        },
        setAltImg(event) { 
          event.target.src = import.meta.env.VITE_DEFAULT_PROFILE_PIC;
        } 
    },

}
</script>

<template>
<main>
    <hr>
    <div class="column">
    <ul>
        <li v-for="request in requests" :key="request.id">
            <hr>
            <article class="flex_row_wrap">     <!-- Persona --> 
                <div class="profile_pic_message">
                    <img :src="request.image" alt="Foto de perfil">
                </div>
                <div class="centered_vertical">
                    <h4>{{request.name + " " + request.last_name}}</h4>
                    <h5>{{request.email}}</h5>
                </div>
                <div class="centered_horitzontal">
                    <button v-on:click="acceptFriendRequest(request.id)">Confirmar</button>
                    <button class="delete" v-on:click="rejectFriendRequest(request.id)">Eliminar</button>
                </div>
            </article>
            <hr>
        </li>
        
    </ul>
    </div>
</main>


</template>


<style scoped>

    .flex_row_wrap{
        width: 90%;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin-top: 10px;
    }

    .flex_row_wrap.sub{
        width: 75%;
    }

    .centered_vertical{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .centered_horitzontal{
        align-items:center;
        margin-left: 10px;
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

    button{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        margin: 2px;
        color: #FFFFFF;
        background: #C772BA;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    }

    button.delete{
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        color: #000000;
        box-shadow: none;
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

    h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
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

    .flex_row_wrap.sub{
        width: 45vw;
    }

    .column .flex_row_wrap{
        width: 70%;
        /*justify-content: center;*/
    }
    .searchbar{    
        width: 30%;  
    }
    hr{
        width: 70vw;
    }

    .column hr{
        width: 75vw;
    }

    .column .flex_row_wrap .centered_horitzontal{
        margin-left: 40vw;
    }

    button{
        padding: 8px;
        font-size: 20px;
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
