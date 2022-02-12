<template>
  <div id="app">
    
  
  <!-- Here comes the sticky navbar/header  -->
  <Navbar></Navbar>
  
    <router-view/>
  </div>
</template>


<script>
import Main from './assets/js/main.js'
import Navbar from './components/Utils/Navbar.vue'

export default {
  components : {
    Navbar
  },
  mounted(){
    Main()
  }
}
</script>
<style>
@import url('./assets/css/main.css');
</style>
