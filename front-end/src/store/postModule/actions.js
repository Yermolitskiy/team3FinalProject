import {mutationsIds} from './mutations'
import axios from 'axios'

export const actionsIds = {
    FETCH_POSTS : 'fetchPosts'
}

const actions = {
    async fetchPosts({commit}){
        try {
            commit(mutationsIds.SET_LOADING , true);
            //TODO::swap on axios with guards
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            commit(mutationsIds.SET_POSTS , response.data)
        } catch (error) {
            console.log(error)
        }finally{
            commit(mutationsIds.SET_LOADING , false)
        }
    }
}

export default actions