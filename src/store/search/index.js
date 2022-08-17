import { reqGetSearchInfo } from '@/api'
const state = {
    getSearchList: {}
}
const getters = {
    goodsList(state) {
        return state.getSearchList.goodsList || []
    },
    trademarkList(state) {
        return state.getSearchList.trademarkList || []
    },
    attrsList(state) {
        return state.getSearchList.attrsList || []
    },
}
const mutations = {
    GETSEARCHLIST(state, getSearchList) {
        state.getSearchList = getSearchList
    }
}
const actions = {
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data)
        }
    }

}

export default {

    state,
    getters,
    mutations,
    actions
}