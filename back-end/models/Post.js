class Post {

    //set neccessary structure for post model
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.author = data.author
        this.publicationDate = data.publicationDate
    }

}

module.exports = Post