<template>
  <div>
      <h1>Parent: {{carName}}</h1>
      <app-counter></app-counter>
      <app-car 
      :carName="carName"
      :carYear="carYear"
      :changeFunc="changeNameTo"
      @nameChanged="carName = $event"
      ></app-car>
  </div>
</template>

<script>
import Car from './Car.vue'
import Counter from './Counter.vue'

export default {
  data () {
    return {
      carName: 'Ford',
      carYear: 2015,
    }
  }, 
  methods:{
    changeNameTo(){
      this.carName = 'Audi'
    }
  },
  components:{
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style>

</style>
