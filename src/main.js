import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue' //installed
import 'bootstrap/dist/css/bootstrap.css' // installed
import 'bootstrap-vue/dist/bootstrap-vue.css' //installed
import VueScrollTo from 'vue-scrollto' //installed

Vue.config.productionTip = false
Vue.use(BootstrapVue) //installed
Vue.use(VueScrollTo) //installed

new Vue({
  render: h => h(App),
}).$mount('#app')
