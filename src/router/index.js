import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/server/auth'

Vue.use(Router)
let routes = [{
    path: '/login',
    name: 'login',
    meta: {
      requireUnLogin: true
    },
    component: resolve => require(['@/views/account/login'], resolve)
  },{
    path: '/',
    name: 'index',
    meta: {
      requireLogin: true
    },
    component: resolve => require(['@/views/layout'], resolve),
    children: [
      {
        path: '/',
        name: '首页',
        redirect: to => {
          return '/home'
        },
        component: resolve => require(['@/views/home/index'], resolve)
      }, {
        path: '/home',
        name: '首页',
        // component: () => import('@/pages/home/index')
        component: resolve => require(['@/views/home/index'], resolve)
      }, {
        path: '/example',
        name: '例子',
        // component: () => import('@/pages/home/index')
        component: resolve => require(['@/views/example/index'], resolve)
      }
    ]
  }
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((r) => r.meta.requireLogin)) { // 需要登录的路由，没登录时前往登录页
    if (Auth.isLogin()) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else if (to.matched.some((r) => r.meta.requireUnLogin)) { // 登录后不能进入的路由 若登录跳到首页
    if (!Auth.isLogin()) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  }else {
    next()
  }
})

export default router