
const {hash , compare} = require('bcrypt')
const UserRepository = require('../repositories/UserRepository')
const UserModel = require('../models/User')
const TokenService = require('../services/TokenService')

class UserService{


    async mapTokenToUser(user){
      const tokens = TokenService.generateTokens({...user})
      await TokenService.saveToken(user.id , tokens.refreshToken)
      return { ...tokens , user}
    }




    async register(data){
      //register logic implementation and assign access token
      try {
        
        const email = data.email
        const candidate = await UserRepository.find({email})
        
        //email is in use case
        if(candidate) throw new Error(`User with ${email} email already exists`)
        const hashedPassword = await hash(data.password , 5)
        await UserRepository.create({...data , password:hashedPassword})
        let user = await UserRepository.find({email})
        return await this.mapTokenToUser(new UserModel(user))
      } catch (error) {
          console.log(error)        
      }


    }

    async login(email , password){
      try {
        
        let user = await UserRepository.find({email})
        if(!user) throw new Error(`User with email ${email} is not found`)
        const validPassword = await compare(password , user.password)
        if(!validPassword) throw new Error('Incorrect password')
  
        return await this.mapTokenToUser(new UserModel(user))
      } catch (error) {
        console.log(error)
      }
   
     
    }

    async refresh(refreshToken){

      try {
        if(!refreshToken) throw new Error('Unauthorized error ')
        const userData = TokenService.validateRefereshToken(refreshToken)
        const tokenFromDb = await TokenService.findToken(refreshToken)
        if(!userData || !tokenFromDb) throw new Error('Unauthorized error ')
        const user = await UserRepository.find({id:userData.id})
        return await this.mapTokenToUser(new UserModel(user))
        
      } catch (error) {
        console.log(error)
      }

    }


    async tokenResolve(token){
      try {
        
        const validatedToken = TokenService.validateAccessToken(token)
        if(!validatedToken) throw new Error('Invalid token')
        const userData = await UserRepository.find({id:validatedToken.userId})
        return userData
      } catch (error) {
        console.log(error)
      }
    }


    async logout(refreshToken){
      try {
        await TokenService.removeToken(refreshToken)
      } catch (error) {
        console.log(error)
      }
    }
 

}

module.exports = new UserService()