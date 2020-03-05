<template>
  <div class="ol-form-item">
    <label
      class="ol-form-item__label"
      :style="{width: this.form.labelWidth}"
    >{{label}}</label>
    <div class="ol-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OlFormItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: { type: String }
  },
  inject: ['form']
}
</script>

<style lang="scss" scoped>
  .ol-form-item {
    margin-bottom: 25px;
    .ol-form-item__label {
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .ol-form-item__content {
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidden;
    }
  }
  .ol-form-label-required:before {
    content: '*';
    color: red;
  }
  .ol-form-message {
    font-size: 12px;
    color: red;
  }
</style>
