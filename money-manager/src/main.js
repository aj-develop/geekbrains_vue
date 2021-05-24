import Vue from 'vue'
import App from './App.vue'
// импортируем экземпляр созданного хранилища
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store // подключаем хранилище к нашему приложению
}).$mount('#app')
