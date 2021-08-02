<template>
    <div>
      <PaymentForm :paymentId="paymentId" :showFrom="true" v-if="name === 'PaymentForm'" />
      <button type="button" class="btn btn-outline-dark" @click="onClose">Close</button>
    </div>
</template>

<script>
import PaymentForm from '../PaymentForm'
export default {
  components: {
    PaymentForm
  },
  props: {
    name: String,
    paymentId: Number
  },
  methods: {
    onClose () {
      this.$modal.close()
    }
  }
}
</script>

<style module lang="scss">
</style>
