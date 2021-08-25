const router = require('express').Router()
// const { body } = require('express-validator')
const AuthController = require('../controllers/AuthController')

router.post('/login' , AuthController.login)
router.post('/register', AuthController.register)
router.post('/logout' , AuthController.logout)

//experimental
router.post('/tokenResolve' , AuthController.tokenResolve)

module.exports = router