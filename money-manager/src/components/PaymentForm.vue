<template>
  <div class="wrapper" v-if="showFrom">
    <form id="payment-form">
      <div class="mb-3">
        <label for="date" class="form-label">Date</label>
        <input v-model="date"  class="form-control" id="date">
      </div>
      <div class="mb-3">
        <label for="category" class="form-label">Category</label>
        <button id="show-add-category-form" type="button" class="btn btn-outline-success btn-sm" data-bs-toggle="modal" data-bs-target="#categoryForm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
          </svg>
        </button>
        <select class="form-select" v-model="category" id="category">
          <option v-for="option in getCategoryList" :value="option.name" :key="option.id">
            {{ option.name }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input v-model.number="price"  class="form-control" id="price">
      </div>
    </form>
    <button id="save-data" @click="onSaveClick" class="btn btn-primary btn-lg">Save</button>
    <div class="modal fade" id="categoryForm" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <form id="add-category">
            <div class="modal-header">
              <h5 class="modal-title" id="categoryFormLabel">Add category</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input v-model="addedCategory"  class="form-control" id="addedCategory">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="onAddCategoryClick" data-bs-dismiss="modal">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
// import * as moment from 'moment'

export default {
  name: 'AddPaymentForm',
  props: {
    showFrom: {
      type: Boolean,
      default: false
    },
    paymentId: Number
  },
  data () {
    return {
      addedCategory: '',
      date: '',
      category: '',
      price: 0
    }
  },
  methods: {
    ...mapMutations([
      'addDataToPaymentsList',
      'addDataToCategoryList',
      'updatePaymentsListData'
    ]),
    ...mapActions([
      'loadCategories'
    ]),
    onSaveClick () {
      const { date, category, price } = this
      if (this.paymentId) {
        // update
        const id = this.paymentId
        this.updatePaymentsListData({ id, date, category, price })
      } else {
        // insert
        const id = this.getPaymentItemLastId + 1
        this.addDataToPaymentsList({ id, date, category, price })
      }
    },
    onAddCategoryClick () {
      const { addedCategory } = this
      const id = this.getCategoryLastId + 1
      const name = addedCategory
      this.addDataToCategoryList({ id, name })
    },
    onPaymentRoute () {
      const category = this.$route.params.category
      const price = this.$route.query.value
      // const date = moment().format('D.MM.y')
      const d = new Date()
      const date = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear()
      if (category && price) {
        setTimeout(() => {
          const id = this.getPaymentItemLastId + 1
          this.addDataToPaymentsList({ id, date, category, price })
        }, 250)
      } else if (category && !price) {
        this.category = category
        this.date = date
        this.showFrom = true
      }
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentItemLastId',
      'getCategoryList',
      'getCategoryLastId',
      'getPaymentItemById'
    ])
  },
  mounted () {
    if (this.paymentId) {
      const editItem = this.getPaymentItemById(this.paymentId)
      this.category = editItem.category
      this.price = editItem.price
      this.date = editItem.date
    }
    if (!this.getCategoryList.length) {
      this.loadCategories()
    }
    this.onPaymentRoute()
  }
}
</script>
