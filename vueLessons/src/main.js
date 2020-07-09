import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './routes'

Vue.use(VueRouter)
Vue.use(Vuelidate)

new Vue({ 
  el: '#app',
  render: h => h(App),
  router
})


