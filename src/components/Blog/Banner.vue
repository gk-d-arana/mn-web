<template>
<section class="banner innerbanner blog">
 <div class="video">
    <img class="lazywithloader" src="https://www.intelivita.co.uk/assets/frameworks/public/images/blog/blog-banner.jpg" alt="mobile app development company uk - intelivita" style="" width="1920" height="800">
 </div>
 <div class="tenc-intro-main__wrapper">
    <div class="container">
       <div class="row align-items-center">
          <div class="col-12 text-center">
             <h1>Keep up with the latest Web and Mobile App Technologies and Trends</h1>
             <p>In the terms of technologies, we explore to the core and bring a fascinating news and updates for the Entrepreneurs, Business Owners, Customers and of course our Development Community. We at Intelivita are adding values to the business challenges and changing the lifestyles by intervening technology with the team of creative brains.</p>
          </div>
       </div>
    </div>
 </div>
 <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
			<li class="breadcrumb-item "><router-link class="text-white" to="/"> Home</router-link> </li>
			<li class="breadcrumb-item text-white active">Client Review</li>
			</ol>
 </nav>
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
	margin-top: 0;
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