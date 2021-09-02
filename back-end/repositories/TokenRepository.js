
const MySQLStorage = require('../storages/MySQL/')

class TokenRepository {

    storage = new MySQLStorage({table:'tokens'})

    async getBy(criteria){
        try {
            const token = await this.storage.findBy(criteria)
            return token
            
        } catch (error) {
            console.log(error)
        }
    }

    async create(data){
        try {
            
            const createdId = await this.storage.create(data)
            if(!createdId) throw new Error('Error creating new token')
            const token = await this.storage.findBy({id:createdId})
            return token
        } catch (error) {
            console.log(error)
        }

    }

    async update(id , data){
        try {
            
            await this.storage.update({id , data})
        } catch (error) {
            console.log(error)
        }
    }

    async deleteBy(criteria){
        try {
            
            await this.storage.deleteBy(criteria)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new TokenRepository()