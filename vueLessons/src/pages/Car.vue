<template>
	<div>
		<h1>Cars id {{ id }}</h1>
			<button class="btn btn-sm btn-info mb-2" @click="goBackTocars">Back</button>
			<br/>
			<!-- <router-link
				tag="button"
			 	class="btn btn-info mt-2"
				:to="'/car/' + id + '/full'"
			>
				 Full info
			</router-link> -->

			<router-link
				tag="button"
			 	class="btn btn-info mt-2"
				:to="{name: 'carFull', params: {id: id}}"
			>
				 Full info
			</router-link>

			<hr>
			<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				id: this.$router.currentRoute.params['id']
			}
		},
		methods:{
			goBackTocars(){
				this.$router.push('/cars')
			}
		},
		watch:{
			$route (toR, FromR) {
				this.id = toR.params['id']
			}
		}
	}
</script>

<style scoped>

</style>