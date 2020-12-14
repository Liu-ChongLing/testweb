import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import './plugins/element.js'
import './assets/css/global.css'
import '@/assets/theme/dark'
import '@/assets/theme/theme1'
let echarts = require('echarts');

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

