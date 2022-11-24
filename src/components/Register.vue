<script>
import { stringifyStyle } from "@vue/shared";
export default{
    data() {
        return {
        }
    },
    methods: {

        async fetchPostUser(url = '', data = {}){
           
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            return response;
        },

        registerUser() {
            
            let name = document.getElementsByClassName("sign_in_input")[0].value;
            let lastName = document.getElementsByClassName("sign_in_input")[1].value;
            let email = document.getElementsByClassName("sign_in_input")[3].value;
            let password = document.getElementsByClassName("sign_in_input")[4].value;
            let image = "src\assets\images\profilepic.jpg"

            const user = {name:name, last_name:lastName, email:email, password:password, image:image}
            console.log(user)
            
            this.fetchPostUser('http://puigmal.salle.url.edu/api/v2/users', user)
            .then((response) =>{
                console.log(response);
            });
        }
    }
}

</script>

<template>
    <div class="background">
        <div class="Sign_in_box">
            <h1>Register</h1>
            <!--<div class="register_box"> -->  
                <input class="sign_in_input" type="text" placeholder="Name" name="Name">
                <input class="sign_in_input" type="text" placeholder="Last Name" name="Last Name">
                <input class="sign_in_input" type="date" placeholder="Date of Birth" name="Date of Birth">
                <input class="sign_in_input" type="text" placeholder="Email" name="Email">
                <input class="sign_in_input" type="password" placeholder="Password" name="Password">
                <input class="sign_in_input" type="password" placeholder="Confirm password" name="Confirm password">
                <router-link to="/register_profile_picture" class="sign_in_button" v-on:click="registerUser()"><p>Register</p></router-link>
        </div>
    </div>
</template>

<style>
.header{
  background-color: #00adbdf6
}
</style>