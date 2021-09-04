import Axios from 'axios'

// const axios = Axios.create({
//     baseURL:process.env.VUE_APP_API_URL
// })
const axios = Axios.create({
    withCredentials:true,
    baseURL:`${process.env.VUE_APP_API_URL}`
})

axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

axios.interceptors.response.use(config => {
    return config
} , async(error) => {
    console.log(error)
    const originalRequest = error.config
    if(error.response.status === 401 && error.config && !error.config._isRetry){
        originalRequest._isRetry = true
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/refresh` , {withCredentials:true})
            console.log(response)
            localStorage.setItem('token' , response.data.accessToken)
            return axios.request(originalRequest)
        } catch (error) {
            console.log('not authorized')
        }
    }
    throw error
})

export default axios