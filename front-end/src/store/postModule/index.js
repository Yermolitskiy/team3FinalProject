import actions from './actions'
import mutations from './mutations'

export const postModule = {

    
    state:() =>({
        posts:[],
        userPosts:[],
        postsLoading:false,
        error:undefined,
        meta:{},
        selectedPost:null,
        message:null
    }),

    
    mutations,
    actions,
    namespaced:true



}