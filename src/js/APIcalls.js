export default class UserManagement{


    constructor(){
        const CORRECT = 201;
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
    
        let image = "src\assets\images\profilepic.jpg"

        const user = {name:name, last_name:lastName, email:email, password:password, image:image};

        return this.fetchPostUser('http://puigmal.salle.url.edu/api/v2/users', user)
        .then((response) =>{
            console.log(response)
    
            if(response.ok == true) return this.CORRECT;
            return response.json();
        }).then((body) =>{
            if(body == this.CORRECT) return true;
            var output = body.stackTrace.details[0].message;
            console.log(output);
            return output;
        })
    }

    loginUser(name, email) {
        const user = {email:this.email, password:this.password};

        this.fetchPostUser('http://puigmal.salle.url.edu/api/v2/users/login', user)
        .then((response) =>{
            return response.json();
        }).then((body) =>{
            console.log(body);
            return body;
        });
    }

}