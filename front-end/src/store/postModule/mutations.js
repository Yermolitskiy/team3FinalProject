
export const mutationsIds = {
    SET_POSTS : 'setPosts',
    SET_LOADING : 'setLoading'
}

const mutations = {
    setPosts(state,posts){
        state.posts = posts
    },
    setLoading(state,bool){
        state.postsLoading = bool
    }
}

export default mutations



