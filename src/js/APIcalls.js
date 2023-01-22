export default class ApiCalls{

    constructor(){
        const CORRECT = 201;
    }

    static getCORRECT(){
        return this.CORRECT;
    }

    //----------------------------------------FETCHES-------------------------------------------------------

    // Se envia una peticion HTML de tipo POST a la URL seleccionada y con un objeto JSON en el body
    static async fetchPost(url = '', data = {}){
           
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        return response;
    }

    // Se envia una peticion HTML de tipo POST a la URL seleccionada con un objeto JSON en el body y un token de acceso en el header
    static async fetchPostBearerToken(url = '', data = {}){
           
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                      'Authorization': "Bearer "+ window.localStorage.getItem("accessToken")},
            body: JSON.stringify(data)
        });
        return response;
    }

    // Se envia una peticion HTML de tipo POST a la URL seleccionada con un token de acceso en el header
    static async fetchPostBearerTokenUrl(url = ''){
           
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                      'Authorization': "Bearer "+ window.localStorage.getItem("accessToken")}
        });
        return response;
    }

    // Se envia una peticion HTML de tipo GET a la URL seleccionada con un token de acceso en el header
    static async fetchGetBearerToken(url = ''){
           
        const response = await fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
                      'Authorization': "Bearer "+ window.localStorage.getItem("accessToken")}
        });
        return response;
    }

    // Se envia una peticion HTML de tipo PUT a la URL seleccionada con un token de acceso en el header
    static async fetchPutBearerTokenUrl(url = ''){
           
        const response = await fetch(url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json',
                      'Authorization': "Bearer "+ window.localStorage.getItem("accessToken")}
        });
        return response;
    }

    // Se envia una peticion HTML de tipo PUT a la URL seleccionada con un objeto JSON en el body y un token de acceso en el header
    static async fetchPutBearerToken(url = '', data = {}){
           
        const response = await fetch(url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json',
                      'Authorization': "Bearer "+ window.localStorage.getItem("accessToken")},
            body: JSON.stringify(data)
        });
        return response;
    }

    // Se envia una peticion HTML de tipo DELETE a la URL seleccionada con un token de acceso en el header
    static async fetchDeleteBearerTokenUrl(url = ''){
           
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json',
                      'Authorization': "Bearer "+ window.localStorage.getItem("accessToken")}
        });
        return response;
    }


    //----------------------------------POST USERS (LOGIN-REGISTER)---------------------------------------------------

    // Se envia una petiticion de registro de usuario a la API y se devuelve si ha habido un error.
    static async registerUser(name, lastName, email, password) {
    
        const user = {name:name, last_name:lastName, email:email, password:password, image:import.meta.env.VITE_DEFAULT_PROFILE_PIC};

        return this.fetchPost('http://puigmal.salle.url.edu/api/v2/users', user)
        .then((response) =>{    
            if(response.ok == true) return this.CORRECT;
            return response.json();
        }).then((body) =>{
            //si és correcte, indiquem que ha llegit correctament
            if(body == this.CORRECT) return this.CORRECT;

            //Si no és correcte, comprovem si ha hagut error en SQL o en que no compleix els requeriments
            if (typeof body.stackTrace.details === 'undefined') { //Error Duplicate Key
                var output = "The email already exists";

            }else{ //Error dades no correctes
                var output = body.stackTrace.details[0].message;
            }

            return output;
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    // Se envia una petiticion de inicio de sesion a la API y se devuelve si ha habido un error. Guardamos la ID del usuario en la API localStorage
    static async loginUser(email, password) {
        const user = {email:email, password:password};

        return this.fetchPost('http://puigmal.salle.url.edu/api/v2/users/login', user)
        .then(response => response.json())
        .then((body) =>{
            if (typeof body.Error === 'undefined'){ 
                window.localStorage.setItem("accessToken", body.accessToken);

                return this.CORRECT;
            }
            return "The username or the password may not be correct";
        })
        .then((result) =>{
            if (result == this.correct){

                return this.fetchGetBearerToken('http://puigmal.salle.url.edu/api/v2/users/search?s=' + email)
                .then(response => response.json())
                .then((user)=>{
                                    
                    window.localStorage.setItem("loggedUser", user[0].id);
                    return this.CORRECT;
                });
                
            }else{
                return result;
            }


        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Se comprueba si hay un token de acceso guardado en la API localStorage para saber si hay un usuario con la sesion iniciada
    static hasLoggedIn(){
        if (typeof window.localStorage.getItem("accessToken") === 'undefined' || window.localStorage.getItem("accessToken") == "" || window.localStorage.getItem("accessToken") == null )
            return false;
        
        return true;  
    }

    //----------------------------------GET USERS (INFO USERS)---------------------------------------------------

    // Pedimos a la API la informacion sobre el usuario correspodiente con la id guardada en la API localStorage
    static async getInfoLoggedUser(){
        return this.fetchGetBearerToken('http://puigmal.salle.url.edu/api/v2/users/' + window.localStorage.getItem("loggedUser"))
        .then((response) =>{ 
            return response.json();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Obtenemos la URL de la imagen de perfil del usuario que esta logeado.
    static getUrlImgLoggedUser(){
        return this.getInfoLoggedUser().then((user)=>{ 
            return user[0].image});
    }

    // Pedimos a la API la informacion sobre el usuario con la ID correspondiente
    static async getInfoInfoUserByID (userID){
        return this.fetchGetBearerToken('http://puigmal.salle.url.edu/api/v2/users/' + userID)
        .then((response) =>{ 
            return response.json();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    //________________________________________________________________

    // Pedimos a la API la informacion sobre todos los usuarios registrados.
    static async getAllUsers() {

        return this.fetchGetBearerToken('http://puigmal.salle.url.edu/api/v2/users')
        .then((response) =>{
            return response.json();
        })
        .then((body) =>{  
            return body;

        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Pedimos a la API la informacion sobre los usuarios con determinado nombre
    static async searchUser(user = '') {

        const url = 'http://puigmal.salle.url.edu/api/v2/users/search' + '?s=' + user;
        return this.fetchGetBearerToken(url)
        .then((response) =>{
            return response.json();
        })
        .then((body) =>{     
            return body;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Actualizamos la informacion existente en la API sobre el usuario logeado
    static async updateUser(name, lastName, email, imageUrl) {

        const user = {name:name, last_name:lastName, email:email, image:imageUrl};
        return this.fetchPutBearerToken('http://puigmal.salle.url.edu/api/v2/users', user)
        .then((response) =>{    
            if(response.ok == true) return this.CORRECT;
            return response.json();
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    }

    // Eliminamos la informacion existente en la API sobre el usuario logeado
    static async deleteUser(){
        return this.fetchDeleteBearerTokenUrl("http://puigmal.salle.url.edu/api/v2/users/")
        .then((response) =>{ 
            return response;});
    }

    // Pedimos a la API las estadisticas del usuario con determinada ID
    static async getUserStatistics(id_user){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + id_user + "/statistics")
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });

    }

    //----------------------------------GET USERS EVENTS (CREATED, ASSISTANT)---------------------------------------------------

    // Pediamos a la API los eventos creados por el usuario logeado
    static async getUserCreatedEvents(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + localStorage.getItem("loggedUser") + "/events")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Pedimos a la API los eventos con asistencia del usuario logeado
    static async getUserAssistanceEvents(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + localStorage.getItem("loggedUser") + "/assistances")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    //---------------------------------USER MANAGE ASSISTANCE EVENTS------------------------------------------------------------

    // Creamos en la API una asistencia del usuario logeado en el evento con la id determinada
    static async createUserAssistanceEvent (event_id) {
        return this.fetchPostBearerTokenUrl("http://puigmal.salle.url.edu/api/v2/events/" + event_id + "/assistances")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Editamos la informacion existente en la API sobre la asistencia del usuario logeado al evento con la id determinada para añadir más informacion
    static async editUserAssistanceEvent(event_id, newPuntuation, newComment){
        const event = {puntuation:newPuntuation, comentary:newComment};
        
        return this.fetchPutBearerToken("http://puigmal.salle.url.edu/api/v2/events/" + event_id + "/assistances", event);
    }

    // Eliminamos la informacion existente en la API sobre la asistencia del usuario logeado al evento con la id determinada
    static async deleteUserAssistanceEvent (event_id) {
        return this.fetchDeleteBearerTokenUrl("http://puigmal.salle.url.edu/api/v2/events/" + event_id + "/assistances")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    

    // Pedimos a la API los eventos futuros de los usuarios que son amigos del usuario logeado
    static async getFriendsEvents(){
        let futureFriendsEvents = [];

        return this.getFriends().then((friends) => {

            friends.forEach(async friend => {
                futureFriendsEvents.push(...await this.getUserIdFutureEvents(friend.id));
            });
  
            return futureFriendsEvents;

        })
        
    }
    
    // Pedimos a la API los eventos futuros del usuario con la id determinada.
    static getUserIdFutureEvents(id) {
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + id + "/events/future")
        .then((response) =>{ return response.json();});
    }

    // Pedimos a la API los eventos que contengan una cierta plabra cable 
    static async searchEventsKeyword(keyword) {
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/events/search?keyword=" + keyword)
        .then((response) =>{
             return response.json();
        })
        .then((body) =>{     
            return body;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    //----------------------------------GET USERS FRIENDS (CREATED, ASSISTANT)---------------------------------------------------
    // Pedimos a la API los usuarios que son amigos del usuario logeado
    static async getFriends(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/friends")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    // Pedimos a la API los usuarios que son amigos del usuario logeado
    static async getUserFriends(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + localStorage.getItem("loggedUser") + "/friends")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Pedimos a la API los usuarios que son amigos del usuario con la ID determinada
    static async getFriendsByID(userID){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + userID + "/friends")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Pedimos a la API todas las solicitudes de amistad del usuario logeado
    static async showFriendsRequests(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2//friends/requests")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    //----------------------------------POST USERS FRIENDS (SEND FRIEND REQUESTS)---------------------------------------------------
    // Enviamos a la API una solicitud de amistad entre el usuario registrado y el usuario con la ID determinada
    static async sendFriendRequest(id){
        
        return this.fetchPostBearerTokenUrl("http://puigmal.salle.url.edu/api/v2/friends/" + id)
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    // Aceptamos la peticion de amistad del usuario con la id determinada
    static async AcceptFriendRequest(id){
        
        return this.fetchPutBearerTokenUrl("http://puigmal.salle.url.edu/api/v2/friends/" + id)
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Rechazamos la peticion de amistad del usuario con la id determinada
    static async rejectFriendRequest(id){
        
        return this.fetchDeleteBearerTokenUrl("http://puigmal.salle.url.edu/api/v2/friends/" + id)
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

     //----------------------------------MANAGE EVENTS (CREATE, EDIT, DELETE)---------------------------------------------------
     // Enviamos una peticion a la API para crear un evento con los datos correspondientes
     static async createEvent(imgEvent_URL, eventName, eventDescription, eventMaxAssistents, initialDateTime, finalDateTime, eventAdress, eventType){

        const event = {name:eventName, image:imgEvent_URL, location:eventAdress, description:eventDescription, latitude:"0", longitude:"0", eventStart_date:initialDateTime, eventEnd_date:finalDateTime, n_participators:eventMaxAssistents, type:eventType};
        return this.fetchPostBearerToken("http://puigmal.salle.url.edu/api/v2/events", event)
        .then((response) =>{ 
            if(response.ok == true) return this.CORRECT;
            return response.json();})
        .then((body) =>{
            if(body == this.CORRECT) return this.CORRECT;
            if (typeof body.Error === 'undefined') return body.details[0].message;
            return "An error has occurred, try again"
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        

    }

    // Pedimos a la API el evento con la ID determinada
    static async GetEvent(id) {
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/events/" + id)
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Pedimos a la API una lista con todos los eventos ordenados de mejor a peor puntuacion
    static async sortByRating() {
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/events/best")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Pedimos a la API una lista con todos los eventos.
    static async GetAllEvents() {
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/events/")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Pedimos a la API los eventos creados por el usuario con la ID determinada
    static async getCreatedEventsFromUser(id){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + id + "/events")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });

    }

    //  Pedimos a la API los eventos con asistencia del usuario con la ID determinada.
    static async getAssitedEventsFromUser(id){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + id + "/assistances")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Pedimos a la API todas las asistencias del evento con la ID determinada.
    static async getAssistancesFromEvent(id){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/events/" + id + "/assistances")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    //----------------------------------MANAGE MEsSAGES -----------------------------------------------------------------------------------

    // Pedimos a la API todos los usarios que tienen conversaciones con el usurario logeado
    static async getMessageUsers() {
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/messages/users")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Enviamos una peticion a la API para enviar un mensaje desde el usuario logeado al usuario con la ID determninada.
    static async sendMessage(id, content) {

        const message = {content:content, user_id_send:localStorage.getItem("loggedUser"), user_id_recived:id};

        return this.fetchPostBearerToken("http://puigmal.salle.url.edu/api/v2/messages/", message)
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Pedimos a la API todos los mensajes entre el usuario logeado y el usuario con la ID determinada
    static async getMessages(id) {
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/messages/" + id)
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    
}
