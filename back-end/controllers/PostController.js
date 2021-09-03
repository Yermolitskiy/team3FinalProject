const PostRepository = require('../repositories/PostRepository')
const addMetaData = require('../utils/meta/postMeta')




class PostController {


    async getPost(req, res){
    
      
        const {id} = req.params

        try {
            if(id){
             
                const post = await PostRepository.getBy({id})
                return res.status(200).json(addMetaData(req,res,post))
            }       
            const posts = await PostRepository.getAll(req.query)
            return res.status(200).json(addMetaData(req,res,posts))
            
        } catch (error) {
            console.log(error)
            return res.status(404).json(error)
        }
    }

    async getUserPosts(req , res){
        try {
            
            const {id} = req.params
            const {id:userId} = req.user

            if(id){
                const post = await PostRepository.getBy({id , author:userId})
                //when not author tries to access specific post
                if(!post.id){
                    return res.status(400).json('Forbidden')
                }
                return res.status(200).json(addMetaData(req,res,post))
            }else{
                const posts = await PostRepository.getBy({author:userId} ,req.query)
                return res.status(200).json(addMetaData(req,res,posts))
            }
       
        } catch (error) {
            console.log(error)
            return res.status(404).json(error)
        }
    }
    async createPost(req,res){
        try {
            const data = req.body
            const {id} = req.user
            console.log(req.user)
            // console.log(userId)
         
            if(req.file){
                const postImage = `${process.env.API_URL}${process.env.PUBLIC_POSTS_STATIC}${req.file.filename}`
                const post = await PostRepository.create({...data ,author:id, postImage })
                return res.status(201).json(post)

            }else{
                const post = await PostRepository.create({...data,author:id  })
                return res.status(201).json(post)
            }
            
        } catch (error) {
            console.log(error)
            return res.status(400).json({error:error.message})
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
            const {id : userId} = req.user
            const post = await PostRepository.getBy({id , author:userId})
                //when not author tries to access specific post
        
            if(!post.id){
                    return res.status(400).json('Forbidden')
                }

            await PostRepository.removeById(id)
            //responsing with only status for some reason doesn't return response
            return res.status(200).json('Successfuly deleted')
        } catch (error) {
            console.log(error)
            return res.status(404).json(error)
        }
       
    }



}

module.exports = new PostController()