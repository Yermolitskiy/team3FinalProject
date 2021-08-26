import actions from './actions'
import mutations from './mutations'

export const postModule = {

    
    state:() =>({
        posts:[],
        postsLoading:false,
        error:undefined,
        meta:{}
    }),

    mutations,
    actions,
    namespaced:true



}