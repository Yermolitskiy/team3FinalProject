const TokenService = require('../services/TokenService')

module.exports = function (req , res , next){


    if(req.method === "OPTIONS") next();

    try {
        const authorizationHeader = req.headers.authorization

        if(!authorizationHeader) throw new Error('Unauthorized error')

        const token = authorizationHeader.split(' ')[1]

        if(!token) throw new Error('Unauthorized error')
        
        const userId = TokenService.validateAccessToken(token)

        if(!userId) throw new Error('Unauthorized error')
        
        req.user = userId
        
        next()
    } catch (error) {
        
         throw new Error('Unauthorized error')
    }
}