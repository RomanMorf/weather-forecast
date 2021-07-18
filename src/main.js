import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGeolocation from 'vue-browser-geolocation'

Vue.use(VueGeolocation);
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
