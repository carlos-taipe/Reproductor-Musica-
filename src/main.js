import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import vuetify from './plugins/vuetify'
import axios from 'axios';

Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
