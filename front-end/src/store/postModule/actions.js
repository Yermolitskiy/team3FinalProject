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
    DELETE_POST:'removePost',
    FETCH_MORE_POSTS:'fetchMorePosts'
  
}

const actions = {
    async fetchPosts({commit , state} , data){
        try {
            const ofCurrentUser = data?.ofCurrentUser
            const offset = state.page === 0 ? 0 : state.page * state.limit
            if(!ofCurrentUser){
            commit(postMutationsIds.SET_LOADING , true);
            // const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            //move api url in .env later 
            const response = await axios.get('http://localhost:5000/api/posts/' , 
                {params: 
                    {
                        offset,
                        limit:state.limit
                    }})
                
            console.log('x-total,count' , response.headers['x-total-count'])
            commit(postMutationsIds.SET_TOTAL_PAGES , Math.ceil(response.headers['x-total-count'] / state.limit))
            commit(postMutationsIds.SET_POSTS , response.data.posts)
            commit(postMutationsIds.SET_META , response.data.meta)
            }
            //fetch for current user
            else{
                commit(postMutationsIds.SET_LOADING , true)
                const response = await axios.get('http://localhost:5000/api/posts/userPosts' , {
                    params:{
                        offset , limit:state.limit
                    }
                })
                console.log(response.data)
                commit(postMutationsIds.SET_TOTAL_PAGES , Math.ceil(response.headers['x-total-count'] / state.limit))
                commit(postMutationsIds.SET_MY_POSTS , response.data.posts)
                commit(postMutationsIds.SET_USER_META , response.data.meta)
            }
        //common error handling for both cases
        } catch (error) {
            console.log(error.response.data.error)
            commit(postMutationsIds.SET_ERROR, error.response.data.error)
        }finally{
            commit(postMutationsIds.SET_LOADING , false)
        }
    },

    //used for post scrolling , alternative to pagination
    async fetchMorePosts({commit , state} ,data){

        try {
            const ofCurrentUser = data?.ofCurrentUser
            const offset = state.page * state.limit
            if(!ofCurrentUser){
                //prevents infinite repeatative scroll when post amount is less than 1 page
                if(state.page + 1 < state.totalPages){
                commit(postMutationsIds.SET_PAGE , state.page + 1)

                const response = await axios.get('http://localhost:5000/api/posts' , {
                    params:{
                        offset , limit:state.limit
                    }
                })
        
                commit(postMutationsIds.SET_TOTAL_PAGES , Math.ceil(response.headers['x-total-count'] / state.limit))
                commit(postMutationsIds.SET_POSTS , [...state.posts , ...response.data.posts])
                commit(postMutationsIds.SET_META , response.data.meta)
            }
            }
            //else fetch more user's posts
            else{
                if(state.page + 1 < state.totalPages){
                    commit(postMutationsIds.SET_PAGE , state.page + 1)
                    const response = await axios.get('http://localhost:5000/api/posts/userPosts' , {
                        params:{
                            offset , limit:state.limit
                        }
                    })            
                    commit(postMutationsIds.SET_TOTAL_PAGES , Math.ceil(response.headers['x-total-count'] / state.limit))
                    commit(postMutationsIds.SET_MY_POSTS , [...state.userPosts , ...response.data.posts])
                    commit(postMutationsIds.SET_USER_META , response.data.meta)
                }
            }
           
        } catch (error) {
            console.log(error.response.data.error)
            commit(postMutationsIds.SET_ERROR, error.response.data.error)
        }
     
        
    },

   

 
    async createPost({ commit , state} , data){

        try {
            // id is recieved from token payload instead
            // const authorId =  rootState.auth.user.id
            const now = new Date()
            const publicationDate = now.toISOString().split('T')[0]


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

    //likely to change on getPost(context , {ofCurrentUser : boolean})
    async getMyPost({commit} , id){
            try {
               
                commit(postMutationsIds.SET_LOADING , true)
                const response = await axios.get(`http://localhost:5000/api/posts/userPosts/${id}`)
                commit(postMutationsIds.SELECT_POST , response.data.posts)

                //currently is not used
                commit(postMutationsIds.SET_USER_META , response.data.meta)
    
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
    },
   
  
}

export default actions