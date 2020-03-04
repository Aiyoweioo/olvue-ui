<template>
  <div id="app">
    <ol-dialog title="温馨提示"></ol-dialog>

    <ol-dialog>
      <template v-slot:title>
        <h2>注意</h2>
      </template>
    </ol-dialog>

    <ol-button type="primary" @click="visible=true">点击显示对话框</ol-button>
    <ol-dialog width="20%" top="100px" :visible.sync="visible">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <ol-button type="primary" @click="visible=false">确认</ol-button>
        <ol-button @click="visible=false">取消</ol-button>
      </template>
    </ol-dialog>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
