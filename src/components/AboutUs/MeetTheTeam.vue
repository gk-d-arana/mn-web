<template>
  <section class="padding-60 meet-the-team-section bg-white">
   <div class="container">
      <div class="row">
         <div class="col-lg-7 col-md-12 col-sm-12 col-12 order-lg-1 mb-4 m-lg-0">
            <div class="meet-the-team-content">
               <h2>Meet the Team</h2>
               <p>Teams produce great work. Intelivita believes in this <span class="tou-node" id="tou-0-2961ba9f-8f1a-449a-b094-5262e03f2938"></span>. Our team of <span class="tou-node" id="tou-0-68267147-44f5-4325-aec8-f1e6e78e0d9d"></span> developers, web developers and creative designers are bonded together by an invisible thread. The thread of team camaraderie which helps us get work done against all odds.</p>
               <p>We have professionals from all backgrounds and experience levels. Our diverse team helps bring to the table a unique value that helps us drive innovation.</p>
               <p>When we say we are a team that does it all, we mean it. Give us a shot and you will know what we mean.</p>
               <router-link to="/contact" class="btn btn-custome waves-effect waves-light">Talk to Our Expert Now</router-link>
            </div>
         </div>
         <div class="col-lg-5 col-md-12 col-sm-12 col-12 text-center">
            <div class="meet-the-team-image">
               <img src="https://www.intelivita.co.uk/assets/frameworks/public/images/about-us/meet-the-team.jpg" class="rounded10 box-shadow" alt="mobile app development company uk">
            </div>
         </div>
      </div>
   </div>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
.meet-the-team-section {
	position: relative;
}
.meet-the-team-section::before {
	content: "";
	display: block;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 105px;
	background-color: #f8f9fa;
}
.container {
	width: 100% !important;
	max-width: 1170px;
	margin: 0 auto;
}
/* @media (min-width: 1200px){
    .container {
        max-width: 1140px;
    }
}
@media (min-width: 992px){
    .container {
        max-width: 960px;
    }
}

@media (min-width: 768px){
    .container {
      max-width: 720px;
    }
}

@media (min-width: 576px){
    .container {
	max-width: 540px;
}
} */

.meet-the-team-content h2 {
	position: relative;
	padding-bottom: 15px;
	margin-bottom: 25px !important;
	font-size: 30px;
	font-weight: 600;
	display: inline-block;
}
.meet-the-team-content h2::before {
	content: "";
	display: block;
	height: 5px;
	background-color: #1977cc;
	width: 30%;
	position: absolute;
	bottom: 0;
	border-radius: 10px;
}
p {
	font: normal 14px/22px Montserrat,sans-serif;
	color: #6a6d6f;
}
.meet-the-team-image {
	position: relative;
	display: inline-block;
	vertical-align: top;
}
.meet-the-team-image::before {
	content: "";
	display: block;
	top: 20px;
	right: 20px;
	border: 5px solid #d5d2fd;
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 10px;
}
.meet-the-team-image img {
	border: 5px solid #1977cc;
	position: relative;
}
</style>