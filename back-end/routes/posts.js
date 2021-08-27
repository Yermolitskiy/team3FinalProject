const router = require('express').Router()
const PostController = require('../controllers/PostController')
const authMiddleware = require('../middleware/authMiddleware')
const upload = require('../utils/multer/')

router.get('/userPosts/:id?', authMiddleware , PostController.getUserPosts)
router.get('/:id?' , PostController.getPost)
router.post('/' , [authMiddleware, upload.single('postImage')] , PostController.createPost)

router.post('/test' ,PostController.testImageUpload )

router.put('/:id',authMiddleware ,PostController.updatePost)
router.delete('/userPosts/:id',authMiddleware,PostController.removePost)




module.exports = router