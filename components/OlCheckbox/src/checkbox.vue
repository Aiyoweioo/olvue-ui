<template>
  <label class="ol-checkbox" :class="{'is-checked': isChecked}">
    <span class="ol-checkbox__input">
      <span class="ol-checkbox__inner"></span>
      <input
        type="checkbox"
        class="ol-checkbox__original"
        :name="name"
        v-model="modelValue"
        :value="label"
      >
    </span>
    <span class="ol-checkbox__label">
      <slot></slot>
      <!-- 如果没有传入内容，就将label当成内容 -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'OlCheckbox',
  inject: {
    checkboxGroup: {
      default: ''
    }
  },
  computed: {
    modelValue: {
      get () {
        // 如果checkbox被checkboxGroup包裹，就取来自checkboxGroup的值
        return this.isGroup ? this.checkboxGroup.value : this.value
      },
      set (value) {
        // 触发checkbox组件注册的input事件
        this.isGroup ? this.checkboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    // 判断checkbox是否被checkbox-group包裹，返回布尔值
    isGroup () {
      return !!this.checkboxGroup
    },
    // 判断哪一个checkbox被选中
    isChecked () {
      // 若checkbox被checkbox-group包裹，在modelValuelabel，就说明选中
      // 若checkbox没有checkbox-group包裹，直接返回modelValue
      return this.isGroup ? this.modelValue.includes(this.label) : this.modelValue
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
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
.ol-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .ol-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .ol-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    .ol-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .ol-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
// 选择的样式
.ol-checkbox.is-checked {
  .ol-checkbox__input {
    .ol-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .ol-checkbox__label {
    color: #409eff;
  }
}
</style>
