<template>
	<div>
		<h3>Nm: {{ carName }}</h3>
		<p>Yar:  {{carYear}} </p>
	</div>
</template>

<script>
export default {
	data(){
		return{
			carName: 'Ford',
			carYear: '2015'
		}
	}
}
</script>