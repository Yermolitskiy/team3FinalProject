// const {v4} = require('uuid')
const {hash , compare} = require('bcrypt')
const UserRepository = require('../repositories/UserRepository')
const UserModel = require('../models/User')

class UserService{

    

    async register(data){
      //register logic implementation and assign access token
    //   const userData = await UserRepository.create(data)
      return new UserModel(userData)
    }
    async login(email , password){
     // login logic implementation
    //  const userData = await UserRepository.find({email})
     //compare hashed pass with req pass
     //return userData with access token on correct password
     //throw error upwards otherwise
     
    }
    async logout(){
    //logout logic implementation
    }
 

}

module.exports = new UserService()