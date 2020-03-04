<template>
  <div id="app">
    <!-- switch组件 -->
    <ol-switch
      v-model="active"
      name="username"
    ></ol-switch>

    <ol-switch
      v-model="active"
      name="name"
      active-color="yellow"
      inactive-color="red">
    </ol-switch>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      active: false
    }
  },
}
</script>

<style lang="scss" scoped>

</style>