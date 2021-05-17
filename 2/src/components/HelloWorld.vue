<template>
  <div class="hello">
    <input v-model="operand1" />
    <input v-model="operand2" />
    = {{ result }}
    <div>
      <button
        v-for="op in operations"
        :key="op"
        @click="calculate(op)"
      >{{ op }}</button>
    </div>
    <input type="checkbox" id="checkbox" v-model="viewKeyboard">
    <label for="checkbox">Отобразить экранную клавиатуру</label>
    <div v-if="viewKeyboard">
      <button
        v-for="(n, i) in 10"
        :key="i"
        @click="addNumber(String(i))"
      >{{ i }}</button>
      <button
        @click="deleteNumber()"
      >&larr;</button>
      <br>
      <input type="radio" id="1" value="1" v-model.number="operand">
      <label for="1">Операнд 1</label>
      <input type="radio" id="2" value="2" v-model.number="operand">
      <label for="2">Операнд 2</label>

    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    operand: 1,
    operand1: '0',
    operand2: '0',
    result: 0,
    operations: ['+', '-', '/', '*', '^', '//'],
    viewKeyboard: false
  }),
  props: {
  },
  methods: {
    calculate (op) {
      const operand1 = parseInt(this.operand1)
      const operand2 = parseInt(this.operand2)

      const calcOperations = {
        '+': () => operand1 + operand2,
        '-': () => operand1 - operand2,
        '/': () => operand1 / operand2,
        '*': () => operand1 * operand2,
        '^': () => Math.pow(operand1, operand2),
        '//': () => Math.floor(operand1 / operand2)
      }

      this.result = calcOperations[op]()
    },
    addNumber (number) {
      const operand = this.operand
      if (operand === 1) {
        this.operand1 = (this.operand1 === '0') ? number : this.operand1 + number
      } else {
        this.operand2 = (this.operand2 === '0') ? number : this.operand2 + number
      }
    },
    deleteNumber () {
      const operand = this.operand
      if (operand === 1) {
        if (this.operand1 !== '0') {
          this.operand1 = this.operand1.substring(0, this.operand1.length - 1)
        }
      } else {
        if (this.operand2 !== '0') {
          this.operand2 = this.operand2.substring(0, this.operand2.length - 1)
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

button {
  margin-right: 5px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
