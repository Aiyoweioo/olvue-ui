<template>
<div id="app">
  <!-- 布局 -->
  <h2>基础布局</h2>
  <ol-row>
    <ol-col :span="24"><div class="grid-content bg-purple-dark"></div></ol-col>
  </ol-row>
  <ol-row>
    <ol-col :span="12"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="12"><div class="grid-content bg-purple-light"></div></ol-col>
  </ol-row>
  <ol-row>
    <ol-col :span="8"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="8"><div class="grid-content bg-purple-light"></div></ol-col>
    <ol-col :span="8"><div class="grid-content bg-purple"></div></ol-col>
  </ol-row>
  <ol-row>
    <ol-col :span="6"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="6"><div class="grid-content bg-purple-light"></div></ol-col>
    <ol-col :span="6"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="6"><div class="grid-content bg-purple-light"></div></ol-col>
  </ol-row>
  <ol-row>
    <ol-col :span="4"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="4"><div class="grid-content bg-purple-light"></div></ol-col>
    <ol-col :span="4"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="4"><div class="grid-content bg-purple-light"></div></ol-col>
    <ol-col :span="4"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="4"><div class="grid-content bg-purple-light"></div></ol-col>
  </ol-row>

  <h2>混合布局</h2>
  <ol-row :gutter="20">
    <ol-col :span="16"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="8"><div class="grid-content bg-purple"></div></ol-col>
  </ol-row>
  <ol-row :gutter="20">
    <ol-col :span="8"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="8"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="4"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="4"><div class="grid-content bg-purple"></div></ol-col>
  </ol-row>
  <ol-row :gutter="20">
    <ol-col :span="4"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="16"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="4"><div class="grid-content bg-purple"></div></ol-col>
  </ol-row>

  <h2>分栏偏移</h2>
  <!-- 分栏间隔 -->
  <ol-row :gutter="20">
    <ol-col :span="6"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></ol-col>
  </ol-row>
  <ol-row :gutter="20">
    <ol-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></ol-col>
  </ol-row>
  <ol-row :gutter="20">
    <ol-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></ol-col>
  </ol-row>

  <h2>混合布局</h2>
  <ol-row :gutter="20">
    <ol-col :span="16"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="8"><div class="grid-content bg-purple"></div></ol-col>
  </ol-row>
  <ol-row :gutter="20">
    <ol-col :span="8"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="8"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="4"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="4"><div class="grid-content bg-purple"></div></ol-col>
  </ol-row>
  <ol-row :gutter="20">
    <ol-col :span="4"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="16"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="4"><div class="grid-content bg-purple"></div></ol-col>
  </ol-row>

  <h2>flex布局</h2>
  <!-- flex布局 -->
  <ol-row type="flex" class="row-bg">
    <ol-col :span="6"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="6"><div class="grid-content bg-purple-light"></div></ol-col>
    <ol-col :span="6"><div class="grid-content bg-purple"></div></ol-col>
  </ol-row>
  <ol-row type="flex" class="row-bg" justify="center">
    <ol-col :span="6"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="6"><div class="grid-content bg-purple-light"></div></ol-col>
    <ol-col :span="6"><div class="grid-content bg-purple"></div></ol-col>
  </ol-row>
  <ol-row type="flex" class="row-bg" justify="end">
    <ol-col :span="6"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="6"><div class="grid-content bg-purple-light"></div></ol-col>
    <ol-col :span="6"><div class="grid-content bg-purple"></div></ol-col>
  </ol-row>
  <ol-row type="flex" class="row-bg" justify="space-between">
    <ol-col :span="6"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="6"><div class="grid-content bg-purple-light"></div></ol-col>
    <ol-col :span="6"><div class="grid-content bg-purple"></div></ol-col>
  </ol-row>
  <ol-row type="flex" class="row-bg" justify="space-around">
    <ol-col :span="6"><div class="grid-content bg-purple"></div></ol-col>
    <ol-col :span="6"><div class="grid-content bg-purple-light"></div></ol-col>
    <ol-col :span="6"><div class="grid-content bg-purple"></div></ol-col>
  </ol-row>
<div>
</template>

<script>
export default {
  name: 'demo'
}
</script>

<style lang="scss" scoped>
.ol-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.ol-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>