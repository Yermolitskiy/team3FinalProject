const {sign , verify} = require('jsonwebtoken')
const TokenRepository = require('../repositories/TokenRepository')



class TokenService {

    

    generateTokens(payload){
        const accessToken =  sign(payload , process.env.JWT_ACCESS_SECRET , {expiresIn:'24h'} )
        const refreshToken = sign(payload , process.env.JWT_REFRESH_SECRET , {expiresIn:'30d'})
        return { accessToken , refreshToken }
    }

    validateAccessToken(token){
        try {
            const userData = verify(token , process.env.JWT_ACCESS_SECRET)
            return userData
        } catch (error) {
            return false
        }
    }

    validateRefereshToken(token){
        try {
            const userData = verify(token , process.env.JWT_REFRESH_TOKEN)
            return userData
        } catch (error) {
            return false
        }
    }

    async findToken(refreshToken){
        try {
            const userData = await TokenRepository.getBy({refreshToken})
            return userData
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async saveToken(userId , refreshToken){
        try {
            const tokenData = await TokenRepository.getBy({user_id:userId})
            if(tokenData){
                await TokenRepository.update(tokenData.id , {refreshToken})
                return await TokenRepository.getBy({user_id:userId})
            }
            const token = await TokenRepository.create({user_id:userId , refreshToken })
            return token


        } catch (error) {
            console.log(error)
        }
    }

    async removeToken(refreshToken){
        try {
            
            await TokenRepository.deleteBy({refreshToken})
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = new TokenService()