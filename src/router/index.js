import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes'

Vue.use(VueRouter)
import store from '@/store'
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.push
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {

        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
VueRouter.prototype.Replace = function (location, resolve, reject) {
    if (resolve && reject) {

        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}
let router = new VueRouter({
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})
router.beforeEach( async(to, from, next) => {
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if (token) {
        if (to.path == '/login'|| to.path == '/register') {
            next('/home')
        } else {
            if (name) {
                next()
            } else {
                //没有用户信息，要派发action
                try {
                    await store.dispatch("getUserInfo")
                    next()
                } catch (error) {
                    //token失效
                    //清除token
                    await store.dispatch("userLogout")
                    next('/login')
                }
            }
        }
    } else {
        //未登录，不能去交易相关，不能去支付相关，不能去个人中心,去登录，去的不是上面的路由需要放行
        let toPath=to.path
        if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1 ||toPath.indexOf('/center')!=-1) {
            //把未登入的时候想去而没有去成的信息，存储于地址栏中
            next('/login?redirect='+toPath)
        }
        next()
    }
})
export default router