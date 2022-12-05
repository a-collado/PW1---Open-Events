<script>
import { stringifyStyle } from "@vue/shared";
import UserManagement from "../js/APIcalls.js";
export default{
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {

        login(){

            UserManagement.loginUser(this.email, this.password).then((output) =>{
                console.log(output);
            if(output == UserManagement.getCORRECT()) {
                window.location.replace("/");
            }else{
                document.getElementById("error_login").innerHTML = output;
                document.getElementById("error_login").style.display = "flex";
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
            <input class="sign_in_input" type="text" placeholder="Email" v-model = "email">
            <input class="sign_in_input" type="password" placeholder="Password" v-model = "password">
            <input type="submit" class="sign_in_button" v-on:click.prevent="login()" value="Login">
            <div class="register_here">
                <p>Not Registered?</p>
                <router-link to="/register" id="button">Register here</router-link>
            </div>
            <p class="Error_Input" id="error_login"></p>
        </div>
        
    </div>
</template>

<style>
.header{
  background-color: #00adbdf6
}
</style>