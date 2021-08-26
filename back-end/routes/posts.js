const router = require('express').Router()
const PostController = require('../controllers/PostController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/userPosts/:id?', authMiddleware , PostController.getUserPosts)
router.get('/:id?' , PostController.getPost)
router.post('/' , authMiddleware , PostController.createPost)

router.put('/:id',authMiddleware ,PostController.updatePost)
router.delete('/userPosts/:id',authMiddleware,PostController.removePost)




module.exports = router