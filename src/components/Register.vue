<template>
    <div class="background">
        <div class="Sign_in_box">
            <h1>Sign Up</h1>
            <input class="sign_in_input" type="text" placeholder="Username">
            <input class="sign_in_input" type="password" placeholder="Password">
            <router-link to="/" class="sign_in_button"><p>Login</p></router-link>
            <div class="register_here">
                <p>Not Registered?</p>
                <router-link to="/r" id="button">Register here</router-link>
            </div>
        </div>
    </div>
</template>