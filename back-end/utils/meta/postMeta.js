
function addPostMeta (req, res, initialPosts) {
    let posts;
    const meta = {}

    const {query , baseUrl} = req
    const offset = Number(query.offset) || 0
    const limit = Number(query.limit) || 10
    
    //filter meta posts
    meta.filter = {}
    meta.filter.author = `${process.env.API_URL}${baseUrl}?offset=${offset}&limit=${limit}&filter=author`
    meta.filter.publicationDate =  `${process.env.API_URL}${baseUrl}?offset=${offset}&limit=${limit}&filter=publicationDate` 
    
    meta.order = {}
    meta.order.author = `${process.env.API_URL}${baseUrl}?offset=${offset}&limit=${limit}&order=author`
    meta.order.publicationDate =  `${process.env.API_URL}${baseUrl}?offset=${offset}&limit=${limit}&order=publicationDate` 
   


    const isList = Array.isArray(initialPosts)

    if(isList){
        meta.single_post = `${process.env.API_URL}${baseUrl}/:id`

        if(initialPosts.length > limit){
            meta.links = {}

            if(offset > 0 ){
                meta.links.first = `${process.env.API_URL}${baseUrl}?offset=0&limit=${limit}`

                meta.links.prev = `${process.env.API_URL}${baseUrl}?offset=${Math.max(offset - limit , 0)}&limit=${limit}`
            
            }
            
            if(initialPosts.length > offset + limit){
                meta.links.next = `${process.env.API_URL}${baseUrl}?offset=${offset + limit}&limit=${limit}`

                const lastPossibleOffset = Math.floor((initialPosts.length - 1) / limit) * limit
                meta.links.last = `${process.env.API_URL}${baseUrl}?offset=${lastPossibleOffset}&limit=${limit}`
            }

            posts = initialPosts.slice(offset , offset + limit)

            res.setHeader('x-total-count' , initialPosts.length)


        }else{
            posts = initialPosts

            meta.list_entries = `${process.env.API_URL}${baseUrl.replace(/\/\d+$/ , '')}`
        }

        return {
            posts,meta
        }
    }

}

module.exports = addPostMeta