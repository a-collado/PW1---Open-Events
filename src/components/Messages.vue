<template>

<article class="centered_vertical">
    <div class="flex_row_wrap">
        <h1>Mensajes</h1>
        <img class="icon" src="../assets/images/icons/edit.png" alt="Escribir mensaje">
    </div>
    <input class="searchbar" type="text" placeholder="Buscar">
</article>

<main>
    <div class="column">
        <article class="flex_row_wrap">
            <img class="profile_pic_message" src="../assets/images/profilepic.webp" alt="Foto de perfil">
            <div class="centered_vertical">
                <h4>John Turturro</h4>
                <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Nullam su.</p>
            </div>
        </article>
    </div>
</main>
</template>


<style scoped>

    .flex_row_wrap{
        width: 83%;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    .centered_vertical{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .searchbar{
        background: rgba(0, 0, 0, 0.07);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        padding: 15px; 
        border-style: none;
        outline: none;        
    }

    .profile_pic_message{
        width: 61px;
        height: 61px;
        object-fit: cover;
        object-position: 100% 0;
        border-radius: 50%;
    }

    /*.read_msg{
       
    }*/

    h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    h4{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        margin: 0px;
    }

    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: rgba(0, 0, 0, 0.33);
        margin: 0px;
    }


</style>