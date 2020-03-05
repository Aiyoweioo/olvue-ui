import OlRadio from './src/radio'

/* istanbul ignore next */
OlRadio.install = function (Vue) {
  Vue.component(OlRadio.name, OlRadio)
}

export default OlRadio
