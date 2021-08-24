const MySQLStorage = require('../storages/MySQL/')
const PostModel = require('../models/Post')

class PostRepository {

    storage = new MySQLStorage({table:'posts'})


    async getBy(criteria){
        const postData = await this.storage.findBy(criteria)
        return new PostModel(postData)
    }
    async getAll(){
        const postsData = await this.storage.findAll()
        return postsData.map(data => new PostModel(data))
    }
    
    async create(data){
        await this.storage.create(data)
        return new PostModel(data)
    }
    async update(id , data){
        await this.storage.update({id , data})
        return new PostModel(data)
    }
    async removeById(id){
        await this.storage.delete(id)
    }


}

module.exports = new PostRepository()