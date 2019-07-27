import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/flexble'
import axios from 'axios'
import VueTouch from 'vue-touch'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(MintUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(VueTouch,{name:'v-touch'})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
