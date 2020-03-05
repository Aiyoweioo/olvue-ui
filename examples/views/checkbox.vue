<template>
  <div id="app">
    <!-- checkbox组件 -->
    <ol-checkbox v-model="active">是否选中</ol-checkbox>
    <ol-checkbox v-model="active"></ol-checkbox>

    <ol-checkbox-group v-model="fruit">
      <ol-checkbox label="苹果"></ol-checkbox>
      <ol-checkbox label="香蕉"></ol-checkbox>
      <ol-checkbox label="橙子"></ol-checkbox>
    </ol-checkbox-group>
  </div>
</template>

<script>

export default {
  name: 'demo',
  data () {
    return {
      active: false,
      fruit: ['苹果', '香蕉', '橙子']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
