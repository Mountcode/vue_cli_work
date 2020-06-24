import Vue from 'vue'
import App from './App.vue'


Vue.component('app-car', Car)

new Vue({
  el: '#app',
  render: h => h(App)
})
