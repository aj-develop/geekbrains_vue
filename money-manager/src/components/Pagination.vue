<template>
  <nav>
    <ul class="pagination">
      <li
        class="page-item"
        v-for="(page, index) in Math.ceil(paymentsListLength/this.itemsPerPage)"
        :key="index"
      >
        <a @click="onPageClick(page)" class="page-link" href="#">{{ page }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    paymentsListLength: Number
  },
  data () {
    return {
      itemsPerPage: 3
    }
  },
  methods: {
    onPageClick (page) {
      this.$emit('currentPage', page)
    }
  }
}
</script>
