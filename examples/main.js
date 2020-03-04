import Vue from 'vue'
import App from './App.vue'
import OlUI from '../packages'

Vue.config.productionTip = false
Vue.use(OlUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
