<template>
  <div class="container pt-2">
    <div class="form-group">
      <label for="name">
        <input type="text" id="name" v-model.trim="carName">
      </label>
      <label for="name">
        <input type="text" id="name" v-model.trim="carYear">
      </label>
      <button class="btn" @click="createCar">Create</button>
      <button @click="load">Load</button>
      <hr>
      <ul>
        <li
          v-for="car of cars"
          :key="car.id"
        >
          <strong>{{car.name}} - {{car.year}}</strong>
        </li>
      </ul>
    </div>
  </div> 
</template>

<script>
export default {
 data(){
   return{
     carName: '',
     carYear:2018,
     cars: [],
     resource: null
   }
 },
 methods:{
    createCar(){
      const car ={
        name: this.carName,
        year: this.carYear
      }
      this.resource.save({},car)
    },
    load(){
      this.resource.get().then(response => response.json() )
        .then(cars => this.cars = cars)
    }
  },
  created (){
    this.resource = this.$resource('cars')
  }
}
</script>

<style>

</style>
