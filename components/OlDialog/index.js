import OlDialog from './src/dialog'

/* istanbul ignore next */
OlDialog.install = function (Vue) {
  Vue.component(OlDialog.name, OlDialog)
}

export default OlDialog
