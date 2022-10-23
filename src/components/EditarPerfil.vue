<template>
    
    <div class="centered_width">

        <img class="profilePic" src="../assets/images/profilepic.webp" alt="Avatar"> 

    </div>

</template>

<style scoped>

    div.centered_width{
        width: 95%;
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }

    .profilePic{
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border-style: solid;
    border-color: white;
    border-width: 1.5px;
    object-fit: cover;
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.7))
    }

</style>