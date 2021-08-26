import actions from './actions'
import mutations from './mutations'

export const postModule = {

    
    state:() =>({
        posts:[],
        userPosts:[],
        postsLoading:false,
        error:undefined,
        meta:{},
        userMeta:{},
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