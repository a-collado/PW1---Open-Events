export default class UserManagement{

    constructor(){
        const CORRECT = 201;
    }

    static getCORRECT(){
        return this.CORRECT;
    }

    static async fetchPostUser(url = '', data = {}){
           
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        return response;
    }

    static async registerUser(name, lastName, email, password) {
    
        let imageUrl = "src\assets\images\profilepic.jpg"

        const user = {name:name, last_name:lastName, email:email, password:password, image:imageUrl};

        return this.fetchPostUser('http://puigmal.salle.url.edu/api/v2/users', user)
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

        return this.fetchPostUser('http://puigmal.salle.url.edu/api/v2/users/login', user)
        .then(response => response.json())
        .then((body) =>{
            console.log(this.CORRECT); //! OJO, QUE SURT QUE ÉS UNDEFINED - CAL MIRAR 
            if (typeof body.Error === 'undefined'){
                return this.CORRECT;
            }
            
            return "The username or the password may not be correct";
            
            
        }) 

        ;
    }

}