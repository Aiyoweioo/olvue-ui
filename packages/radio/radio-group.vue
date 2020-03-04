<template>
  <div class="ol-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'OlRadioGroup',
  // 防止radioGroup与radio不是父子组件关系，使用provide
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }

}
</script>

<style lang="scss" scoped>

</style>
