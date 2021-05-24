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
      <tr v-for="item in currentElements" :key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.price }}</td>
      </tr>
      </tbody>
    </table>
    <Pagination
      @currentPage="setCurrentPage"
      :paymentsListLength="getPaymentsList.length"
      :itemsPerPage="itemsPerPage"
      :cur="currentPage"
    />
  </div>
</template>

<script>
import Pagination from './Pagination'

import { mapGetters } from 'vuex'

export default {
  name: 'PaymentsDisplay',
  components: {
    Pagination
  },
  data () {
    return {
      itemsPerPage: 10,
      currentPage: 1
    }
  },
  methods: {
    setCurrentPage (currentPage) {
      this.currentPage = currentPage
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ]),
    currentElements () {
      const { itemsPerPage, currentPage } = this
      return this.getPaymentsList.slice(itemsPerPage * (currentPage - 1), itemsPerPage * (currentPage - 1) + itemsPerPage)
    }
  }
}
</script>
