const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = function(token){
    try {
        const userId = jwt.verify(token , process.env.JWT_ACCESS_SECRET)
        return userId
    } catch (error) {
        return false
    }
}