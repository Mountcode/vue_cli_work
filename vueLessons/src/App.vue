<template>
  <div class="container">
    <form class="pt-3" @submit.prevent="onSubmit">
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
        <div class="invalid-feedback" v-if="!$v.email.uniqEml">Такой уже есть</div>
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
      <button class="btn btn-success" 
      type="submit"
      :disabled="$v.$invalid"
      >
      Отправить
      </button>
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
  methods:{
    onSubmit(){
      console.log('Email', this.email)
      console.log('password', this.password)
    }
  },
  validations:{
    email:{
      required,
      email,
      uniqEml: function(newEmail){
        if (newEmail === '') return true

        return new Promise((resolve, reject) =>{
          setTimeout(() =>{
            const value = newEmail !== 'test@mail.ru'
            resolve(value)
          },1000)
        })
      }
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
