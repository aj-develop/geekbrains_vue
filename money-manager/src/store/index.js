import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    paymentsList: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    addDataToPaymentsList (state, payload) {
      state.paymentsList.push(payload)
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getLastId: state => {
      return Math.max(...state.paymentsList.map(item => item.id), 0)
    }
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const items = []
          for (let i = 1; i < 55; i++) {
            items.push({
              id: i,
              date: '13.05.2021',
              category: 'Education',
              price: i * 10
            })
          }
          resolve(items)
        }, 500)
      })
        .then(res => {
          commit('setPaymentsListData', res)
        })
    }
  }
})
