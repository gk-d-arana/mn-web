<template>
  <div>
        
        <Banner></Banner>

        <BrandsLogos></BrandsLogos>

        <ReviewSection></ReviewSection>

        <OurAwards></OurAwards>

        <Const :isCr="true"></Const>


  </div>
</template>

<script>

import Banner from '../components/ClientReview/Banner'
import BrandsLogos from '../components/AssetComponents/BrandsLogos'
import ReviewSection from '../components/ClientReview/ReviewSection'
import OurAwards from '../components/AboutUs/OurAwards'
import Const from '../components/AssetComponents/Const'


export default {
    components:{
        Banner,
        BrandsLogos,
        ReviewSection,
        OurAwards,
        Const
    }
}
</script>

<style scoped>

</style>