const UserService = require('../services/UserService')

class AuthController {

    async login(req, res){
        try {
            const {email , password} = req.body
            const userData = await UserService.login(email,password)
            //set refresh token max age on 30 days
            // res.cookie('refreshToken' , userData.refreshToken , {maxAge: 30 * 24 * 60 * 60 * 1000 , httpOnly:true})
            return res.status(200).json(userData)
        } catch (error) {
            
        }
    }
    async register(req, res){
        try {
            const {email , password} = req.body
            const userData = await UserService.register(email,password)
            // res.cookie('refreshToken' , userData.refreshToken , {maxAge: 30 * 24 * 60 * 60 * 1000 , httpOnly:true})
            return res.status(200).json(userData)
        } catch (error) {
            
        }
    }
    async logout(req, res){
        try {
            const {refreshToken} = req.cookies;
            const token = await UserService.logout(refreshToken)
            // res.clearCookie('refreshToken')
            return res.status(200).json(token)
        } catch (error) {
            
        }
    }

}

module.exports = new AuthController()