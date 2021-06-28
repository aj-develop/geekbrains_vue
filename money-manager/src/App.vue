<template>
  <main class="flex-shrink-0">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <transition name="fade">
        <Modal v-if="modalShown" :name="modalShown" :paymentId="paymentId"/>
      </transition>
      <router-view />
    </div>
  </main>
</template>

<script>
export default {
  name: 'App',
  components: {
    Modal: () => import('./components/modalwindows/Modal')
  },
  data () {
    return {
      modalShown: false,
      paymentId: 0
    }
  },
  methods: {
    onShown ({ name, paymentId }) {
      this.modalShown = name
      this.paymentId = paymentId
    },
    onClose () {
      this.modalShown = ''
      this.paymentId = 0
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.onShown)
    this.$modal.EventBus.$on('close', this.onClose)
  },
  beforeDestroy () {
    this.$modal.EventBus.$off('show', this.onShown)
    this.$modal.EventBus.$off('close', this.onClose)
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
