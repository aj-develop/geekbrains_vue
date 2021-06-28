<template>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <li class="dropdown-item" @click="editItem">Редактировать</li>
      <li class="dropdown-item" @click="deleteItem">Удалить</li>
    </ul>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  props: {
    paymentId: Number
  },
  methods: {
    ...mapMutations([
      'removeItemFromPaymentList'
    ]),
    onClose () {
      this.$context.close()
    },
    deleteItem () {
      const r = confirm('Реально удалить "item ' + this.paymentId + '"?')
      if (r === true) {
        this.removeItemFromPaymentList(this.paymentId)
      }
    },
    editItem () {
      this.$modal.show('PaymentForm', this.paymentId)
    }
  }
}
</script>
