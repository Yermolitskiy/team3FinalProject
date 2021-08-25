// const {v4} = require('uuid')
const {hash , compare} = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserRepository = require('../repositories/UserRepository')
const UserModel = require('../models/User')
const validateToken = require('../utils/token/validateToken')

class UserService{

    generateToken(userId){
      return jwt.sign({userId} , process.env.JWT_ACCESS_SECRET , {expiresIn:'24h'})
    }

    async register(data){
      //register logic implementation and assign access token
      const email = data.email
      const candidate = await UserRepository.find({email})
      
      if(candidate){
        //email is in use case
        throw new Error(`User with ${email} email already exists`)
      }

      const hashedPassword = await hash(data.password , 5)

      await UserRepository.create({...data , password:hashedPassword})

      let user = await UserRepository.find({email})

      const token = this.generateToken(user.id)

      user = new UserModel(user)

      return {token , user}
    }

    async login(email , password){
   
      let user = await UserRepository.find({email})
      if(!user){
        throw new Error(`User with email ${email} is not found`)
      }
      

      const validPassword = await compare(password , user.password)
      if(!validPassword){
        throw new Error('Incorrect password')
      }

      const token = this.generateToken(user.id)
      user = new UserModel(user)

      return {token , user}
     
    }

    //experimental
    async tokenResolve(token){
        const validatedToken = validateToken(token)
        if(!validatedToken) throw new Error('Invalid token')
        const userData = await UserRepository.find({id:validatedToken.userId})
        return userData
    }


    async logout(){
    //logout logic implementation
    //Not sure if it neccessary if authentication will be done only under jwt access token implementation ,
    //perhaps just cleaning jwt from localStorage would be enough
    }
 

}

module.exports = new UserService()