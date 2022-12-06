export default class UserManagement{

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

    static async fetchGetBearerToken(url = ''){

        console.log(window.localStorage.getItem("accessToken"));
           
        const response = await fetch(url, {
            method: 'GET',
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
            console.log(this.CORRECT); //! OJO, QUE SURT QUE ÉS UNDEFINED - CAL MIRAR 
            if (typeof body.Error === 'undefined'){ 
                window.localStorage.setItem("accessToken", body.accessToken);
                console.log(window.localStorage.getItem("accessToken"))
                return this.CORRECT;
            }
            
            return "The username or the password may not be correct";
            
            
        });
    }

    static hasLoggedIn(){
        if (typeof window.localStorage.getItem("accessToken") === 'undefined' || window.localStorage.getItem("accessToken") == "")
            return false;
        
        return true;  
    }

     //----------------------------------GET USERS (INFO USERS)---------------------------------------------------

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

}