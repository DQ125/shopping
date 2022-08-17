/* eslint-disable no-unused-vars */
import axios from "axios";
import nProgress from "nprogress";
//因为uuid_token在仓库的detail小仓库中，获取的话需要引入，然后在拦截器中header加上
// this.$store只能在组件中使用，不能再js文件中使用。
// 如果要在js中使用，需要引入import store from '@/store'
import store from "@/store"
import "nprogress/nprogress.css"
const requests = axios.create({

    timeout: 5000,
})
requests.interceptors.request.use((config) => {
    if (store.state.detail.uuid_token) {
        //请求头添加一个字段（userTempId):和后台老师商量好了
        config.headers.userTempId = store.state.detail.uuid_token
    }
    //需要将登入后的token带过去
    if (store.state.user.token) {
        
        config.headers.token = store.state.user.token
    }
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