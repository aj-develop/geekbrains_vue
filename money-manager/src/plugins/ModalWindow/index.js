export default {
  install (Vue) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.prototype.$modal = {
      EventBus: new Vue(),

      show (name, paymentId) {
        this.EventBus.$emit('show', { name, paymentId })
      },

      close () {
        this.EventBus.$emit('close')
      }
    }
  }
}
