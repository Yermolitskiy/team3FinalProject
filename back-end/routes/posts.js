const router = require('express').Router()
const PostController = require('../controllers/PostController')

router.get('/:id?' , PostController.getPost)
router.get('/userPosts' , PostController.getUserPosts)
router.post('/' , PostController.createPost)

router.route('/:id')
    .put(PostController.updatePost)
    .delete(PostController.removePost)




module.exports = router