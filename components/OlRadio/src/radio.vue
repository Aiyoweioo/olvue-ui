<template>
  <label class="ol-radio" :class="{'is-checked': label === modelValue}">
    <span class="ol-radio__input">
      <span class="ol-radio__inner"></span>
      <input
        type="radio"
        class="ol-radio__original"
        :value="label"
        :name="name"
        v-model="modelValue"
      >
    </span>
    <span class="ol-radio__label">
      <slot></slot>
      <!-- 如果没有传入内容，就将label当成内容 -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'OlRadio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  computed: {
    modelValue: {
      get () {
        // 如果radio被radioGroup包裹，就取来自radioGroup的值
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // 触发radio组件注册的input事件
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    // 判断radio是否被radio-group包裹，返回布尔值
    isGroup () {
      return !!this.RadioGroup
    }
  },
  props: {
    label: {
      type: [String, Boolean, Number],
      default: ''
    },
    value: {
      type: [String, Boolean, Number],
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.ol-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .hm-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .ol-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .ol-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .ol-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.ol-radio.is-checked {
  .ol-radio__input {
    .ol-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .ol-radio__label {
    color: #409eff;
  }
}
</style>
