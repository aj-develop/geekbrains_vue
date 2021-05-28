import Vue from 'vue'
import Router from 'vue-router'

import AddPaymentForm from '../components/AddPaymentForm'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/add/payment/:category',
      name: 'addPayment',
      component: AddPaymentForm
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
