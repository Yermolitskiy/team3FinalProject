import {postMutationsIds} from './mutations'
import axios from '../../utils/axios'


export const actionsIds = {
    FETCH_POSTS : 'fetchPosts',
    CREATE_POST : 'createPost'
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

 
    async createPost({rootState , commit , state} , data){

        try {

            const authorId =  rootState.auth.user.id
            const publicationDate = Date.now()
            //turns proxy object into plain js object and returning data property
            const postData = {...JSON.parse(JSON.stringify(data))}.data

            // repalce string path in segregate .env later
            const response = await axios.post('http://localhost:5000/api/posts/' , {...postData , author:authorId, publicationDate})
            console.log(response)
            commit(postMutationsIds.SET_POSTS , [...state.posts , response.data])
        } catch (error) {
            console.log(error.response.data.error)
            commit(postMutationsIds.SET_ERROR, error.response.data.error)
        }
    }
  
}

export default actions