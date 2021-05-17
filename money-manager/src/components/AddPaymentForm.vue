<template>
  <div class="wrapper" v-if="showFrom">
    <form>
      <div class="mb-3">
        <label for="date" class="form-label">Date</label>
        <input v-model="date"  class="form-control" id="date">
      </div>
      <div class="mb-3">
        <label for="category" class="form-label">Category</label>
        <input v-model="category"  class="form-control" id="category">
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input v-model.number="price"  class="form-control" id="price">
      </div>
    </form>
    <button @click="onSaveClick" class="btn btn-primary btn-lg">Save</button>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  props: {
    showFrom: Boolean
  },
  data () {
    return {
      date: '',
      category: '',
      price: 0
    }
  },
  methods: {
    onSaveClick () {
      const { date, category, price } = this
      this.$emit('addNewPayment', { date, category, price })
    }
  }
}
</script>
