const UserService = require('../services/UserService')

class AuthController {

    async login(req, res){
        try {
            const {email , password} = req.body
            const userData = await UserService.login(email,password)
            res.cookie('refreshToken' , userData.refreshToken , {maxAge:30*24*60*60*1000 , httpOnly:true , domain: 'localhost', path: '/'})
            res.cookie('test' , 'test')
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
            res.cookie('refreshToken' , userData.refreshToken , {maxAge: 30 * 24 * 60 * 60 * 1000 , httpOnly:true , domain: 'localhost', path: '/'})
            return res.status(200).json(userData)
        } catch (error) {
            console.log(error)
            return res.status(400).json({error : error.message})
        }
    }
    //may be is not neccessary
    async logout(req, res){
        try {
            
            const {refreshToken} = req.cookies
            await UserService.logout(refreshToken)
            return res.clearCookie('refreshToken' , {domain: 'localhost', path: '/'}).send()


            // return res.status(200)
        } catch (error) {
            return res.status(400).json({error : error.message})
        }
    }

    //experimental
    async tokenResolve(req,res){
        try {
            const {token} = req.body
            if(!token) throw new Error('No token provided')
            const userData = await UserService.tokenResolve(token)
            delete userData['password']
            return res.status(200).json(userData)
        } catch (error) {
            return res.status(400).json({error : error.message})
        }
     
    }

    async refresh(req,res){
        try {
            const {refreshToken} = req.cookies
            const userData = await UserService.refresh(refreshToken)
            res.cookie('refreshToken' , userData.refreshToken , {maxAge: 30 * 24 * 60 * 60 * 1000 , httpOnly:true})
            return res.status(201).json(userData)
        } catch (error) {
            console.log(error)
            return res.status(401).json({error:error})
        }
    }



}

module.exports = new AuthController()