import Axios from 'axios'

const axios = Axios.create({
    baseURL:process.env.BASE_URL
})

axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})