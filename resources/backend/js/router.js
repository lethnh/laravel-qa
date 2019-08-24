import Vue from 'vue'
import VueRouter from 'vue-router'


import LayOut from './views/layouts/LayOut'
import LayOutLogin from './views/layouts/LayOutLogin'


import Login from './views/auth/Login.vue'

import ListUser from './views/user/ListUser.vue'


import NotFound from './views/errors/NotFound.vue'
Vue.use(VueRouter)



const routes = [

    {
        path: '/admin',
        component: LayOut,
        children: [{
            path: 'user',
            component: ListUser,
            name: ''
        }, ],
    },

    {
        path: '/admin',
        component: LayOutLogin,
        children: [{
            path: 'login',
            component: Login,
            name: 'login'
        }, ],
    },

    //  DEFAULT ROUTE
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

// router.beforeEach((to, from, next) => {
//     //  If the next route is requires user to be Logged IN
//     if (to.matched.some(m => m.meta.requiresAuth)) {
//         return AuthService.checkLogin().then(authenticated => {
//             if (!authenticated) {
//                 return next({ path: '/login' })
//             }
//             return next()
//         })
//     }
//     return next()
// })

export default router