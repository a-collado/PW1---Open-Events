<template>
    <div class="background">
        <div class="Sign_in_box">
            <h1>Sign In</h1>
            <input class="sign_in_input" type="text" placeholder="Username">
            <input class="sign_in_input" type="password" placeholder="Password">
            <button class="sign_in_button">
                <p>Login</p>
            </button>
            <div class="register_here">
                <p>Not Registered?</p>
                <router-link to="/" id="button">Register here</router-link>
            </div>
        </div>
    </div>
</template>