<template>
  <div style="background-color:#fff;">

      <Banner></Banner>

      <BlogWrap></BlogWrap>

      <Contact></Contact>

      <OurPlaces></OurPlaces>

  </div>
</template>

<script>
import Banner from '../components/Blog/Banner'
import BlogWrap from '../components/Blog/BlogWrap'
import OurPlaces from "../components/Home/OurPlaces.vue";
import Contact from "../components/Home/Contact.vue";


export default {
    components:{
        Banner,
        BlogWrap,
        Contact,
        OurPlaces
    }
}
</script>

<style>

</style>