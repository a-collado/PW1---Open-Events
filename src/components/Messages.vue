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
        <article class="flex_row_wrap">     <!-- Persona -->
            <div class="profile_pic_message">
                <img class="small_profilePic" src="../assets/images/profilepic.webp" alt="Foto de perfil">
                <ellipse class="green"></ellipse>
            </div>
            <div class="centered_vertical">
                <h4>John Turturro</h4>
                <div>
                    <img class = "message_icon" src="../assets/images/icons/read_g.png" align="left" />
                    <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Nullam su.</p>
                </div>
            </div>
            <div>
                <h6>15:25</h6>
            </div>
        </article>

        <article class="flex_row_wrap">     <!-- Persona -->
            <div class="profile_pic_message">
                <img class="small_profilePic" src="../assets/images/profilepic.webp" alt="Foto de perfil">
                <ellipse class="yellow"></ellipse>
            </div>
            <div class="centered_vertical">
                <h4>Kaladin Stormblessed</h4>
                <div>
                    <p>Ut ex turpis, cursus sit amet odio 
                    elementum.</p>
                </div>
            </div>
            <div>
                <h6>15:25</h6>
                <ellipse>1</ellipse>
            </div>
        </article>

        <article class="flex_row_wrap">     <!-- Persona -->
            <div class="profile_pic_message">
                <img class="small_profilePic" src="../assets/images/profilepic.webp" alt="Foto de perfil">
                <ellipse class="green"></ellipse>
            </div>
            <div class="centered_vertical">
                <h4>Kiriona</h4>
                <div>
                    <p class="writing">Escribiendo...</p>
                </div>
            </div>
            <div>
            </div>
        </article>

        <article class="flex_row_wrap">     <!-- Persona -->
            <div class="profile_pic_message">
                <img class="small_profilePic" src="../assets/images/profilepic.webp" alt="Foto de perfil">
                <ellipse class="red"></ellipse>
            </div>
            <div class="centered_vertical">
                <h4>Nona</h4>
                <div>
                    <img class = "message_icon" src="../assets/images/icons/check_g.png" align="left" />
                    <p>Maecenas tincidunt laoreet leo.</p>
                </div>
            </div>
            <div>
                <h6>ayer</h6>
            </div>
        </article>

        <article class="flex_row_wrap">     <!-- Persona -->
            <div class="profile_pic_message">
                <img class="small_profilePic" src="../assets/images/profilepic.webp" alt="Foto de perfil">
                <ellipse></ellipse>
            </div>
            <div class="centered_vertical">
                <h4>Maya Hawke</h4>
                <div>
                    <p>Nam in tincidunt dolor. Fusce non 
                    rhoncus ligula. Proin gravida ex a nisi...</p>
                </div>
            </div>
            <div>
                <h6>+48h</h6>
                <ellipse>3</ellipse>
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

    .column .flex_row_wrap{
        margin-top: 15px;
        width: 90%;
        justify-items:center;
        align-items: stretch;
    }

    .centered_vertical{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .flex_row_wrap .centered_vertical{
        align-items:flex-start;
        width: 80%;
    }

    .column{
        align-items: center;
    }

    .profile_pic_message{
        margin-right: -20px;
    }

    .searchbar{
        background: rgba(0, 0, 0, 0.07);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        padding: 15px; 
        margin-bottom: 5px;
        border-style: none;
        outline: none;        
    }

    .message_icon{
        width: 18px;
        height: 18px;
        margin-right: 15px;
        margin-left: 15px;
    }

    ellipse{
        padding-top: 3px;
        padding-right: 7px;
        padding-bottom: 3px;
        padding-left: 7px;
        border-radius: 50%;
        background: #E26ABA;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 12px;
        color: #FFFFFF;
    }

    .profile_pic_message ellipse{
        position: relative;
        padding-top: 4px;
        padding-right: 10px;
        padding-bottom: 4px;
        padding-left: 10px;
        top: -8px;
        left: -20px;
        background: #ABABAB;
        border: 2px solid #ffffff;
        z-index: 1;
    }

    .profile_pic_message ellipse.red{
        background: #FF265A;
    }

    .profile_pic_message ellipse.green{
        background: #75D073;
    }

    .profile_pic_message ellipse.yellow{
        background: #D5D916;
    }

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
        font-size: 15px;
        line-height: 15px;
        margin: 0px;
        margin-left: 10px;
    }

    h6{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: -0.1em;
        color: #ABABAB;
        margin: 0px;
    }

    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        color: rgba(0, 0, 0, 0.33);
        margin: 0px;
        width: 90%;
        line-height: 1.5;
        margin-left: 20px;
    }

    p.writing{
        font-weight: 600;
        color: #E26ABA;
    }


    @media (min-width: 768px) {
        .column{
            width: 60vw;
            margin-left: 20vw;
        }

        .flex_row_wrap{
            width: 50vw;
            
        }

        .centered_vertical{
            margin-top: 10px;
            justify-content: flex-start;
            align-items: center;
        }

        .message_icon{
            margin-top: 5px;
        }

        .profile_pic_message{
            margin-right: -5vw;
        }

        p {
            margin-top: 5px;
            width: 100%;
        }
    }


</style>