<template>
  <div class="container">
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input 
        type="text" 
        id="email" 
        class="form-control"
        :class="{'is-invalid': $v.email.$error}" 
        @blur="$v.email.$touch()"
        v-model="email"
        >
        <div class="invalid-feedback" v-if="!$v.email.required">
          required
          </div>
        <div class="invalid-feedback" v-if="!$v.email.email">bad email</div>
      </div>
      <div class="form-group">
        <label for="password">password</label>
        <input 
        type="password" 
        id="password" 
        class="form-control"
        :class="{'is-invalid': $v.password.$error}" 
        @blur="$v.password.$touch()"
        v-model="password"
        >
        <!-- <div class="invalid-feedback" v-if="!$v.password.minLenght">
          Min is {{ $v.password.$params.minLenght.min }}. Not {{ password.lenght }}
        </div> -->
      </div>
    </form>
  </div> 
</template>

<script>
import {required, email, minLenght} from 'vuelidate/lib/validators'

export default {
  data(){
    return{
      email: '',
      password: ''
    }
  },
  validations:{
    email:{
      required,
      email
    },
    password:{
      minLenght: minLenght(6)
    }
  }
}
</script>

<style>

</style>
