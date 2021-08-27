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
            
            
            const queryOptions = {}
            // if(req.query.filter) queryOptions['filter'] = req.query.filter
            if(req.query.order)  queryOptions['order'] = req.query.order
                
            const posts = await PostRepository.getAll(queryOptions)

            
           
          
            return res.status(200).json(addMetaData(req,res,posts))
            
        } catch (error) {
            console.log(error)
            return res.status(404).json(error)
        }
    }

    async getUserPosts(req , res){
        try {
            
            const {id} = req.params
            const {userId} = req.user

            if(id){
               
                const post = await PostRepository.getBy({id , author:userId})
                //when not author tries to access specific post
        
                if(!post.id){
                    return res.status(400).json('Forbidden')
                }
             
                return res.status(200).json(addMetaData(req,res,post))
            }else{
                const posts = await PostRepository.getBy({author:userId})
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
            const {userId} = req.user
            if(req.file){
                
                const postImage = `${process.env.API_URL}${process.env.PUBLIC_POSTS_STATIC}${req.file.filename}`
                const date = new Date()
                const publicationDate = date.toISOString()
                const post = await PostRepository.create({...data ,author:userId, postImage , publicationDate})
                return res.status(201).json(post)

            }else{

                const date = new Date()
                const publicationDate = date.toISOString()
                const post = await PostRepository.create({...data,author:userId  , publicationDate})
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
            const {userId} = req.user
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

    async testImageUpload(req,res,next){
        try {
            console.log(req.file)
            console.log(req.body)
            return res.send('hi')
        } catch (error) {
            return res.status(400).json(error)
        }
    }

}

module.exports = new PostController()