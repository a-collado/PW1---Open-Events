<script>
import ApiCalls from "../../js/APIcalls.js"
import router from "../../router/index.js";

// Hay que meter esto en el /

export default{
    data() {
        return {
            user: [],                               // Informacion del usuario a editar              
            imageUrl: "",                           // Url de la imagen de perfil del usuario
            name: "",                               // Nombre del usuario
            last_name: "",                          // Apellidos del usuario
            email: "",                              // Email del usuario

            imageUrlStyle: "",                      // Estilo CSS de la imagen de perfil

            error:"",                               // Mensaje de error

            defaultProfilePic: import.meta.env.VITE_DEFAULT_PROFILE_PIC,    // Imagen de perfil predeterminada

        }
    },
    mounted(){
        this.getProfileInfo()
    },
    methods: {

        // Obtenemos toda la informacion del perfil del usuario logeado y la guardamos en variables
        getProfileInfo(){
          this.user = ApiCalls.getInfoLoggedUser().then((user) =>{
            return user[0];
          })
        .then((body) =>{  
            this.imageUrl = body.image;
            this.name = body.name;
            this.last_name = body.last_name;
            this.email = body.email;
            this.imageUrlStyle = "background-image: url(" + this.imageUrl + ")";
        });
         },

         // Actualizamos la informacion del usuario con la nueva informacion que nos ha proporcionado.
         updateProfileInfo(){
            // Habria que comprobar que esta todo bien
            ApiCalls.updateUser(this.name,  this.last_name, this.email, this.imageUrl).then((result) =>{
            if (result == ApiCalls.getCORRECT()){
                var id = localStorage.getItem("loggedUser")
                router.push({name: 'user', params: { id }});

            }
          });
         },

         // Borramos al usuario que esta logeado
         deleteUser(){
            ApiCalls.deleteUser().then( 
                router.push({name: 'Welcome'})
            );
            
         },

         // Cambiamos previsualizacion de la imagen de perfil del usuario.
         changeImage(){
            
            this.imageUrlStyle = "background-image: url(" + this.imageUrl + ")";

        },
    }
}

</script>


<template>
    
    <form>
        
        <div class="centered_column_width">
            <div id="profilePic_button" :style="imageUrlStyle">
                <button ><img class="icon" src="../../assets/images/icons/editar.png"></button> 
            </div>

            <div class="generic_inputLabel">
                <label><p class="darkblue_normal_bold">URL de la imagen de perfil</p></label>
                <input class="general_input" type="text" v-model="imageUrl" v-on:change="changeImage">
            </div>

            <div class="generic_inputLabel">
                <label><p class="darkblue_normal_bold">Nombre</p></label>
                <input class="general_input" type="text" v-model="name">
            </div>

            <div class="generic_inputLabel"> 
                <label><p class="darkblue_normal_bold">Apellido</p></label>
                <input class="general_input" type="text" v-model="last_name">
            </div>

            <div class="generic_inputLabel">
                <label><p class="darkblue_normal_bold">Email</p></label>
                <input class="general_input" type="text" v-model="email">
            </div>

            <div class="generic_inputLabel">
                <label><p class="darkblue_normal_bold">Descripción</p></label>
                <textarea class="general_input" rows="10">Lorem ipsum dolor sit amet. Aut molestiae similique ab nostrum modi quo autem unde? Hic magnam officiis sed fugiat molestias consequatur voluptas. Ex voluptatibus libero ad dolorum asperiores in officiis quia est quibusdam laboriosam ex consequatur perspiciatis non culpa veniam sit obcaecati voluptatum.</textarea>
            </div>

            <div class="generic_inputLabel">
                <label><p class="darkblue_normal_bold">Imagen de fondo</p></label>
                <div id="backgroundPic_button"> 
                    <button><img class="icon" src="../../assets/images/icons/editar.png"></button> 
                </div>
            </div>
            <br>
            <div class="generic_inputLabel">
                <div class="row_space">
                    <button class="button_pink_small" v-on:click.prevent="updateProfileInfo">Guardar</button>
                    <button class="button_purple_small" v-on:click.prevent="deleteUser">Eliminar cuenta</button>
                </div>
            </div>

        </div>
    </form>

</template>

<style scoped>

    .row_space{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .generic_inputLabel > img{
        border-radius: 10%;
        width:108%;
        height: 150px;
        object-fit: cover;
    }

    #profilePic_button{
        background-image: v-bind(defaultProfilePic);
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
        border-radius: 20px;
        width: 103%;
        height: 150px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;     
    }




</style>