<template>
  <section class="banner innerbanner aboutusbanner">
   <div class="video">
      <img class="lazy" alt="intelivita careers" src="https://www.intelivita.co.uk/assets/frameworks/public/images/about-us/about-us-banner.jpg" style="" width="1920" height="800">
   </div>
   <div class="tenc-intro-main__wrapper">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
               <h1><span>We are Intelivita</span> We Deliver the Code, Your Project Delivers the Change</h1>
               <p style="margin: 0 0 10px;">The Mobile App Developers Located in the Heart of the Yorkshire Capital (Leeds ofcourse...) Our passion is to deliver <span class="tou-node" id="tou-0-e5ee8caa-929b-4339-9f89-6a8f609cb936" lang="es"></span> disrupting solutions for our Clients, so their Business can change the world we live in for the better.</p>
               <p style="margin: 0;">We are <span class="tou-node" id="tou-0-ebf25f3f-f482-4152-8dc1-e49912a62395" lang="es"></span> looking for the latest innovation and want to work with Client’s who are as passionate as we are to deliver change. Having been founded in 2015, starting as <span class="tou-node" id="tou-0-d2040f5d-d902-4bb9-834d-66c7c80354e2" lang="es"></span> of freelancers, becoming a market leader in mobile <span class="tou-node" id="tou-0-a7fe0ad6-f501-42fb-a41f-9392d7bc87b3"></span> solutions <span class="tou-node" id="tou-0-b5b7b106-59cb-46ab-809e-e288af5acc6a"></span>, we’re excited to have new and exciting business’ join us for our next Chapter.</p>
            </div>
         </div>
      </div>
   </div>
   <ol class="breadcrumb">
			<li class="breadcrumb-item text-white"><router-link to="/" class="text-white"> Home</router-link> </li>
			<li class="breadcrumb-item text-white active">About Us</li>
			</ol>
</section>
</template>

<script>
export default {

}
</script>


<style scoped>
@media (max-width:1600px){
    .banner {
        min-height: 650px;
    }
}
.banner {
	margin-top: 40px;
	position: relative;
	z-index: 9;
	min-height: 800px;
	overflow: hidden;
}
.breadcrumb {
	background: 0 0;
	position: absolute;
	bottom: 85px;
	left: 50%;
	width: 100%;
	max-width: 1170px;
	transform: translateX(-50%);
	margin: 0;
	padding: 0 15px;
	z-index: 9999;
}

.video img {
	width: 100%;
	height: 100%;
	min-height: 800px;
	object-fit: cover;
}
.tenc-intro-main__wrapper {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
  background: linear-gradient(
    90deg,
    #1977cc,
    #4187c4 40%,
    #5e97c9 70%,
    #b5c4d1
  );	z-index: 999;
}


</style>