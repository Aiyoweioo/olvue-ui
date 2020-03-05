<template>
  <div id="app">
    <!-- input组件使用-->
    <div class="ol-input__wrapper">
      <ol-input name="username" placeholder="请输入姓名" />

      <ol-input type="password" name="password" placeholder="请输入密码" />

      <ol-input type="text" name="username" placeholder="请输入姓名" disabled />

      <ol-input type="text" name="username" placeholder="请输入姓名" v-model="username" />

      <ol-input type="text" name="username" placeholder="请输入姓名" v-model="username" clearable />

      <ol-input type="password" name="password" placeholder="请输入密码" v-model="password" showPassword />
    </div>
    <!-- textarea组件 -->
    <div class="ol-input__wrapper">
      <ol-input type="textarea" name="username" placeholder="请输入姓名" rows=1 />
    </div>

    <div class="ol-input__wrapper">
      <ol-input type="textarea" name="username" placeholder="请输入姓名" rows=3 disabled />
    </div>

    <div class="ol-input__wrapper">
      <ol-input type="textarea" name="username" placeholder="请输入姓名" rows=2 autosize />
    </div>

    <div class="ol-input__wrapper">
      <ol-input type="textarea" name="username" placeholder="请输入姓名" rows=4 autosize />
    </div>
  </div>
</template>

<script>

export default {
  name: 'demo',
  data () {
    return {
      username: 'olivia',
      password: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.ol-input__wrapper {
  .ol-input, .ol-textarea {
    margin-right: 20px;
    margin-bottom: 10px;
    width: 200px;
  }
}

</style>