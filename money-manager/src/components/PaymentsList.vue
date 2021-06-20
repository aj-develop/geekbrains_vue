<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Date</th>
        <th scope="col">Category</th>
        <th scope="col">Value</th>
        <th scope="col" class="fit"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in currentElements" :key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.price }}</td>
        <td class="fit">
          <div class="dropdown dropup caller" >
            <svg @click="showContextMenu" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="dropdown-toggle bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
            </svg>
            <transition name="fade">
              <ContextMenu v-show="contextMenuShown"  :paymentId="item.id" />
            </transition>
          </div>
        </td>
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
    Pagination,
    ContextMenu: () => import('./contextmenu/Menu')
  },
  data () {
    return {
      itemsPerPage: 10,
      currentPage: 1,
      contextMenuShown: false
    }
  },
  methods: {
    setCurrentPage (currentPage) {
      this.currentPage = currentPage
    },
    showContextMenu () {
      this.$context.show()
    },
    closeContextMenu () {
      this.$context.close()
    },
    onShown () {
      this.contextMenuShown = true
    },
    onClose () {
      this.contextMenuShown = false
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
  },
  mounted () {
    this.$context.EventBus.$on('show', this.onShown)
    this.$context.EventBus.$on('close', this.onClose)
  },
  beforeDestroy () {
    this.$context.EventBus.$off('show', this.onShown)
    this.$context.EventBus.$off('close', this.onClose)
  }
  /*
  watch: {
    contextMenuShown: function (val) {
      if (val) {
        const dropdowns = this.$el.querySelectorAll('ul.dropdown-menu')
        dropdowns.forEach((menu) => {
          console.log(menu.classList.contains('dropdown-menu'))
        })
      }
    }
  }
  */
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<style lang="scss" scoped>
td.fit, th.fit {
  white-space: nowrap;
  width: 1%;
}
.btn-outline-secondary {
  border-color: transparent;
}

.caller {
  cursor: pointer;
}

</style>
