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
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Min is {{ $v.password.$params.minLength.min }}. Not {{ password.length }}
        </div> 
      </div>

      <div class="form-group">
        <label for="confirmm">confirm password</label>
        <input 
        type="password" 
        id="confirmm" 
        class="form-control"
        :class="{'is-invalid': $v.confirmm.$error}" 
        @blur="$v.confirmm.$touch()"
        v-model="confirmm"
        >
        <div class="invalid-feedback" v-if="!$v.confirmm.sameAs">
          passwords not match
        </div> 
      </div>
    </form>
  </div> 
</template>

<script>


import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'

export default {
  data(){
    return{
      email: '',
      password: '',
      confirmm:''
    }
  },
  validations:{
    email:{
      required,
      email
    },
    password:{
      minLength: minLength(6)
    },
    confirmm:{
      sameAs: sameAs( (vue)=>{
        return vue.password
      } )
    }
  }
}
</script>

<style>

</style>
