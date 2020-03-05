<template>
  <div id="app">
    <div class="row">
      <ol-button @click="fn">默认</ol-button>
      <ol-button type="primary">主要</ol-button>
      <ol-button type="success">成功</ol-button>
      <ol-button type="warning">警告</ol-button>
      <ol-button type="danger">危险</ol-button>
      <ol-button type="info">信息</ol-button>
      <ol-button type="default">信息</ol-button>
    </div>
    <div class="row">
      <ol-button plain>默认</ol-button>
      <ol-button type="primary" plain>主要</ol-button>
      <ol-button type="success" plain>成功</ol-button>
      <ol-button type="warning" plain>警告</ol-button>
      <ol-button type="danger" plain>危险</ol-button>
      <ol-button type="info" plain>信息</ol-button>
      <ol-button type="default" plain>信息</ol-button>
    </div>
    <div class="row">
      <ol-button round>默认</ol-button>
      <ol-button round type="primary">主要</ol-button>
      <ol-button round type="success">成功</ol-button>
      <ol-button round type="warning">警告</ol-button>
      <ol-button round type="danger">危险</ol-button>
      <ol-button round type="info">信息</ol-button>
      <ol-button round type="default">信息</ol-button>
    </div>
    <div class="row">
      <ol-button circle>中</ol-button>
      <ol-button circle type="primary">中</ol-button>
      <ol-button circle type="success">中</ol-button>
      <ol-button circle type="warning">中</ol-button>
      <ol-button circle type="danger">中</ol-button>
      <ol-button circle type="info">中</ol-button>
      <ol-button circle type="default">中</ol-button>
    </div>
    <div class="row">
      <ol-button icon="ol-icon-apple">默认</ol-button>
      <ol-button icon="ol-icon-apple" type="primary">主要</ol-button>
      <ol-button icon="ol-icon-apple" type="success">成功</ol-button>
      <ol-button icon="ol-icon-apple" type="warning">警告</ol-button>
      <ol-button icon="ol-icon-apple" type="danger">危险</ol-button>
      <ol-button icon="ol-icon-apple" type="info">信息</ol-button>
      <ol-button icon="ol-icon-apple" type="default">信息</ol-button>
    </div>
    <div class="row">
      <ol-button icon="ol-icon-apple" circle></ol-button>
      <ol-button icon="ol-icon-apple" circle type="primary"></ol-button>
      <ol-button icon="ol-icon-apple" circle type="success"></ol-button>
      <ol-button icon="ol-icon-apple" circle type="warning"></ol-button>
      <ol-button icon="ol-icon-apple" circle type="danger"></ol-button>
      <ol-button icon="ol-icon-apple" circle type="info"></ol-button>
      <ol-button icon="ol-icon-apple" circle type="default"></ol-button>
    </div>
    <div class="row">
      <ol-button icon="ol-icon-apple" disabled></ol-button>
      <ol-button icon="ol-icon-apple" disabled type="primary"></ol-button>
      <ol-button icon="ol-icon-apple" disabled type="success"></ol-button>
      <ol-button icon="ol-icon-apple" disabled type="warning"></ol-button>
      <ol-button icon="ol-icon-apple" disabled type="danger"></ol-button>
      <ol-button icon="ol-icon-apple" disabled type="info"></ol-button>
      <ol-button icon="ol-icon-apple" disabled type="default"></ol-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo',
  methods: {
    fn () {
      console.log(123)
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .ol-button {
    margin-right: 20px;
  }
}
</style>
