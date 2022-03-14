<template>
  <section class="banner innerbanner">
   <div class="video">
      <img class="lazy" alt="mobile consultancy services" src="https://www.intelivita.co.uk/assets/frameworks/public/images/technologies/technology-banner.jpg" style="" width="1920" height="800">
   </div>
   <div class="tenc-intro-main__wrapper">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
               <h1>Our Technology Stack</h1>
               <p>Like a spanner to a mechanic, steth to a doctor or a hammer to a mason — the right tool in the right hands can make a world of a difference. At Intelivita, we have handpicked digital technologies that will allow us to serve the best value to our clients.</p>
               <router-link to="/contact" class="btn waves-effect waves-light btn-custome">Book Your Consultancy</router-link>
            </div>
         </div>
      </div>
   </div>
   <ol class="breadcrumb">
			<li class="breadcrumb-item"><a href="https://www.intelivita.co.uk/"> Home</a> </li>
			<li class="breadcrumb-item active">Technologies</li>
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