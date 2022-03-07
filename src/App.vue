<template>
  <div id="app">
    
  
  <!-- Here comes the sticky navbar/header  -->
  <Navbar></Navbar>

    <router-view/>
    <Footer></Footer>
  </div>
</template>


<script>
import Main from './assets/js/main.js'
import Navbar from './components/Navbar/Navbar.vue'
import Footer from './components/AssetComponents/Footer.vue'

export default {
  components : {
    Navbar,
    Footer
  },
  mounted(){
    Main()
  }
}
</script>
<style>
@import url('./assets/css/main.css');
@import url('./assets/css/mainMedia.css');

</style>
