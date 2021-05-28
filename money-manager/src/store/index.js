import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: []
  },
  mutations: {
    // payment list
    setPaymentsListData (state, payload) {
      if (!Array.isArray(payload)) {
        payload = [payload]
      }
      state.paymentsList = payload
    },
    addDataToPaymentsList (state, payload) {
      state.paymentsList.push(payload)
    },
    // categories
    setCategoriesListData (state, payload) {
      if (!Array.isArray(payload)) {
        payload = [payload]
      }
      state.categoryList.push(...payload)
    },
    addDataToCategoryList (state, payload) {
      state.categoryList.push(payload)
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getPaymentItemLastId: state => {
      return Math.max(...state.paymentsList.map(item => item.id), 0)
    },
    getCategoryList: state => state.categoryList,
    getCategoryLastId: state => {
      return Math.max(...state.categoryList.map(item => item.id), 0)
    }
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
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
      })
        .then(res => {
          commit('setPaymentsListData', res)
        })
    },
    loadCategories ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, name: 'Food' },
            { id: 2, name: 'Transport' },
            { id: 3, name: 'Education' },
            { id: 4, name: 'Entertainment' }
          ])
        }, 500)
      })
        .then(res => {
          commit('setCategoriesListData', res)
        })
    }
  }
})
