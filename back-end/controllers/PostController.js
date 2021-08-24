const PostRepository = require('../repositories/PostRepository')
class PostController {


    async getPost(req, res){
    
        const {id} = req.params
        try {
            if(id){
                const post = await PostRepository.getBy({id})
                return res.status(200).json(post)
            }
            const posts = await PostRepository.getAll()
            return res.status(200).json(posts)
            
        } catch (error) {
            console.log(error)
            return res.status(404).json(error)
        }
    }

    async getUserPosts(req , res){
        try {
            //other way is by email of user
            const {id} = req.user
            const posts = await PostRepository.getById(id)
            return res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            return res.status(404).json(error)
        }
    }

    async createPost(req,res){
        try {
            const data = req.body
            const post = await PostRepository.create(data)
            return res.status(201).json(post)
        } catch (error) {
            console.log(error)
            return res.status(404).json(error)
        }
    }

    async updatePost(req,res){
        try {
            const {id} = req.params
            const data = req.body
            const post = await PostRepository.update(id , data)
            return res.status(200).json(post)

        } catch (error) {
            console.log(error)
            return res.status(404).json(error)
        }
    }

    async removePost(req,res){
        try {
            const {id} = req.params
            // const {id} = req.body
            await PostRepository.removeById(id)
            //responsing with only status for some reason doesn't return response
            return res.status(200).send('OK')
        } catch (error) {
            console.log(error)
            return res.status(404).json(error)
        }
       
    }

}

module.exports = new PostController()