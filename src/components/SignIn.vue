<script>
import { stringifyStyle } from "@vue/shared";
import ApiCalls from "../js/APIcalls.js";
export default{
    data() {
        return {
            email: "",
            password: "",

            error:"",
            displayError:"none"
        }
    },
    methods: {

        //If the user get incorrect
        shakeElement(el) {
            //el.classList.add('rotateable');
            el.style.marginLeft = '20px';

            setTimeout(function() {
                el.style.marginLeft = '-20px';
                setTimeout(function() {
                el.style.marginLeft = '0px';
                }, 100);
            }, 100);

        },

        //Try to login in the API
        login(){

            ApiCalls.loginUser(this.email, this.password).then((output) =>{
                if(output === ApiCalls.getCORRECT()) {
                    window.location.replace("/");
                }else{
                    this.error = output;
                    this.displayError="flex";
                    this.shakeElement(document.getElementsByClassName("Sign_in_box")[0]);
                }
            
           } );
           
        }

    }
}

</script>

<template>
    <div class="background">
        <div class="Sign_in_box">
            <h1>Sign In</h1>
            <input class="sign_in_input" type="text" placeholder="Email" v-model = "email" v-on:keyup.enter="login">
            <input class="sign_in_input" type="password" placeholder="Password" v-model = "password" v-on:keyup.enter="login">
            <input type="submit" class="sign_in_button" v-on:click.prevent="login()" value="Login">
            <div class="register_here">
                <p>Not Registered?</p>
                <router-link to="/register" id="button">Register here</router-link>
            </div>
            <p class="Error_Input" v-bind:style="{display:displayError}">{{error}}</p>
        </div>
        
    </div>
</template>

<style>
.header{
  background-color: #00adbdf6
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>