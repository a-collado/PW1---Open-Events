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
<main>
    <div class="chat">
        <div class="message received">
            <p>Ut ex turpis, cursus sit amet odio elementum.</p>
            <h4>15:25</h4>
        </div>
        <div class="message send">
            <p>Quisque elementum justo sem</p>
            <img class="icon" src="../assets/images/icons/read_g.png" alt="leido">
            <h4>16:00</h4>
        </div>
        <div class="message received">
            <p>Ut ex turpis, cursus sit amet odio elementum</p>
            <h4>15:25</h4>
        </div>
        <div class="message send">
            <p>Quisque elementum justo sem</p>
            <img class="icon" src="../assets/images/icons/check_g.png" alt="leido">
            <h4>18:20</h4>
        </div>
    </div>
</main>
<footer class="flex_row_wrap">
    <input class="searchbar" type="text" placeholder="Escribe aqui...">
    <ellipse>
        <img class="icon" src="../assets/images/icons/send.png" alt="leido">
    </ellipse>
</footer>

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

footer.flex_row_wrap{
    position: fixed;
    justify-content: space-evenly;
    padding-top: 20px;
    padding-bottom: 25px;
    padding-left: 5%;
    bottom: 0px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.03) 68.23%, rgba(0, 0, 0, 0.11) 100%);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

footer .searchbar{
    width: 30vh;
    background: rgba(0, 0, 0, 0.06);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 19px;
    outline: none;
    border: none;
}

.profile_pic_message{
    width: 61px;
    height: 61px;
    object-fit: cover;
    object-position: 100% 0;
    border-radius: 50%;
}

.chat{
    display: flex;
    flex-direction: column;
    margin: 25px;
    height: 65vw;
    overflow: auto;
}

.message{
    display: flex;
    flex-wrap: nowrap;
    width: fit-content;
    border-radius: 10px;
    margin-bottom: 10px;
}

.message.send{
    background: linear-gradient(180deg, #25585D 0%, rgba(61, 178, 190, 0.79) 0.01%, rgba(59, 225, 240, 0.48) 100%);
    align-self: flex-end;
}

.message.received{
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.0222) 100%);
    align-self: flex-start;
}

ellipse{
    padding: 8px;
    border-radius: 50%;
    background: #E26ABA;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    color: #FFFFFF;

    background: radial-gradient(50% 50% at 50% 50%, #E26ABA 0%, rgba(226, 106, 186, 0.48) 15.62%, #E26ABA 80.21%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

.icon{
    width: 35px;
    height: 35px;
}

.message .icon{
    width: 17px;
    height: 17px;
    align-self: flex-end;
    margin-bottom: 12px;
    margin-left: 10px;
    margin-right: 5px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

ellipse img.icon{
    width: 30px;
    height: 29px;
}

p{
    margin: 17px;
    margin-right: 3px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    width: 25vh;
    color: #000000;
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

.message h4{
    position: relative;
    margin: 0px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.11em;
    color: #ABABAB;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-self: flex-end;
    margin-right: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
}

.message.send h4{
    margin-left: 0px;
    color: #ffffff;
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