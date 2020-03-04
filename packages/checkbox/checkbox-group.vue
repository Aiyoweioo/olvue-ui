<template>
  <div class="ol-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'OlCheckboxGroup',
  // 防止checkboxGroup与checkbox不是父子组件关系，使用provide
  provide () {
    return {
      checkboxGroup: this
    }
  },
  props: {
    value: Array
  }

}
</script>

<style lang="scss" scoped>

</style>
