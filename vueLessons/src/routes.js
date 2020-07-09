import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Cars from './pages/Cars.vue'

export default new VueRouter({
	routes: [
		{
			path: '',
			component: Home
		},
		{
			path: '/cars',
			component: Cars
		}
	],
	mode: 'history'
})