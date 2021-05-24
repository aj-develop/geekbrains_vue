<template>
  <nav>
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: cur === 1 }">
        <a
          class="page-link"
          href="#"
          @click="onPageClick(cur - 1)"
        >
          <span>&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="(page, index) in amount" :key="index"
        :class="{ active: cur === page }"
      >
        <a
          @click="onPageClick(page)"
          class="page-link"
          href="#"
        >{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: cur === this.amount }">
        <a
          class="page-link"
          href="#"
          @click="onPageClick(cur + 1)">
          <span>&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    paymentsListLength: Number,
    itemsPerPage: Number,
    cur: Number
  },
  methods: {
    onPageClick (page) {
      if (page < 1 || page > this.amount) {
        return
      }
      this.$emit('currentPage', page)
    }
  },
  computed: {
    amount () {
      return Math.ceil(this.paymentsListLength / this.itemsPerPage)
    }
  }
}
</script>
