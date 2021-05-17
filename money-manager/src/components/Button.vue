<template>
  <div>
    <button v-if="!showFrom" @click="onAddClick" class="btn btn-success btn-lg">ADD NEW COST</button>
    <button v-if="showFrom" @click="onAddClick" class="btn btn-info btn-lg">HIDE FORM</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    showFrom: Boolean
  },
  methods: {
    onAddClick () {
      this.$emit('clicked')
    }
  }
}
</script>
