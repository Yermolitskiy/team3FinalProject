const UserService = require('../services/UserService')

class AuthController {

    async login(req, res){
        try {
            const {email , password} = req.body
            const userData = await UserService.login(email,password)
            return res.status(200).json(userData)
        } catch (error) {
            console.log(error)
            return res.status(400).json({error : error.message})
        }
    }
    async register(req, res){
        try {
            //req.body = {email , name , surname , age , password}
            const userData = await UserService.register(req.body)
            return res.status(200).json(userData)
        } catch (error) {
            console.log(error)
            return res.status(400).json({error : error.message})
        }
    }
    //may be is not neccessary
    async logout(req, res){
        try {
            await UserService.logout(access)
            return res.status(200).json(token)
        } catch (error) {
            
        }
    }

    //experimental
    async tokenResolve(req,res){
        const {token} = req.body
        if(!token) throw new Error('No token provided')
        const userData = await UserService.tokenResolve(token)
        delete userData['password']
        return res.status(200).json(userData)
    }

}

module.exports = new AuthController()