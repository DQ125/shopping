/* eslint-disable no-unused-vars */

import axios from "axios";
import nProgress from "nprogress";

import "nprogress/nprogress.css"


let requests = axios.create({
    baseURL: '/mock',
    timeout: 5000,
})
requests.interceptors.request.use((config) => {
    
    nProgress.start()
    return config
})
requests.interceptors.response.use((res) => {
    nProgress.done()
    return res.data
}, (error) => {
    return Promise.reject(new Error('faile'))
})
export default requests