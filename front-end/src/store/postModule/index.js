import actions from './actions'
import mutations from './mutations'

export const postModule = {

    
    state:() =>({
        posts:[],
        userPosts:[],
        postsLoading:false,
        error:null,
        postsMeta:{},
        postMeta:{},
        page:0,
        totalPages:undefined,
        limit:10,
        selectedPost:null,
        message:null
    }),

    
    mutations,
    actions,
    namespaced:true



}