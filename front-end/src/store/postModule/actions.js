import {postMutationsIds} from './mutations'
import axios from '../../utils/axios'
import router from '../../router/'






export const actionsIds = {
    FETCH_POSTS : 'fetchPosts',
    CREATE_POST : 'createPost',
    FETCH_MY_POSTS: 'fetchMyPosts',
    GET_MY_POST:'getMyPost',
    UPDATE_POST:'updatePost',
    REMOVE_POST:'removePost',
    GET_POST:'getPost',
    DELETE_POST:'removePost'
  
}

const actions = {
    async fetchPosts({commit}){
        try {
            commit(postMutationsIds.SET_LOADING , true);
            // const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            //move api url in .env later 
            const response = await axios.get('http://localhost:5000/api/posts/')
            commit(postMutationsIds.SET_POSTS , response.data.posts)
            commit(postMutationsIds.SET_META , response.data.meta)
        } catch (error) {
            console.log(error.response.data.error)
            commit(postMutationsIds.SET_ERROR, error.response.data.error)
        }finally{
            commit(postMutationsIds.SET_LOADING , false)
        }
    },

 
    async createPost({ commit , state} , data){

        try {
            // id is recieved from token payload instead
            // const authorId =  rootState.auth.user.id
            const publicationDate = Date.now()
            //turns proxy object into plain js object and returning data property
            const postData = {...JSON.parse(JSON.stringify(data))}.data

            // repalce string path in segregate .env later
            const response = await axios.post('http://localhost:5000/api/posts/' , {...postData ,  publicationDate})
            console.log(response)
            commit(postMutationsIds.SET_MY_POSTS , [...state.userPosts , response.data])
        } catch (error) {
            console.log(error.response.data.error)
            commit(postMutationsIds.SET_ERROR, error.response.data.error)
        }
    },

    async fetchMyPosts({commit , state }){
        //fetch only if not in store
        if(!state.userPosts.length){
            try {
                commit(postMutationsIds.SET_LOADING , true)
                const response = await axios.get('http://localhost:5000/api/posts/userPosts')
                console.log(response)
                commit(postMutationsIds.SET_MY_POSTS , response.data)
            } catch (error) {
                console.log(error)
                console.log(error.response.data.error)
                commit(postMutationsIds.SET_ERROR , error.response.data.error)
            }finally{
                commit(postMutationsIds.SET_LOADING , false)
            }
        }
    },

   

    async updatePost({commit } , {data , id}){

        try {
            await axios.put(`http://localhost:5000/api/posts/${id}` , {...data})
            commit(postMutationsIds.CHANGE_USER_POST , {data , id})
            commit(postMutationsIds.SET_MESSAGE , 'Post succesfuly updated')
            router.push('/myPosts')
            
        } catch (error) {
            console.log(error.response.data.error)
            commit(postMutationsIds.SET_ERROR , error.response.data.error)
        }

    },

    async getMyPost({commit} , id){
            try {
                console.log('no in vuex , requesting')
                commit(postMutationsIds.SET_LOADING , true)
                const response = await axios.get(`http://localhost:5000/api/posts/userPosts/${id}`)
                console.log(response)
                commit(postMutationsIds.SELECT_POST , response.data)
    
            } catch (error) {
                console.log(error.response.data.error)
                commit(postMutationsIds.SET_ERROR , error.response.data.error)
                router.push('/')
            }finally{
                commit(postMutationsIds.SET_LOADING , false)
            }
    },

    // async getPost({commit , state} , id){


    // },
    async removePost({commit} , postId){
        try {
            commit(postMutationsIds.REMOVE_POST , postId)
            const response = await axios.delete(`http://localhost:5000/api/posts/userPosts/${postId}`)
            console.log(response)

        } catch (error) {
            console.log(error.response.data.error)
            commit(postMutationsIds.SET_ERROR , error.response.data.error)
        }
    }
  
}

export default actions