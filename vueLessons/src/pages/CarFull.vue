<template>
	<div>
		<h1>Model: {{ $route.query.name}}</h1>
		<p>year {{year}}</p>
		<div class="scroll">

		</div>
		<h6 id="scroll">yeue</h6>
		<div class="scroll">

		</div>
	</div>
	
</template>

<script>
	export default{
		computed:{
			year() {
				return this.$route.query.year
			}
		},
		beforeRouteEnter (to, fromR, next) {
			console.log('beforeRouterEnter')

			next(true)
		}
	}
</script>

<style scoped>
	.scroll{
		width: 100px;
		height: 1000px;
		background: gray;
	}
</style>