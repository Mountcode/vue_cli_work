<template>
  <div>
    <app-counter></app-counter>
    <app-secondCounter></app-secondCounter>
    <hr/>
    <app-actions></app-actions>
  </div>
</template>

<script>
import Counter from './Counter'
  import Actions from './Actions'
  import SecondCounter from './SecondCounter'

export default {
 components:{
   appCounter: Counter,
   appActions: Actions,
   appSecondCounter: SecondCounter
 }
}
</script>

<style>

</style>
