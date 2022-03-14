<template>
  <section class="banner innerbanner">
   <div class="video">
      <img class="lazy" alt="custom application company" src="https://www.intelivita.co.uk/assets/frameworks/public/images/process/process-banner.jpg" style="" width="1920" height="800">
   </div>
   <div class="tenc-intro-main__wrapper">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
               <h1>How Intelivita delivers value to your business</h1>
               <p>Agile-driven process. That is the magic word that enables Intelivita to deliver value to its clients. Agile methodology helps us model project deliverables that can be continuously improved to meet stakeholder requirements. Our agile-driven process is certain to give your projects the much needed agility, for highly complicated projects.</p>
               <a href="#" class="btn waves-effect waves-light btn-custome mb-3">View Our Work</a>
               <a href="#" class="btn waves-effect waves-light btn-custome  mb-3">Calculate App Development Cost</a>
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