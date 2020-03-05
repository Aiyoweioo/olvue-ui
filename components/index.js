/** 包的入口 */
// 定义install函数，接收 Vue 作为参数，如果使用 use 注册插件，则所有的组件都会被注册

import OlRow from './OlRow/index'
import OlCol from './OlCol/index'
import OlButton from './OlButton/index'
import OlDialog from './OlDialog/index'
import OlInput from './OlInput/index'
import OlSwitch from './OlSwitch/index'
import OlRadio from './OlRadio/index'
import OlRadioGroup from './OlRadioGroup/index'
import OlCheckbox from './OlCheckbox/index'
import OlCheckboxGroup from './OlCheckboxGroup/index'
import OlFormItem from './OlFormItem/index'
import OlForm from './OlForm/index'
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
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
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
}
export default {
  install,
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
}
