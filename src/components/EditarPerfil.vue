<template>
    
    <div class="centered_column_width">

        <div id="profilePic_button">
            <button ><img class="icon" src="../assets/images/icons/editar.png"></button> 
        </div>

        <div class="generic_inputLabel">
            <label><p class="darkblue_normal_bold">Nombre</p></label>
            <input class="general_input" type="text" value="Sandra">
        </div>

        <div class="generic_inputLabel"> 
            <label><p class="darkblue_normal_bold">Apellido</p></label>
            <input class="general_input" type="text" value="Sánchez Laza">
        </div>

        <div class="generic_inputLabel">
            <label><p class="darkblue_normal_bold">Email</p></label>
            <input class="general_input" type="text" value="Sandra.sala@gmail.com">
        </div>

        <div class="generic_inputLabel">
            <label><p class="darkblue_normal_bold">Descripción</p></label>
            <textarea class="general_input" rows="10">Lorem ipsum dolor sit amet. Aut molestiae similique ab nostrum modi quo autem unde? Hic magnam officiis sed fugiat molestias consequatur voluptas. Ex voluptatibus libero ad dolorum asperiores in officiis quia est quibusdam laboriosam ex consequatur perspiciatis non culpa veniam sit obcaecati voluptatum.</textarea>
        </div>

        <div class="generic_inputLabel">
            <label><p class="darkblue_normal_bold">Imagen de fondo</p></label>
            <div id="backgroundPic_button"> 
                <button><img class="icon" src="../assets/images/icons/editar.png"></button> 
            </div>
            
        </div>

        <router-link to="/perfil" id="button"><button>Guardar</button></router-link>


    </div>

</template>

<style scoped>

    div.centered_column_width{
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
    }

    .generic_inputLabel{
        width: 80%;
        margin:10px;
    }

    .general_input{
        width:100%;
        border: 1px solid #00adbdf6;
        border-radius: 30px;
        padding: 10px;
    }

    .generic_inputLabel > label >p{
        margin-left: 10px;
        margin-bottom: 8px;
    }

    .generic_inputLabel > img{
        border-radius: 10%;
        width:108%;
        height: 150px;
        object-fit: cover;
    }

    #profilePic_button{
        background-image: url("../assets/images/profilepic.jpg");
        background-size: cover;
        width: 160px;
        height: 160px;
        border-radius: 50%;   
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;     
    }

    #backgroundPic_button{
        background-image: url("https://cnnespanol.cnn.com/wp-content/uploads/2022/08/220731233929-hyperion-tree-full-169.jpg?quality=100&strip=info");
        background-size: cover;
        border-radius: 10%;
        width:108%;
        height: 150px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;     
    }

    @media screen and (min-width: 768px) {
        .generic_inputLabel{
        width: 585px;
    }
    }


</style>