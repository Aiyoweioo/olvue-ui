<template>
  <label class="ol-switch"
  @click="handleClick"
  :class="{'is-checked': value}"
  for="span"
  @change="handleChange">
    <input type="checkbox" :name="name" class="ol-switch__input"  :value="value">
    <span class="ol-switch__core" ref="core">
      <span class="ol-switch__button"></span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'OlSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'text'
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 处理点击事件： 1. 修改来自父组件的value值 2. 修改开关的背景色
    async handleClick () {
      this.$emit('input', !this.value)
      // 点击修改开关的颜色
      // console.log(this.value)
      // 等待视图的value发生改变才能修改开关的颜色
      // 数据更新后，等待DOM更新，再改变开关的颜色
      await this.$nextTick()
      this.changeColor()
      // this.$refs.switchCheckBox.checked = this.value
    },
    // 修改开关的颜色
    changeColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    },
    handleChange (e) {
      this.$emit('change', e.target.value)
    }
  },
  mounted () {
    // 修改开关的颜色
    this.changeColor()
    // // checkbox与开关同步
    // this.$refs.switchCheckBox = this.value
  }
}
</script>

<style lang="scss" scoped>
.ol-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .ol-switch__input {
    position: absolute;
     width: 0;
     height: 0;
     opacity: 0;
     margin: 0;
  }
  .ol-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6; cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .ol-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.ol-switch.is-checked {
  .ol-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .ol-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
