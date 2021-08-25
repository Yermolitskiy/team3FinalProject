import Axios from 'axios'

// const axios = Axios.create({
//     baseURL:process.env.VUE_APP_API_URL
// })
const axios = Axios.create({
    baseURL:'http://localhost:5000'
})

axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default axios