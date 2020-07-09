<template>
	<div>
		<h1>Cars id {{ id }}</h1>
	
	</div>
</template>

<script>
	export default{
		data(){
			return{
				id: this.$router.currentRoute.params['id']
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