

class Token {
    constructor(data){
        this.id = data.id
        this.refreshToken = data.refreshToken
        this.userId = data.userId
    }
}

module.exports = Token