
function addPostMeta (req, res, initialData) {
    let data;
    const meta = {}

    const {query , baseUrl} = req
    const offset = Number(query.offset) || 0
    const limit = Number(query.limit) || 10
    
    //filter meta data
    meta.filter = {}
    meta.filter.author = `${process.env.API_URL}${baseUrl}?offset=${offset}&limit=${limit}&filter=author`
    meta.filter.publicationDate =  `${process.env.API_URL}${baseUrl}?offset=${offset}&limit=${limit}&filter=publicationDate` 
    
    meta.order = {}
    meta.order.author = `${process.env.API_URL}${baseUrl}?offset=${offset}&limit=${limit}&order=author`
    meta.order.publicationDate =  `${process.env.API_URL}${baseUrl}?offset=${offset}&limit=${limit}&order=publicationDate` 
   


    const isList = Array.isArray(initialData)

    if(isList){
        meta.single_post = `${process.env.API_URL}${baseUrl}/:id`

        if(initialData.length > limit){
            meta.links = {}

            if(offset > 0 ){
                meta.links.first = `${process.env.API_URL}${baseUrl}?offset=0&limit=${limit}`

                meta.links.prev = `${process.env.API_URL}${baseUrl}?offset=${Math.max(offset - limit , 0)}&limit=${limit}`
            
            }
            
            if(initialData.length > offset + limit){
                meta.links.next = `${process.env.API_URL}${baseUrl}?offset=${offset + limit}&limit=${limit}`

                const lastPossibleOffset = Math.floor((initialData.length - 1) / limit) * limit
                meta.links.last = `${process.env.API_URL}${baseUrl}?offset=${lastPossibleOffset}&limit=${limit}`
            }

            data = initialData.slice(offset , offset + limit)

            res.setHeader('x-total-count' , initialData.length)


        }else{
            data = initialData

            meta.list_entries = `${process.env.API_URL}${baseUrl.replace(/\/\d+$/ , '')}`
        }

        return {
            data,meta
        }
    }

}

module.exports = addPostMeta