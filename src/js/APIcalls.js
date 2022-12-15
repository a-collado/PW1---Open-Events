export default class ApiCalls{

    constructor(){
        const CORRECT = 201;
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

        console.log(window.localStorage.getItem("accessToken"));
           
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


    //----------------------------------POST USERS (LOGIN-REGISTER)---------------------------------------------------
    static async registerUser(name, lastName, email, password) {
    
        let imageUrl = "src/assets/images/default_registered_profilePic.jpg";

        const user = {name:name, last_name:lastName, email:email, password:password, image:imageUrl};

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
        })
    }

    static async loginUser(email, password) {
        const user = {email:email, password:password};

        return this.fetchPost('http://puigmal.salle.url.edu/api/v2/users/login', user)
        .then(response => response.json())
        .then((body) =>{
            //console.log(this.CORRECT); //! OJO, QUE SURT QUE ÉS UNDEFINED - CAL MIRAR 
            if (typeof body.Error === 'undefined'){ 
                window.localStorage.setItem("accessToken", body.accessToken);
                //console.log(window.localStorage.getItem("accessToken"))
                return this.CORRECT;
            }
            return "The username or the password may not be correct";
           
        })
        .then((result) =>{
            
            if (result == this.correct){
                this.fetchGetBearerToken('http://puigmal.salle.url.edu/api/v2/users/search?s=' + email)
                .then(response => response.json())
                .then((user)=>{
                    //console.log(user);
                    //console.log(user[0].id);
                    window.localStorage.setItem("loggedUser", user[0].id);
                });
                return this.CORRECT;
            }else{
                return result;
            }
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
        .then((response) =>{ return response.json();});
    }

    static getUrlImgLoggedUser(){
        return getInfoLoggedUser.then((user)=>user.image);
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
        });
    }


    //----------------------------------GET USERS EVENTS (CREATED, ASSISTANT)---------------------------------------------------

    static async getUserCreatedEvents(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + localStorage.getItem("loggedUser") + "/events")
        .then((response) =>{ return response.json();});
    }

    static async getUserAssistanceEvents(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + localStorage.getItem("loggedUser") + "/assistances")
        .then((response) =>{ return response.json();});
    }

    static async getAllEventsFromUser(){ return null;}

    static async getAllUsersEvents(){
        return null;
    }

    //----------------------------------GET USERS FRIENDS (CREATED, ASSISTANT)---------------------------------------------------
    static async getFriends(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/friends")
        .then((response) =>{ return response.json();});
    }
    
    static async getUserFriends(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + localStorage.getItem("loggedUser") + "/friends")
        .then((response) =>{ return response.json();});
    }

    static async showFriendsRequests(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2//friends/requests")
        .then((response) =>{ return response.json();});
    }

    //----------------------------------POST USERS FRIENDS (SEND FRIEND REQUESTS)---------------------------------------------------
    static async sendFriendRequest(id){
        
        return this.fetchPostBearerTokenUrl("http://puigmal.salle.url.edu/api/v2/friends/" + id)
        .then((response) =>{ return response.json();});
    }
    
    static async AcceptFriendRequest(id){
        
        return this.fetchPutBearerTokenUrl("http://puigmal.salle.url.edu/api/v2/friends/" + id)
        .then((response) =>{ return response.json();});
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
        });
        

    }
    
    static async EditEvent(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + localStorage.getItem("loggedUser") + "/friends")
        .then((response) =>{ return response.json();});
    }

    static async DeleteEvent(){
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/users/" + localStorage.getItem("loggedUser") + "/friends")
        .then((response) =>{ return response.json();});
    }


    static async GetAllEvents() {
        return this.fetchGetBearerToken("http://puigmal.salle.url.edu/api/v2/events/")
        .then((response) =>{ return response.json();});
    }

}
