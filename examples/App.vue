<template>
  <div id="app">
        <!-- form组件 -->
    <!-- <div class="wrapper">
      <ol-form :model="model" label-width="100px">
        <ol-form-item label="用户名" prop="name">
          <ol-input placeholder="请输入用户名" v-model="model.username"></ol-input>
        </ol-form-item>
        <ol-form-item label="邮箱" prop="email">
          <ol-input placeholder="请输入邮箱" v-model="model.email"></ol-input>
        </ol-form-item>
        <ol-form-item label="性别"> -->
          <ol-radio-group v-model="gender">
            <ol-radio label="1">男</ol-radio>
            <ol-radio label="0">女</ol-radio>
          </ol-radio-group>
          <ol-button type="primary">点击</ol-button>
        <!-- </ol-form-item>
      </ol-form>
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      gender: '1',
      model: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  width: 300px;
}
</style>
