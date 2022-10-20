<template>
    <div class="background">
        <div class="Sign_in_box">
            <h1>Register</h1>
            <!--<div class="register_box"> -->  
                <input class="sign_in_input" type="text" placeholder="Name">
                <input class="sign_in_input" type="text" placeholder="Last Name">
                <input class="sign_in_input" type="date" placeholder="Date of Birth">
                <input class="sign_in_input" type="text" placeholder="Email">
                <input class="sign_in_input" type="password" placeholder="Password">
                <input class="sign_in_input" type="password" placeholder="Confirm password">
                <router-link to="/register_profile_picture" class="sign_in_button"><p>Register</p></router-link>
            
        </div>
    </div>
</template>

<style>
.header{
  background-color: #00adbdf6
}
</style>