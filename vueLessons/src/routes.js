import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import ErrorCmp from './pages/Error'
import CarFull from './pages/CarFull'

export default new VueRouter({
	routes: [
		{
			path: '',
			component: Home
		},
		{
			path: '/cars',
			component: Cars
		},
		{
			path: '/car/:id',
			component: Car,
			children: [
				{
					path:'full',
					component: CarFull,
					name: 'carFull',
					beforeEnter(to,from,next){
						console.log('beforeEnter')
						if(true){
							next()
						}
					}
				}
			]
		},
		{
			path: '/none',
			redirect: '/cars'
		},
		{
			path: '*', // 404 error 
			component: ErrorCmp
		}
	],
	mode: 'history',
	scrollBehavior (to, from, savedPosition){
		if (savedPosition){
			return savedPosition
		}

		if(to.hash){
			return { selector: to.hash }
		}

		return{
			x: 0,
			y: 500
		}
	}
})