<template>
<!-- .self修饰符避免冒泡， 效果是点击dialog的空白部分也可以实现关闭 -->
  <transition name="dialog-transition">
    <div class="ol-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="ol-dialog" :style="{width,marginTop:top}">
        <div class="ol-dialog__header">
          <slot name="title">
            <span class="ol-dialog__title">{{title}}</span>
          </slot>
          <button class="ol-dialog__headerbtn" @click="handleClose">
            <i class="ol-icon-close"></i>
          </button>
        </div>
        <div class="ol-dialog__body">
          <!-- 这是默认插槽 -->
          <slot></slot>
        </div>
        <div class="ol-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'OlDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .ol-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0,0,0, .5);

    .ol-dialog {
      position: relative;
      margin: 15vh auto 50px;
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,.3);
      box-sizing: border-box;
      width: 30%;

      &__header {
        padding: 20px 20px 10px;
        .ol-dialog__title {
          line-height: 24px;
          font-size: 18px;
          color: #303133;
        }
        .ol-dialog__headerbtn {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 0;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 16px;
          .el-icon-close {
            color: #909399;
          }
        }
      }

      &__body {
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
      }
      &__footer {
        padding: 10px 20px 20px;
        text-align: right;
        box-sizing: border-box;
        ::v-deep .ol-button:first-child {
          margin-right: 20px;
        }
      }
    }
  }
  // 添加dialog显示与隐藏动画
  .dialog-transition-enter-active {
    animation: fade .4s;
  }
  .dialog-transition-leave-active {
    animation: fade .5s reverse;
  }
  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(-20px)
    }
    100% {
      opacity: 1;
      transform: translateY(0px)
    }
  }
</style>
