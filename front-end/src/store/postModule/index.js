import actions from './actions'
import mutations from './mutations'

export const postModule = {

    
    state:() =>({
        posts:[],
        postsLoading:false
    }),
    mutations,
    actions,
    namespaced:true



}