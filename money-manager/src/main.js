import Vue from 'vue'
import App from './App.vue'
// импортируем экземпляр созданного хранилища
import store from './store'
// импортируем экземпляр роутера из листинга выше
import router from './router'
import modal from './plugins/ModalWindow'
import contextMenu from './plugins/ContextMenu'

Vue.config.productionTip = false
Vue.use(modal)
Vue.use(contextMenu)

new Vue({
  render: h => h(App),
  store, // подключаем хранилище к нашему приложению
  router // подключаем роутер к нашему приложению
}).$mount('#app')
