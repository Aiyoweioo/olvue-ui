import Vue from 'vue'
import App from './App.vue'
// import OlVue from '../components/index'
import { OlButton, OlRadio, OlRadioGroup } from '../components/index'

Vue.config.productionTip = false
// Vue.use(OlVue)
Vue.use(OlButton)
Vue.use(OlRadio)
Vue.use(OlRadioGroup)
new Vue({
  render: h => h(App)
}).$mount('#app')
