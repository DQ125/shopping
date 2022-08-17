import { reqCategoryList, reqGetbannerList,reqGetfloorList } from "@/api"

const state = {
    categoryList: [],
    bannerList: [],
    floorList:[]
}
const getters = {}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    FLOORLIST(state,floorList){
        state.floorList=floorList
    }
}
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    async bannerList({ commit }) {
        let result = await reqGetbannerList()
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data)
        }
    },
    async floorList({commit}){
       let result= await reqGetfloorList()
       if(result.code==200){
        commit("FLOORLIST",result.data)
       }
    },

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}