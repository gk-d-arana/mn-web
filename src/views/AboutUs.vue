<template>
  <div style="background-color:#fff;">


      <Banner></Banner>
      
      <BrandsLogos></BrandsLogos>
      
      <MeetTheTeam></MeetTheTeam>

      <ReviewsCount></ReviewsCount>

      <Leaders></Leaders>

      <MissionVision></MissionVision>

      <OurValues></OurValues>

      <History></History>


      <OurAwards></OurAwards>

      <TypeDiv></TypeDiv>

      <Const></Const>

      


  </div>
</template>

<script>

// import components
import Banner from '../components/AboutUs/Banner'
import BrandsLogos from '../components/AssetComponents/BrandsLogos'
import MeetTheTeam from '../components/AboutUs/MeetTheTeam'
import ReviewsCount from '../components/AboutUs/ReviewsCount'
import Leaders from '../components/AboutUs/Leaders'
import MissionVision from '../components/AboutUs/MissionVision'
import OurValues from '../components/AboutUs/OurValues'
import History from '../components/AboutUs/History'
import OurAwards from '../components/AboutUs/OurAwards'
import TypeDiv from '../components/Home/TypeDiv'
import Const from '../components/AssetComponents/Const'



export default {
    components:{
        Banner,
        BrandsLogos,
        MeetTheTeam,
        ReviewsCount,
        Leaders,
        MissionVision,
        OurValues,
        History,
        OurAwards,
        TypeDiv,
        Const
    }
}
</script>

<style scoped>
    
</style>