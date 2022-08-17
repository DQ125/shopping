import { reqCartList, reqDeleteCart, reqUpdateChecked } from "@/api"
const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList()
        if (result.code == 200) {
            commit('GETCARTLIST', result.data)
        }
    },
    async deleteCartList({ commit }, skuId) {
        let result = await reqDeleteCart(skuId)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async updateChecked({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateChecked(skuId, isChecked)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    deleteAllCart({ dispatch, getters }) {
        //context小仓库
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('deleteCartList', item.skuId) : ''
            PromiseAll.push(promise)
        });
        //只有都成功，返回的结果才为成功
        return Promise.all(PromiseAll)
    },
    updateAllCartIsChecked({ dispatch, state }, isChecked) {
        let PromiseAll = []
        state.cartList[0].cartInfoList.forEach(item => {
            let promise = dispatch('updateChecked', { skuId: item.skuId, isChecked:isChecked })
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll)
    }

}
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}
const state = {
    cartList: []
}
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    }
}
export default {
    actions,
    mutations,
    state,
    getters

}