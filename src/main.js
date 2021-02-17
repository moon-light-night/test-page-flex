import Vue from 'vue'
import App from './App.vue'
import 'firebase/auth'
import 'firebase/database'
import '@/profile/main.scss'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
