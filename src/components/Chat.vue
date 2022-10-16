<template>

<div class="centered_horitzontal">
        <img class="icon" src="../assets/images/icons/return.png" alt="Pagina anterior">
        <img class="icon" src="../assets/images/icons/dots.png" alt="Más opciones">
    </div>
<article class="flex_row_wrap">
    <img class="profile_pic_message" src="../assets/images/profilepic.webp" alt="Foto de perfil">
    <div class="column">
        <h4>Kaladin Stormblessed</h4>
        <h5 class="yellow">Ocupado</h5>
    </div>
</article>

</template>


<style scoped>

.flex_row_wrap{
    margin-top: 0px;
    width: 90%;
    padding-right: 10%;
    padding-bottom: 10px;
    justify-items:center;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.centered_horitzontal{
    width: 95%;
    margin-left: 2.5%;
    margin-bottom: -15px;
    justify-content: space-between;
}

.profile_pic_message{
    width: 61px;
    height: 61px;
    object-fit: cover;
    object-position: 100% 0;
    border-radius: 50%;
}

.icon{
    width: 35px;
    height: 35px;
}

h4{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 15px;
    margin: 0px;
    margin-left: 12px;
}

h5{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 17px;
    margin: 0px;
    margin-top: 8px;
    margin-left: 15px;
}

h5.yellow{
    color: #D5D916;
}
h5.green{
    color: #75D073;
}

h5.red{
    color: #FF265A;
}

</style>