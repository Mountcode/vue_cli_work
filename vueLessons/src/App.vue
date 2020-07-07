<template>
  <div class="container">
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input 
        type="text" 
        id="email" 
        class="form-control"
        @input="$v.email.$touch()"
        v-model="email"
        >
      </div>
      <pre>
        {{ $v.email }}
      </pre>
    </form>
  </div> 
</template>

<script>
import {required} from 'vuelidate/lib/validators'

export default {
  data(){
    return{
      email: ''
    }
  },
  validations:{
    email:{
      required: required
    }
  }
}
</script>

<style>

</style>
