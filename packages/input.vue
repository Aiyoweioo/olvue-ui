<template>
  <div v-if="type==='textarea'"
    class="ol-textarea" :class="{'ol-input--suffix': showSuffix}">
    <textarea
    class="ol-textarea__inner"
    :name="name"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="value"
    v-bind="$attrs"
    ref="textarea"
    :style="getInnerTextAreaStyle"
    @input="handleTextAreaInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange">
    </textarea>
  </div>
  <div v-else class="ol-input" :class="{'ol-input--suffix': showSuffix}">
    <input
    class="ol-input__inner"
    :class="{'is-disabled': disabled}"
    :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
    :name="name"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="value"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
    >
    <span class="ol-input__suffix" v-if="showSuffix">
      <i class="ol-input__icon ol-icon-circle-close" v-if="clearable && value" @click="handleClear"></i>
      <i class="ol-input__icon ol-icon-view" v-if="showPassword" @click="handlePassword"
      :class="{'ol-icon-view-active': passwordVisible}"></i>
    </span>
  </div>
</template>

<script>
// 隐藏样式    v-on:keyup="handleTextAreaKeyDown"
const HIDDEN_STYLE = `
  height:0 !important;
  overflow:hidden !important;
  visibility:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top: 0 !important;
  right:0 !important;
`

const CONTEXT_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-size',
  'font-weight',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'boxing-sizing'
]

export default {
  name: 'OlInput',
  data () {
    return {
      // 控制是否显示密码框
      passwordVisible: false
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    autosize: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    handleClear (e) {
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    },
    handleFocus (e) {
      this.focused = true
      this.$emit('focus', e)
    },
    handleBlur (e) {
      this.$emit('blur', e)
    },
    handleChange (e) {
      this.$emit('change', e.target.value)
    },
    // 计算节点的样式
    calcNodeStyle (el) {
      const style = window.getComputedStyle(el)
      const contextStyle = CONTEXT_STYLE
        .map(name => `${name}:${style.getPropertyValue(name)}`)
        .join(';')
      return contextStyle
    },
    calcTextAreaAutoHeight (target) {
      // 如果没有有自适应高度这个属性，就不需要计算
      if (!this.autosize) {
        return
      }
      if (!this.tempTextArea) { // 保证tempTextArea只创建一次
        this.tempTextArea = document.createElement('textarea')
        document.body.appendChild(this.tempTextArea)
      }
      // 获取textarea的样式
      const contextStyle = this.calcNodeStyle(target)
      this.tempTextArea.value = target.value
      // 将样式设置到tempTextArea并且将tempTextArea隐藏
      this.tempTextArea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`)
      // 重新计算当前textarea的高度：tempTextArea的滚动高度（内容上下高度+padding）+ tempTextArea的border高度
      const height = this.tempTextArea.scrollHeight + (
        this.tempTextArea.offsetHeight - this.tempTextArea.clientHeight)
      // 将计算的高度值重新赋值给textarea，这样就不会出现滚动条
      target.style.height = height + 'px'
      // console.log('calc height:', height)
    },
    handleTextAreaInput (event) {
      this.$emit('input', event.target.value)
      this.calcTextAreaAutoHeight(event.target)
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    },
    // 设置textarea的最小高度
    getInnerTextAreaStyle () {
      return {
        minHeight: '33px'
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.ol-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .ol-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &:hover {
      color: #909399;
    }
  }
}
.ol-input--suffix {
  .ol-input__inner {
    padding-right: 30px;
  }
  .ol-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
    .ol-icon-view-active {
      color: #66b1ff;
    }
  }
}
.ol-textarea {
  width: 100%;
  vertical-align: bottom;
  display: inline-block;
  font-size: 14px;
  .ol-textarea__inner {
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    -webkit-transition: border-color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: border-color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
    .ol-textarea__inner::placeholder {
      color: #c0c4cc;
    }
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &:hover {
      border-color: #c8c4cc;
    }
  }
}
</style>
