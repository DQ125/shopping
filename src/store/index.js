import Vue from "vue";
import Vuex from 'vuex'
import home from './home'
import search from './search'
import detail from '@/store/detail/detail'
import shopcart from '@/store/shopcart'
import user from '@/store/user'
import trade from '@/store/trade'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail, 
        shopcart,
        user,
        trade
    }
})