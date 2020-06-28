import Vue from 'vue'
import App from './App.vue'
import vuepfc from '../lib'

Vue.config.productionTip = false
Vue.use(vuepfc)
new Vue({
  render: h => h(App)
}).$mount('#app')
