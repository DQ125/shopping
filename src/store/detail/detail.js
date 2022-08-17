import { reqGoodInfo, reqAddOrUpdateShopCart } from "@/api"
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodInfo: {},
    uuid_token:getUUID()
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const actions = {
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    },
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
        //当前这个函数如果执行，返回的是promise
        if (result.code == 200) {
            return "ok"
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters = {
    //actions去进行异步操作时，getters要依赖actions回来的数据，
    //在数据没有回来之前，state.goodInfo是undefined，.categoryView执行的话就会报错，所以要并上{}
    categoryView(state) {
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }
}
export default {
    state, mutations, actions, getters
}