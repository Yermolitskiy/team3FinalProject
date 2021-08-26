
export const postMutationsIds = {
    SET_POSTS : 'setPosts',
    SET_LOADING : 'setLoading',
    SET_ERROR : 'setError' ,
    SET_META : 'setMeta'
}

const mutations = {
    setPosts(state,posts){
        state.posts = posts
    },
    setLoading(state,bool){
        state.postsLoading = bool
    },
    setError(state,error){
        state.error = error
    },
    setMeta(state , meta){
        state.meta = meta
    }
}

export default mutations



