import Vue from 'vue'
import Router from 'vue-router'

import PageDashboard from '../page/PageDashboard'
import PageAbout from '../page/PageAbout'
import Page404 from '../page/Page404'

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
      component: PageDashboard
    },
    {
      path: '/add/payment/:category',
      name: 'addPayment',
      component: PageDashboard
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout
    },
    {
      path: '*',
      name: 'NotFound',
      component: Page404
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
