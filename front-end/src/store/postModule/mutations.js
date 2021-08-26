
export const postMutationsIds = {
    SET_POSTS : 'setPosts',
    SET_LOADING : 'setLoading',
    SET_ERROR : 'setError' ,
    SET_META : 'setMeta',
    SET_MY_POSTS : 'setUserPosts',
    CHANGE_USER_POST : 'changeUserPost',
    SELECT_POST : 'selectPost',
    SET_MESSAGE : 'setMessage',
    REMOVE_POST: 'removePost'
}

const mutations = {
    setPosts(state,posts){
        state.posts = posts
    },
    setMessage(state,msg){
        state.message = msg
    },
    setLoading(state,bool){
        state.postsLoading = bool
    },
    setError(state,error){
        state.error = error
    },
    setMeta(state , meta){
        state.meta = meta
    },
    setUserPosts(state,posts){
        state.userPosts = posts
    },
    // changePost(state,{data , id}){

    //     state.posts[state.posts.findIndex(post => post.id === id)] = 
    //                 {...state.posts.find(post => post.id === id) , title:data.title , body:data.body}
    // },
    changeUserPost(state,{data,id}){
        
        state.userPosts[state.userPosts.findIndex(post => post.id === id)] = 
                    {...state.userPosts.find(post => post.id === id) , title:data.title , body:data.body}
    },
    selectPost(state , post){
        state.selectedPost = post
    },
    removePost(state,postId){
        state.userPosts = state.userPosts.filter(post => post.id !== postId)
    }
}

export default mutations



