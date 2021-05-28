import Vue from 'vue'
import App from './App.vue'
// импортируем экземпляр созданного хранилища
import store from './store'
// импортируем экземпляр роутера из листинга выше
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store, // подключаем хранилище к нашему приложению
  router // подключаем роутер к нашему приложению
}).$mount('#app')
