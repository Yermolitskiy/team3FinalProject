const TokenService = require('../services/TokenService')

module.exports = function (req , res , next){


    if(req.method === "OPTIONS") next();

    try {
        const authorizationHeader = req.headers.authorization

        if(!authorizationHeader) return res.status(401).json({message:'Unauthorized error'})

        const token = authorizationHeader.split(' ')[1]

        if(!token) return res.status(401).json({message:'Unauthorized error'})
        
        const userId = TokenService.validateAccessToken(token)

        if(!userId) throw new Error('Unauthorized error')
        
        req.user = userId
        
        next()
    } catch (error) {
        
        return res.status(401).json({message:'Unauthorized error'})
    }
}