<template>
  <main class="flex-shrink-0">
    <div class="container">
      <h1 class="mt-5">My personal costs</h1>
      <Button @clicked="clicked" :showFrom="showFrom" />
      <AddPaymentForm :showFrom="showFrom" />
      <PaymentsDisplay />
    </div>
  </main>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay'
import AddPaymentForm from './components/AddPaymentForm'
import Button from './components/Button'

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Button
  },
  data () {
    return {
      showFrom: false
    }
  },
  methods: {
    ...mapActions({
      fetchListData: 'fetchData'
    }),
    clicked () {
      this.showFrom = !this.showFrom
    }
  },
  created () {
    this.paymentsList = this.getPaymentsList
  },
  mounted () {
    this.fetchListData()
  }
}
</script>
