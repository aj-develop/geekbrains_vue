<template>
  <div class="wrapper" v-if="showFrom">
    <form>
      <div class="mb-3">
        <label for="date" class="form-label">Date</label>
        <input v-model="date"  class="form-control" id="date">
      </div>
      <div class="mb-3">
        <label for="category" class="form-label">Category</label>
        <button type="button" class="btn btn-outline-success btn-sm" data-bs-toggle="modal" data-bs-target="#categoryForm">
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
    <button @click="onSaveClick" class="btn btn-primary btn-lg">Save</button>
    <div class="modal fade" id="categoryForm" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <form>
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

export default {
  name: 'AddPaymentForm',
  props: {
    showFrom: Boolean
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
      'addDataToCategoryList'
    ]),
    ...mapActions([
      'loadCategories'
    ]),
    onSaveClick () {
      const { date, category, price } = this
      const id = this.getPaymentItemLastId + 1
      this.addDataToPaymentsList({ id, date, category, price })
    },
    onAddCategoryClick () {
      const { addedCategory } = this
      const id = this.getCategoryLastId + 1
      const name = addedCategory
      this.addDataToCategoryList({ id, name })
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentItemLastId',
      'getCategoryList',
      'getCategoryLastId'
    ])
  },
  mounted () {
    if (!this.getCategoryList.length) {
      this.loadCategories()
    }
  }
}
</script>
