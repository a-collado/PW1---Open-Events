export default class ApiCalls{

    constructor(){
        const CORRECT = 201;
    }

    setup(){
        const defaultImageURL = new URL('../images/default_registered_profilePic.jpg', import.meta.url)

        return { defaultImageURL };
    }

    static getCORRECT(){
        return this.CORRECT;
    }

    //----------------------------------------FETCHES-------------------------------------------------------
    static async fetchPost(url = '', data = {}){
           
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        return response;
    }

    static async fetchPostBearerToken(url = '', data = {}){
           
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                      'Authorization': "Bearer "+ window.localStorage.getItem("accessToken")},
            body: JSON.stringify(data)
        });
        return response;
    }

    static async fetchPostBearerTokenUrl(url = ''){
           
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                      'Authorization': "Bearer "+ window.localStorage.getItem("accessToken")}
        });
        return response;
    }

    static async fetchGetBearerToken(url = ''){
           
        const response = await fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
                      'Authorization': "Bearer "+ window.localStorage.getItem("accessToken")}
        });
        return response;
    }

    static async fetchPutBearerTokenUrl(url = ''){
           
        const response = await fetch(url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json',
                      'Authorization': "Bearer "+ window.localStorage.getItem("accessToken")}
        });
        return response;
    }

    
    static async fetchPutBearerToken(url = '', data = {}){
           
        const response = await fetch(url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json',
                      'Authorization': "Bearer "+ window.localStorage.getItem("accessToken")},
            body: JSON.stringify(data)
        });
        return response;
    }

    static async fetchDeleteBearerTokenUrl(url = ''){
           
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json',
                      'Authorization': "Bearer "+ window.localStorage.getItem("accessToken")}
        });
        return response;
    }


    //----------------------------------POST USERS (LOGIN-REGISTER)---------------------------------------------------
    static async registerUser(name, lastName, email, password) {
    
        const imageUrl = new URL('../assets/images/default_registered_profilePic.jpg', import.meta.url);

        const user = {name:name, last_name:lastName, email:email, password:password, image:imageUrl};

        return this.fetchPost('http://puigmal.salle.url.edu/api/v2/users', user)
        .then((response) =>{    
            if(response.ok == true) return this.CORRECT;
            return response.json();
        }).then((body) =>{
            //si ??s correcte, indiquem que ha llegit correctament
            if(body == this.CORRECT) return this.CORRECT;

            //Si no ??s correcte, comprovem si ha hagut error en SQL o en que no compleix els requeriments
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

    static async loginUser(email, password) {
        const user = {email:email, password:password};

        return this.fetchPost('http://puigmal.salle.url.edu/api/v2/users/login', user)
        .then(response => response.json())
        .then((body) =>{
            //console.log(this.CORRECT); //! OJO, QUE SURT QUE ??S UNDEFINED - CAL MIRAR 
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

    static hasLoggedIn(){
        if (typeof window.localStorage.getItem("accessToken") === 'undefined' || window.localStorage.getItem("accessToken") == "")
            return false;
        
        return true;  
    }

    //----------------------------------GET USERS (INFO USERS)---------------------------------------------------

    //INFO LOGGED USER_______________________________________________
    static async getInfoLoggedUser(){
        return this.fetchGetBearerToken('http://puigmal.salle.url.edu/api/v2/users/' + window.localStorage.getItem("loggedUser"))
        .then((response) =>{ 
            return response.json();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    static getUrlImgLoggedUser(){
        return this.getInfoLoggedUser().then((user)=>{ 
            return user[0].image});
    }

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

    static async getAllUsers() {

        return this.fetchGetBearerToken('http://puigmal.salle.url.edu/api/v2/users')
        .then((response) =>{
            console.log(response);
            return response.json();
        })
        .then((body) =>{  
            console.log(body);          
            return body;

        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

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

    static async deleteUser(){
        return this.fetchDeleteBearerTokenUrl("http://puigmal.salle.url.edu/api/v2/users/")
        .then((response) =>{ 
            return response;});
    }

    static async getUserStatistics(id_user){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + id_user + "/statistics")
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });

    }

    //----------------------------------GET USERS EVENTS (CREATED, ASSISTANT)---------------------------------------------------

    static async getUserCreatedEvents(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + localStorage.getItem("loggedUser") + "/events")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    static async getUserAssistanceEvents(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + localStorage.getItem("loggedUser") + "/assistances")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    //---------------------------------USER MANAGE ASSISTANCE EVENTS------------------------------------------------------------

    static async createUserAssistanceEvent (event_id) {
        return this.fetchPostBearerTokenUrl("http://puigmal.salle.url.edu/api/v2/events/" + event_id + "/assistances")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    static async editUserAssistanceEvent(event_id, newPuntuation, newComment){
        const event = {puntuation:newPuntuation, comentary:newComment};
        
        return this.fetchPutBearerToken("http://puigmal.salle.url.edu/api/v2/events/" + event_id + "/assistances", event)
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    static async deleteUserAssistanceEvent (event_id) {
        return this.fetchDeleteBearerTokenUrl("http://puigmal.salle.url.edu/api/v2/events/" + event_id + "/assistances")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

  

    static async getAllEventsFromUser(){ return null;}

    static async getAllUsersEvents(){
        return null;
    }

    static async deleteUser(){
        return this.fetchDeleteBearerTokenUrl("http://puigmal.salle.url.edu/api/v2/users/")
        .then((response) =>{ 
            return response;});
    }
    
    static async getFriendsEvents(){
        let futureFriendsEvents = [];
        //Get friends
        //let friends = [];
        //friends = await this.getFriends();
        //Get  Events from friends

        return this.getFriends().then((friends) => {

            friends.forEach(async friend => {
                futureFriendsEvents.push(...await this.getUserIdFutureEvents(friend.id));
            });
  
            console.log(futureFriendsEvents);
            return futureFriendsEvents;

        })
        
        
        

    }

    static getUserIdFutureEvents(id) {
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + id + "/events/future")
        .then((response) =>{ return response.json();});
    }

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
    static async getFriends(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/friends")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    static async getUserFriends(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + localStorage.getItem("loggedUser") + "/friends")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    static async getFriendsByID(userID){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + userID + "/friends")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    static async showFriendsRequests(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2//friends/requests")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    //----------------------------------POST USERS FRIENDS (SEND FRIEND REQUESTS)---------------------------------------------------
    static async sendFriendRequest(id){
        
        return this.fetchPostBearerTokenUrl("http://puigmal.salle.url.edu/api/v2/friends/" + id)
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    static async AcceptFriendRequest(id){
        
        return this.fetchPutBearerTokenUrl("http://puigmal.salle.url.edu/api/v2/friends/" + id)
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    static async rejectFriendRequest(id){
        
        return this.fetchDeleteBearerTokenUrl("http://puigmal.salle.url.edu/api/v2/friends/" + id)
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

     //----------------------------------MANAGE EVENTS (CREATE, EDIT, DELETE)---------------------------------------------------
     static async createEvent(imgEvent_URL, eventName, eventDescription, eventMaxAssistents, initialDateTime, finalDateTime, eventAdress, /*eventLatitude, eventAltitud,*/ eventType){

        const event = {name:eventName, image:imgEvent_URL, location:eventAdress, description:eventDescription, latitude:"0", longitude:"0", eventStart_date:initialDateTime, eventEnd_date:finalDateTime, n_participators:eventMaxAssistents, type:eventType};
        console.log(event);
        return this.fetchPostBearerToken("http://puigmal.salle.url.edu/api/v2/events", event)
        .then((response) =>{ 
            console.log(response);
            if(response.ok == true) return this.CORRECT;
            return response.json();})
        .then((body) =>{
            console.log(body);
            if(body == this.CORRECT) return this.CORRECT;
            if (typeof body.Error === 'undefined') return body.details[0].message;
            return "An error has occurred, try again"
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        

    }
    
    static async EditEvent(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + localStorage.getItem("loggedUser") + "/friends")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    static async DeleteEvent(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + localStorage.getItem("loggedUser") + "/friends")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    static async GetEvent(id) {
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/events/" + id)
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    static async sortByRating() {
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/events/best")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    static async GetAllEvents() {
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/events/")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    static async getCreatedEventsFromUser(id){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + id + "/events")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });

    }

    static async getAssitedEventsFromUser(id){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + id + "/assistances")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    static async getAssistancesFromEvent(id){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/events/" + id + "/assistances")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    //----------------------------------MANAGE MEsSAGES -----------------------------------------------------------------------------------

    static async getMessageUsers() {
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/messages/users")
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    static async sendMessage(id, content) {

        const message = {content:content, user_id_send:localStorage.getItem("loggedUser"), user_id_recived:id};

        return this.fetchPostBearerToken("http://puigmal.salle.url.edu/api/v2/messages/", message)
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    static async getMessages(id) {
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/messages/" + id)
        .then((response) =>{ return response.json();})
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    
}
