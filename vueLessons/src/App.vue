<template>
  <div class="container">
    <ul class="nav nav-tabs">
      <!--Это способ дать Active класс на ссылку если это нужно родителю -->
      <!-- <router-link tag="li" class="nav-item" exact to="/" active-class="active">
        <a class="nav-link">Home</a>
      </router-link> -->

      <li class="nav-item">
        <router-link class="nav-link" exact  active-class="active" :to="'/'">Home</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" exact  active-class="active" :to="'/cars'">Cars</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" exact  active-class="active" :to="'/car/3'">Cars 3</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" exact  active-class="active" :to="'/car/4'">Cars 4</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div> 
</template>

<script>
export default {
 
}
</script>

<style>

</style>
