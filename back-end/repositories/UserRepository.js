const MySQLStorage = require('../storages/MySQL/')


class UserRepository { 

    storage = new MySQLStorage({table:'users'})

    async find(criteria){
        const userData = await this.storage.findBy(criteria)
        return userData
    }

    async getAll(){

    }

    //for profile edit
    async update(id , data){

    }
    
    async delete(){

    }
    async create(data){
        const userData = await this.storage.create(data)
        return userData
    }

}

module.exports = new UserRepository()