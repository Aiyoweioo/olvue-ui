import OlSwitch from './src/switch'

/* istanbul ignore next */
OlSwitch.install = function (Vue) {
  Vue.component(OlSwitch.name, OlSwitch)
}

export default OlSwitch
