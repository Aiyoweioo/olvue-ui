<template>
  <div class="ol-row"
    :style="[getGutterStyle, getJustifyStyle]"
    :class="getTypeClass"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'OlRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: '',
      validator: function (val) {
        return ['flex', ''].indexOf(val) !== -1
      }
    },
    justify: {
      type: String,
      default: 'start',
      validator: function (val) {
        return ['start', 'center', 'end', 'space-round', 'space-between']
      }
    }
  },
  computed: {
    getGutterStyle () {
      if (!this.gutter) {
        return ''
      }
      const value = -(this.gutter / 2) + 'px'
      return {
        marginLeft: value,
        marginRight: value
      }
    },
    getTypeClass () {
      if (this.type === 'flex') {
        return 'el-row--' + this.type
      }
      return ''
    },
    getJustifyStyle () {
      if (this.justify !== '') {
        let justifyStyle = ''
        switch (this.justify) {
          case 'start':
            justifyStyle = {
              justifyContent: 'flex-start'
            }
            break
          case 'center':
            justifyStyle = {
              justifyContent: 'center'
            }
            break
          case 'end':
            justifyStyle = {
              justifyContent: 'flex-end'
            }
            break
          case 'space-around':
            justifyStyle = {
              justifyContent: 'space-around'
            }
            break
          case 'space-between':
            justifyStyle = {
              justifyContent: 'space-between'
            }
            break
          case 'space-evenly':
            justifyStyle = {
              justifyContent: 'space-evenly'
            }
            break
          default:
            justifyStyle = {
              justifyContent: this.justify
            }
            break
        }
        return justifyStyle
      }
      return ''
    }
  }
}
</script>

<style lang='scss' scoped>
.el-row--flex {
  display: flex;
}
</style>
