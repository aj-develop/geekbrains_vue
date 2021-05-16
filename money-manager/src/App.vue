<template>
  <main class="flex-shrink-0">
    <div class="container">
      <h1 class="mt-5">My personal costs</h1>
      <Button @clicked="clicked" :showFrom="showFrom" />
      <AddPaymentForm @addNewPayment="addNewPayment" :showFrom="showFrom" />
      <PaymentsDisplay :items="paymentsList" />
    </div>
  </main>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay'
import AddPaymentForm from './components/AddPaymentForm'
import Button from './components/Button'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Button
  },
  data () {
    return {
      paymentsList: [],
      showFrom: false
    }
  },
  methods: {
    fetchData () {
      return [
        {
          id: 1,
          date: '28.03.2020',
          category: 'Food',
          price: 169
        },
        {
          id: 2,
          date: '24.03.2020',
          category: 'Transport',
          price: 360
        },
        {
          id: 3,
          date: '23.03.2020',
          category: 'Food',
          price: 532
        },
        {
          id: 4,
          date: '21.03.2020',
          category: 'Transport',
          price: 162
        },
        {
          id: 5,
          date: '2o.03.2020',
          category: 'Transport',
          price: 111
        },
        {
          id: 6,
          date: '19.02.2020',
          category: 'Food',
          price: 162
        },
        {
          id: 7,
          date: '13.02.2020',
          category: 'Transport',
          price: 199
        }
      ]
    },
    addNewPayment (data) {
      data.id = this.paymentsList[this.paymentsList.length - 1].id + 1
      this.paymentsList = [...this.paymentsList, data]
    },
    clicked () {
      this.showFrom = !this.showFrom
    }
  },
  created () {
    this.paymentsList = this.fetchData()
  }
}
</script>
