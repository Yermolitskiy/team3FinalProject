const router = require('express').Router()
const PostController = require('../controllers/PostController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/:id?' , PostController.getPost)
router.get('/userPosts', authMiddleware , PostController.getUserPosts)
router.post('/' , PostController.createPost)

router.route('/:id')
    .put(PostController.updatePost)
    .delete(PostController.removePost)




module.exports = router