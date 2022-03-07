<template>


  <div class="hide-flow">

    <HomeBanner></HomeBanner>

    <BrandsLogos></BrandsLogos>

    <About></About>

    <Services></Services>

    <Industries></Industries>

    <Values></Values>

    <TypeDiv></TypeDiv>

    <Process></Process>

    <ClientReviews></ClientReviews>

    <Portfolio></Portfolio>

    <WhoTalkAboutUs></WhoTalkAboutUs>

    <CallSchedule></CallSchedule>

    <Techno></Techno>

    <Blogs></Blogs>

    <Contact></Contact>

    <Partnership></Partnership>

    <OurPlaces></OurPlaces>

  </div>
  
</template>

<script>
import Typed from "typed.js";
import $ from "jquery";

import Portfolio from "../components/Home/Portfolio.vue";
import About from "../components/Home/About.vue";
import BrandsLogos from "../components/Home/BrandsLogos.vue";
import ClientReviews from "../components/Home/ClientReviews.vue";
import HomeBanner from "../components/Home/HomeBanner.vue";
import Industries from "../components/Home/Industries.vue";
import Process from "../components/Home/Process.vue";
import Services from "../components/Home/Services.vue";
import TypeDiv from "../components/Home/TypeDiv.vue";
import Values from "../components/Home/Values.vue";
import WhoTalkAboutUs from "../components/Home/WhoTalkAboutUs.vue";
import CallSchedule from "../components/Home/CallSchedule.vue";
import Techno from "../components/Home/Techno.vue";
import Blogs from "../components/Home/Blogs.vue";
import Contact from "../components/Home/Contact.vue";
import Partnership from "../components/Home/Partnership.vue";
import OurPlaces from "../components/Home/OurPlaces.vue";


// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Flags from '../assets/js/flags';

export default {
  components: {
     Portfolio,
     About,
     BrandsLogos,
     ClientReviews,
     HomeBanner,
     Industries,
     Process,
     Services,
     TypeDiv,
     Values,
     WhoTalkAboutUs,
     CallSchedule,
     Techno,
     Blogs,
     Contact,
     Partnership,
     OurPlaces
    },
  mounted() {
    $(document).ready(function () {
      Flags()
      new Typed(".typed", {
        strings: ["MISSION ?", "VISION?"],
        typeSpeed: 100,
        loop: true,
        backSpeed: 100,
      });
    });
  },
};
</script>

<style scoped>
@import url("../assets/css/home.css");
</style>
