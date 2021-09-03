
function addPostMeta (req, res, initialPosts) {
    let posts;
    const meta = {}


  

    const {query , baseUrl , path} = req
  
    const offset = Number(query.offset) || 0
    const limit = Number(query.limit) || 10
    
    //filter meta posts
    meta.filter = {}
    meta.filter.publicationDate =  `${process.env.API_URL}${baseUrl}${path === '/'?'':path.replace(/\/\d+$/ , '')}?offset=${offset}&limit=${limit}&filter=publicationDate` 
    
    meta.order = {}
    meta.order.publicationDate =  `${process.env.API_URL}${baseUrl}${path === '/'?'':path.replace(/\/\d+$/ , '')}?offset=${offset}&limit=${limit}&order=publicationDate` 
    
    //not best idea
    if(path !== '/userPosts'){
        meta.filter.author = `${process.env.API_URL}${baseUrl}?offset=${offset}&limit=${limit}&filter=author`
        meta.order.author = `${process.env.API_URL}${baseUrl}?offset=${offset}&limit=${limit}&order=author`
    }


    const isList = Array.isArray(initialPosts)

    if(isList){
        meta.single_post = `${process.env.API_URL}${baseUrl}${path === '/'?'':path.replace(/\/\d+$/ , '')}/:id`

        if(initialPosts.length > limit){
            meta.links = {}

            if(offset > 0 ){
                meta.links.first = `${process.env.API_URL}${baseUrl}${path === '/'?'':path.replace(/\/\d+$/ , '')}?offset=0&limit=${limit}`

                meta.links.prev = `${process.env.API_URL}${baseUrl}${path === '/'?'':path.replace(/\/\d+$/ , '')}?offset=${Math.max(offset - limit , 0)}&limit=${limit}`
            
            }
            
            if(initialPosts.length > offset + limit){
                meta.links.next = `${process.env.API_URL}${baseUrl}${path === '/'?'':path.replace(/\/\d+$/ , '')}?offset=${offset + limit}&limit=${limit}`

                const lastPossibleOffset = Math.floor((initialPosts.length - 1) / limit) * limit
                meta.links.last = `${process.env.API_URL}${baseUrl}${path === '/'?'':path.replace(/\/\d+$/ , '')}?offset=${lastPossibleOffset}&limit=${limit}`
            }

            posts = initialPosts.slice(offset , offset + limit)

            res.setHeader('x-total-count' , initialPosts.length)
            //the header that Emils was missing to enable header access on client
            res.setHeader('Access-Control-Expose-Headers', 'x-total-count')
            
            
        }else{
            res.setHeader('x-total-count' , initialPosts.length)
            posts = initialPosts
            res.setHeader('Access-Control-Expose-Headers', 'x-total-count')
        }
        
        
    }else{
        posts = initialPosts
        meta.list_entries = `${process.env.API_URL}${baseUrl.replace(/\/\d+$/ , '')}`

    }
    
    return {
        posts,meta
    }
}

module.exports = addPostMeta