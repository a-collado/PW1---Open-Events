<template>

    <article class="centered_vertical">
    <div class="flex_row_wrap">
        <h2>Amigos(24)</h2>
        <div class="centered_horitzontal">
            <router-link to="/requests">
                <h2>Solicitudes</h2>
            </router-link>
            <ellipse>1</ellipse>
        </div>
    </div>
    <hr>
    <input class="searchbar" type="text" placeholder="Buscar">
</article>

<main>
    <div class="column">
        <ul>
            <li>
                <hr>
                <article class="flex_row_wrap">     <!-- Persona --> 
                    
                    <div class="profile_pic_message">
                        <img src="../assets/images/other_user.png" alt="Foto de perfil">
                    </div>
                    
                    <div class="centered_vertical">
                        <router-link to="perfilR">
                            <h4>John Turturro</h4>
                            <h5>@john_turturro</h5>
                        </router-link>
                    </div>

                </article>
                <hr>
            </li>
            <li>
                <article class="flex_row_wrap">     <!-- Persona --> 
                    <div class="profile_pic_message">
                        <img src="../assets/images/other_user.png" alt="Foto de perfil">
                    </div>

                    <div class="centered_vertical">
                        <router-link to="perfilR">
                            <h4>John Turturro</h4>
                            <h5>@john_turturro</h5>
                        </router-link>
                    </div>

                </article>
                <hr>
            </li>    
            <li>
                <article class="flex_row_wrap">     <!-- Persona --> 
                    <div class="profile_pic_message">
                        <img src="../assets/images/other_user.png" alt="Foto de perfil">
                    </div>

                    <div class="centered_vertical">
                        <router-link to="perfilR">
                            <h4>John Turturro</h4>
                            <h5>@john_turturro</h5>
                        </router-link>
                    </div>
                    
                </article>
                <hr>
            </li>
            <li>
                <article class="flex_row_wrap">     <!-- Persona --> 
                    <div class="profile_pic_message">
                        <img src="../assets/images/other_user.png" alt="Foto de perfil">
                    </div>

                    <div class="centered_vertical">
                        <router-link to="perfilR">
                            <h4>John Turturro</h4>
                            <h5>@john_turturro</h5>
                        </router-link>
                    </div>

                </article>
                <hr>
            </li>  
            <li>
                <article class="flex_row_wrap">     <!-- Persona --> 
                    <div class="profile_pic_message">
                        <img src="../assets/images/other_user.png" alt="Foto de perfil">
                    </div>

                    <div class="centered_vertical">
                        <router-link to="perfilR">
                            <h4>John Turturro</h4>
                            <h5>@john_turturro</h5>
                        </router-link>
                    </div>

                </article>
                <hr>
                
            </li>
            <li>
                <article class="flex_row_wrap">     <!-- Persona --> 
                    <div class="profile_pic_message">
                        <img src="../assets/images/other_user.png" alt="Foto de perfil">
                    </div>

                    <div class="centered_vertical">
                        <router-link to="perfilR">
                            <h4>John Turturro</h4>
                            <h5>@john_turturro</h5>
                        </router-link>
                    </div>

                </article>
                <hr>
                
            </li>
        </ul>
    </div>
</main>


</template>


<style scoped>

    .flex_row_wrap{
        width: 90%;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin-top: 20px;
    }

    .centered_vertical{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .centered_horitzontal{
        align-items:center;
    }

    .column{
        align-items: center;
    }

    .column .flex_row_wrap{
        margin-top: 0px;
        width: 90%;
        justify-items:center;
        align-items: stretch;
        justify-content: left;
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
    .profile_pic_message{
        margin-right: -20px;
    }

    .profile_pic_message img{
        width: 61px;
        height: 61px;
        object-fit: cover;
        object-position: 100% 0;
        border-radius: 50%;
    }

    hr{
        width: 90vw;
    }

    .column hr{
        width: 100vw;
        margin-top: 4px;
        background-color: rgba(0, 0, 0, 0.25);
        border: none;
        height: 1px;
       /* border: 0.1px solid rgba(0, 0, 0, 0.25);*/
    }

    ellipse{
        padding-top: 3px;
        padding-right: 7px;
        padding-bottom: 3px;
        padding-left: 7px;
        border-radius: 50%;
        background: #E26ABA;
        margin-left: 5px;
        
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 12px;
        color: #FFFFFF;
    }

    h2 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    h4{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 15px;
        margin: 0px;
        margin-left: 35px;
    }

    h5{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        color: rgba(0, 0, 0, 0.66);
        margin: 0px;
        margin-left: 35px;

    }

    
@media (min-width: 768px) {
    

    .flex_row_wrap{
        width: 50%;
    }

    .column .flex_row_wrap{
        width: 50vw;
        /*justify-content: center;*/
    }
    .searchbar{    
        width: 30%;  
    }
    hr{
        width: 60vw;
    }

    .column hr{
        width: 55vw;
    }

    h2 {
        font-size: 26px;
    }

    h4{
        font-size: 18px;
    }

    h5{
        font-size: 15px;
    }
}

</style>
