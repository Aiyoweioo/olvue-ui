<template>
  <div id="app">
    <!-- radio组件 -->
    <ol-radio label="1" v-model="gender">男</ol-radio>
    <ol-radio label="0" v-model="gender">女</ol-radio>
    <ol-radio label="1" v-model="gender"></ol-radio>
    <ol-radio label="0" v-model="gender"></ol-radio>

    <!-- radioGroup组件 -->
    <ol-radio-group v-model="gender">
      <ol-radio label="1">男</ol-radio>
      <ol-radio label="0">女</ol-radio>
    </ol-radio-group>

    <ol-radio label="1" v-model="gender">男</ol-radio>
    <ol-radio label="0" v-model="gender">女</ol-radio>

    <ol-radio-group v-model="gender">
      <div>
        <ol-radio label="1">男</ol-radio>
        <ol-radio label="0">女</ol-radio>
      </div>
    </ol-radio-group>

  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      gender: '1'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
