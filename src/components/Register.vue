<script>
import { stringifyStyle } from "@vue/shared";
import UserManagement from "../js/APIcalls.js";
export default{
    data() {
        return {
            name: "",
            lastName: "",
            email: "",
            password: "",
            image: ""
        }
    },
    methods: {

        register(){
            UserManagement.registerUser(this.name, this.lastName, this.email, this.password).then((output) =>{

            if(output == UserManagement.getCORRECT()) {
                UserManagement.loginUser(this.email, this.password).then((outputLogin) =>{
                    if(outputLogin == UserManagement.getCORRECT()) {
                        window.location.replace("/");
                        return outputLogin;
                    }
                })
            }else{
                document.getElementById("error_register").innerHTML = output;
                document.getElementById("error_register").style.display = "flex";
            }
            
           } );
           
        }
    }
}

</script>

<template>
    <div class="background">
    <form>
        <div class="Sign_in_box">
            <h1>Register</h1>
            <!--<div class="register_box"> -->  
                
                <input class="sign_in_input" type="text" placeholder="Name" name="Name" v-model = "name">
                <input class="sign_in_input" type="text" placeholder="Last Name" name="Last Name" v-model = "lastName">
                <input class="sign_in_input" type="text" placeholder="Email" name="Email" v-model = "email">
                <input class="sign_in_input" type="password" placeholder="Password" name="Password" v-model = "password">
                <!--<input class="sign_in_input" type="password" placeholder="Confirm password" name="Confirm password">-->
                <input type="submit" class="sign_in_button" v-on:click.prevent="register()" value="Register">

                <div class="register_here">
                <p>Already Registered?</p>
                <router-link to="/sign_in" id="button">Login here</router-link>

            </div>
                
        </div>

        <p class="Error_Input" id="error_register"></p>
    </form>

        
    </div>
</template>

<style>
.header{
  background-color: #00adbdf6
}
</style>