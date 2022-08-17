import requests from "./request";

import mockRequests from '@/api/mockAjax'
export const reqCategoryList = () => {
    return requests({ url: '/api/product/getBaseCategoryList', method: 'get' })
}

export const reqGetbannerList = () => {
    return mockRequests({ url: '/banner' })
}
export const reqGetfloorList = () => {
    return mockRequests({ url: '/floor' })
}
export const reqGetSearchInfo = (params) => {
    return requests({
        url: '/api/list',
        method: 'post',
        data: params
    })
}
export const reqGoodInfo = (skuId) => {
    return requests({
        url: `/api/item/${skuId}`,
        method: 'GET',
    })
}
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
    return requests({
        url: `/api/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post'
    })
}
export const reqCartList = () => {
    return requests({
        url: '/api/cart/cartList',
        method: 'get'
    })
}
export const reqDeleteCart = (skuId) => {
    return requests({
        url: `/api/cart/deleteCart/${skuId}`,
        method: 'DELETE'
    })
}
export const reqUpdateChecked = (skuId, isChecked) => {
    return requests({
        url: `/api/cart/checkCart/${skuId}/${isChecked}`,
        method: 'get'
    })
}
export const reqGetCode = (phone) => {
    return requests({
        url: `/api/user/passport/sendCode/${phone}`,
        method: 'get'
    })
}
export const reqRegister = (data) => {
    return requests({
        url: '/api/user/passport/register',
        data,
        method: 'post'
    })
}
export const reqUserLogin = (data) => {
    return requests({
        url: '/api/user/passport/login',
        data,
        method: 'post'
    })
}
export const reqGetUserInfo = () => {
    return requests({
        url: '/api/user/passport/auth/getUserInfo',
        method: 'get'
    })
}
export const reqLogout=()=>{
    return requests({
        url:'/api/user/passport/logout',
        method: 'get'
    })
}
export const reqAddressInfo=()=>{
    return requests({
        url:'/api/user/userAddress/auth/findUserAddressList',
        method: 'get'
    })
}
export const reqOrderInfo=()=>{
    return requests({
        url:'/api/order/auth/trade',
        method: 'get'
    })
}
export const reqSubmitOrder=(tradeNo,data)=>{
    return requests({
        url:`/api/order/auth/submitOrder?tradeNo=${tradeNo}`,
        data,
        method: 'post'
    })
}
export const reqPayInfo=(orderId)=>{
    return requests({
        url:`/api/payment/weixin/createNative/${orderId}`,
        method: 'get'
    })
}
export const reqPayStatus=(orderId)=>{
    return requests({
        url:`/api/payment/weixin/queryPayStatus/${orderId}`,
        method: 'get'
    })
}
export const reqMyOrderList=(page,limit)=>{
    return requests({
        url:`/api/order/auth/${page}/${limit}`,
        method: 'get'
    })
}