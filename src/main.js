import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/carousel'
import Pagination from '@/components/Pagination'
import store from '@/store'
import {Button,MessageBox,Form,FormItem,Input} from 'element-ui'
Vue.component('TypeNav',TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.component(Button.name,Button)
Vue.component(Form.name,Form)
Vue.component(FormItem.name,FormItem)
Vue.component(Input.name,Input)
Vue.config.productionTip = false

import router from './router'
import "swiper/css/swiper.css"
import '@/mock/mockServe'
//统一接口api文件夹里面的全部请求函数
// 统一引入
import * as API from '@/api'
import VueLazyload from 'vue-lazyload'
import tp from '@/assets/1.gif'
//引入表单校验插件
import "@/plugins/validate"
Vue.use(VueLazyload,{
  loading: tp
})
Vue.prototype.$msgbox=MessageBox;
Vue.prototype.$alert=MessageBox.alert;
new Vue({
  
  render: h => h(App),
  beforeCreate(){
    //this就是VM
    Vue.prototype.$bus=this
    Vue.prototype.$API=API
    
  },
  router,
  store
}).$mount('#app')
