class User { 


    constructor(data){
        this.id = data.id
        this.name = data.name
        this.surname = data.surname
        this.email = data.email
        // password
        this.age = data.age
    }

}

module.exports = User