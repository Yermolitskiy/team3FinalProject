
import axios from '../../utils/axios'
import {authMutationsIds} from './mutations'
import router from '../../router/'

const actions = {
    async register({commit} , data){
        try {
            // console.log(process.env.VUE_APP_API_URL)
            commit(authMutationsIds.SET_LOADING , true)
            commit(authMutationsIds.SET_ERROR , null)

            const response = await axios.post(`/api/auth/register` , data)

            localStorage.setItem('token' , response.data.token)
            localStorage.setItem('user' , JSON.stringify(response.data.user))
            
            commit(authMutationsIds.SET_USER , response.data.user)
            commit(authMutationsIds.SET_LOGGED , true)
            router.push('/')
        } catch (error) {
            commit(authMutationsIds.SET_ERROR, error.response.data.error)
        }finally{
            commit(authMutationsIds.SET_LOADING , false)
        }
    },

    async loadUser({commit}){
        try {

            if(localStorage.getItem('token') !== null){
                if(localStorage.getItem('user') !== null){
                    commit(authMutationsIds.SET_USER , JSON.parse(localStorage.getItem('user')))
                    commit(authMutationsIds.SET_LOGGED , true)
                }else{
                    const response = await axios.post('/api/auth/tokenResolve' , { token:localStorage.getItem('token')  })
                    localStorage.setItem('user' , JSON.stringify(response.data))
                    commit(authMutationsIds.SET_USER , response.data)
                    commit(authMutationsIds.SET_LOGGED , true)
                }
            }
        } catch (error) {
            console.log(error)
            commit(authMutationsIds.SET_ERROR, error.response.data.error)
        }
    },

    async login({commit} , data){
        try {
            // commit(authMutationsIds.SET_ERROR  , null)
            commit(authMutationsIds.SET_LOADING ,true)
            commit(authMutationsIds.SET_ERROR, null)
            const response = await axios.post(`/api/auth/login`,data)
            localStorage.setItem('token' , response.data.token)
            localStorage.setItem('user' , JSON.stringify(response.data.user))
            commit(authMutationsIds.SET_USER , response.data.user)
            commit(authMutationsIds.SET_LOGGED , true)
            
        } catch (error) {
            commit(authMutationsIds.SET_ERROR, error.response.data.error)
        }finally{
            commit(authMutationsIds.SET_LOADING , false)
        }
    },

    

    logout({commit}){
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        commit(authMutationsIds.SET_USER , {})
        commit(authMutationsIds.SET_LOGGED , false)
    }
}

export default actions