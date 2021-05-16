<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Date</th>
        <th scope="col">Category</th>
        <th scope="col">Value</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in this.pageOfItems" :key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.price }}</td>
      </tr>
      </tbody>
    </table>
    <Pagination @currentPage="setCurrentPage" :paymentsListLength="items.length" />
  </div>
</template>

<script>
import Pagination from './Pagination'

export default {
  name: 'PaymentsDisplay',
  components: {
    Pagination
  },
  props: {
    items: Array,
    default: []
  },
  data () {
    return {
      itemsPerPage: 3,
      currentPage: 1,
      pageOfItems: []
    }
  },
  methods: {
    setPageOfItems () {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = (startIndex + this.itemsPerPage) - 1
      this.pageOfItems = this.items.slice(startIndex, endIndex + 1)
    },
    setCurrentPage (currentPage) {
      this.currentPage = currentPage
      this.setPageOfItems()
    }
  },
  created () {
    this.setPageOfItems()
  }
}
</script>
