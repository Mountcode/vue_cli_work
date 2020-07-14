import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import store from './store'

Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:3000/'

new Vue({ 
  el: '#app',
  store,
  render: h => h(App),
})


