const MySQLStorage = require('../storages/MySQL/')
const PostModel = require('../models/Post')

class PostRepository {

    storage = new MySQLStorage({table:'posts'})


    async getBy(criteria){
        const postData = await this.storage.findBy(criteria)
        return new PostModel(postData)
    }
    async getAll(queryOptions){
        const postsData = await this.storage.findAll(queryOptions)
        return postsData.map(data => new PostModel(data))
    }
    
    async create(data){
        try {
            const createdId = await this.storage.create(data)

            if(!createdId) throw new Error('Error creating new post')

            const post = await this.storage.findBy({id:createdId})
            return new PostModel(post)
        } catch (error) {
            throw new Error('Error creating new post')
        }
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