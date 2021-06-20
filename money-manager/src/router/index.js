import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../page/PageDashboard')
    },
    {
      path: '/add/payment/:category',
      name: 'addPayment',
      component: () => import('../page/PageDashboard')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../page/PageAbout')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('../page/Page404')
    }
  ]
})

/*
router.beforeEach((to, from, next) => {
  // .
})

router.afterEach(() => {
  // .
})
*/

export default router
