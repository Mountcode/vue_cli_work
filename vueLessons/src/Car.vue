<template>
	<div class='car'>
		<h3>Name: {{ carName }} \ {{reverseName}} </h3>
		<p>Year:  {{carYear}} </p>
	</div>
</template>

<script>
export default {
	props: ['carName','carYear'],
	computed: {
		reverseName(){
			return this.carName.split('').reverse().join('')
		}
	}
}
</script>

<style>
	.car{
		border:1px solid #000;
		padding: 20px;
	}
	.car h3 {
		margin-bottom: 5px;
	}
</style>