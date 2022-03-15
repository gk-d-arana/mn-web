<template>
<div>
  <ClientReviews v-if="!isCr"></ClientReviews>
      
      <WhoTalkAboutUs></WhoTalkAboutUs>

      <CallSchedule></CallSchedule>

      <Techno></Techno>

      <Blogs></Blogs>

      <Contact></Contact>

      <Partnership></Partnership>


    <div class="mb-600">

      <Map></Map>
    </div>


    </div>

</template>

<script>
import WhoTalkAboutUs from '../Home/WhoTalkAboutUs'
import ClientReviews from '../Home/ClientReviews'
import CallSchedule from '../Home/CallSchedule'
import Techno from '../Home/Techno'
import Blogs from '../Home/Blogs'
import Contact from '../Home/Contact'
import Partnership from '../Home/Partnership'
import Map from './Map'

export default {
  props:{
    isCr: {
      type : Boolean,
      required : false
    }
  },
    components:{
        WhoTalkAboutUs,
        ClientReviews,
        CallSchedule,
        Techno,
        Blogs,
        Contact,
        Partnership,
        Map
    }
}
</script>

<style>

</style>