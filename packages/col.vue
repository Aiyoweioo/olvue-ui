<template>
  <div class="ol-col" :class="['ol-col-'+span, 'ol-col-offset-'+offset]"
  :style="getGutterStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'OlCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  computed: {
    getGutterStyle () {
      if (!this.$parent.gutter) {
        return ''
      }
      const value = Math.floor((this.$parent.gutter / 2)) + 'px'
      return {
        paddingLeft: value,
        paddingRight: value
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.ol-col {
  display: inline-block;
  box-sizing: border-box;
}
// 生成ol-col-1到ol-col-24
@for $i from 1 through 24 {
  .ol-col-#{$i} {
    width: 100%/24*$i;
  }
}
// 生成ol-col-offset-1到ol-col-offset-24
@for $i from 1 through 24 {
  .ol-col-offset-#{$i} {
    margin-left: 100%/24*$i;
  }
}
</style>
