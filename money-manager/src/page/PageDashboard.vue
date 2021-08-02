<template>
  <div>
    <h1 class="mt-5">My personal costs</h1>
    <Button @clicked="clicked" :showFrom="showFrom" />
    <PaymentForm :showFrom="showFrom" />
    <PaymentsList />
  </div>
</template>

<script>
import PaymentForm from '../components/PaymentForm'
import PaymentsList from '../components/PaymentsList'
import Button from '../components/Button'

import { mapActions } from 'vuex'

export default {
  components: {
    PaymentForm,
    PaymentsList,
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
