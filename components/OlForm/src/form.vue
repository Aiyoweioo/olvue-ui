<template>
  <div class="ol-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'OlForm',
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    },
    labelWidth: {
      type: String,
      default: '100px'
    }
  }
}
</script>

<style>

</style>
