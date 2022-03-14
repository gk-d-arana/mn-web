<template>
  <div>


    <Banner></Banner>

    <BrandsLogos></BrandsLogos>

    <Service></Service>

    <OurProcess></OurProcess>

    <TypeDiv></TypeDiv>

    <Const></Const>
  </div>
</template>

<script>
import Banner from '../components/Process/Banner'
import BrandsLogos from '../components/AssetComponents/BrandsLogos.vue'
import Service from '../components/Process/Service.vue'
import OurProcess from '../components/Process/OurProcess.vue'
import Const from '../components/AssetComponents/Const.vue'
import TypeDiv from '../components/Home/TypeDiv.vue'



export default {
  components:{
    Banner,
    BrandsLogos,
    Service,
    OurProcess,
    TypeDiv,
    Const
  }
}
</script>

<style scoped>

</style>