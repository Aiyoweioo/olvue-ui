/**包的入口 */
// 定义install函数，接收 Vue 作为参数，如果使用 use 注册插件，则所有的组件都会被注册

import OlRow from './row.vue'
import OlCol from './col.vue'
import OlButton from './button.vue'
import OlDialog from './dialog.vue'
import OlInput from './input.vue'
import OlSwitch from './switch.vue'
import OlRadio from './radio/radio.vue'
import OlRadioGroup from './radio/radio-group.vue'
import OlCheckbox from './checkbox/checkbox.vue'
import OlCheckboxGroup from './checkbox/checkbox-group.vue'
import OlFormItem from './form/form-item.vue'
import OlForm from './form/form.vue'
import './fonts/font.scss'

const components = [
  OlRow,
  OlCol,
  OlButton,
  OlDialog,
  OlInput,
  OlSwitch,
  OlRadio,
  OlRadioGroup,
  OlCheckbox,
  OlCheckboxGroup,
  OlFormItem,
  OlForm
]
const install = function (Vue) {
  // 全局注册所有的组件
  components.forEach( (item) => {
    Vue.component(item.name, item)
  })
}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}