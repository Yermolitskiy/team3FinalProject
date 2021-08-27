class Post {

    constructor(data){
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.author = data.author
        this.publicationDate = data.publicationDate
        this.postImage = data.postImage
    }

}

module.exports = Post