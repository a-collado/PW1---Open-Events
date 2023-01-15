<script>
import { registerRuntimeCompiler } from "vue";

export default{
    
    props: {
        friends: Array
    },
    emits: {
        goToProfileR: null,
    },
    data() {
      return {
      };
    },
    mounted() {
    },
    methods: {
        goToProfileR(id){

        this.$emit("goToProfileR", id)
        },
        setAltImg(event) { 
          event.target.src = import.meta.env.VITE_DEFAULT_PROFILE_PIC;
        } 
    },

}
</script>



<template>
    <hr>
    <main>
    <div class="column">
        <ul>
            <li v-for="friend in friends" :key="friend.id">
                <article class="flex_row_wrap">     <!-- Persona --> 
                    
                    <div class="profile_pic_message">
                        <img :src="friend.image" alt="Foto de perfil" @error="setAltImg">
                    </div>
                    
                    <div class="centered_vertical" v-on:click="goToProfileR(friend.id)">
                            <h4>{{friend.name + " " + friend.last_name}}</h4>
                            <h5>{{friend.email}}</h5>
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
