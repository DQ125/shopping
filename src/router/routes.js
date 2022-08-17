//配置路由的信息
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
export default [
    {
        path: "/center",
        name: 'center',
        component: Center,
        meta: { show: true },
        children: [
            {
                path: 'myOrder',
                component: MyOrder,
            },
            {
                path: 'groupOrder',
                component: GroupOrder,
            },
            {
                path: '/center',
                redirect: '/center/myOrder',
            },
        ]
    },
    {
        path: "/paysuccess",
        name: 'paysuccess',
        component: PaySuccess,
        meta: { show: true }
    },
    {
        path: "/pay",
        name: 'pay',
        component: Pay,
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: "/trade",
        name: 'trade',
        component: Trade,
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            //只有从购物车来的才给跳转
            if (from.path == "/shopcart") {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: "/shopcart",
        name: 'shopcart',
        component: ShopCart,
        meta: { show: true }
    },
    {
        path: "/addcartsuccess",
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true }
    },
    {//路由跳转，点击产品去详情页是需要带参数的，把点击的产品ID传过去，所以需要占位
        path: "/detail/:skuId",
        component: Detail,
        meta: { show: true }
    },
    {
        path: "/home",
        component: Home,
        meta: { show: true }
    },
    {
        path: "/login",
        component: Login,
        meta: { show: false }
    },
    {
        path: "/register",
        component: Register,
        meta: { show: false }
    },
    {
        name: "search",
        path: "/search/:keyword?",
        component: Search,
        meta: { show: true }
    },
    //重定向，项目跑起来的时候定向到首页
    {
        path: '*',
        redirect: "home"
    }
]