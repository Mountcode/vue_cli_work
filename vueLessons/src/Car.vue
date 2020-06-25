<template>
	<div class='car'>
		<h3>Name: {{ carName }} \ {{reverseName}} </h3>
		<p>Year:  {{carYear}} </p>
		<button @click="changeName">cng</button>
		<button @click="changeFunc()">cng2</button>
		<button @click="updateCnt()">Count++</button>
	</div>
</template>

<script>
import {eventEmitter} from './main.js'

export default {
	props:{
		carName: {
			type: String,
			required: true,
		},
		carYear: Number,
		changeFunc: Function 
	},
	methods:{
		changeName(){
			this.carName = 'Mazda'
			this.$emit('nameChanged',this.carName);
		},
		updateCnt(){
			eventEmitter.$emit('counterUpd')
		}
	},
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