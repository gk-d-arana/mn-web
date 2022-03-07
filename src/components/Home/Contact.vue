<template>
  <section class="padding-60 bg-white">
   <div class="container">
   <div class="title">
      <span>Connect with us to Discuss More </span>
      <h2>Schedule a Call Now</h2>
   </div>
   <div class="row align-items-center">
      <div class="col-12 col-sm-12 col-lg-5">
         <div class="row">
            <div class="col-12 col-sm-6 col-lg-6">
               <div class="contact_top_rating">
                  <a href="#" rel="noopener" target="_blank">
                     <img class="lazy" alt="Clutch top rated mobile app development company in UK" src="https://www.intelivita.co.uk/assets/frameworks/public/images/brand/Clutch.png" style="" width="172" height="68">
                     <span class="orange-text">Reviewed On</span>
                     <i class="fas fa-star"></i>
                     <i class="fas fa-star"></i>
                     <i class="fas fa-star"></i>
                     <i class="fas fa-star"></i>
                     <i class="fas fa-star"></i>
                     <strong>4.8</strong>
                     <span class="text-dark">27 Reviews </span>
                  </a>
               </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-6">
               <div class="contact_top_rating">
                  <a href="#" rel="noopener" target="_blank">
                     <img class="lazy" alt="Top Mobile App Developers on GoodFirms" src="https://www.intelivita.co.uk/assets/frameworks/public/images/brand/Goofram.png" style="" width="172" height="68">
                     <span class="orange-text">Reviewed On</span>
                     <i class="fas fa-star"></i>
                     <i class="fas fa-star"></i>
                     <i class="fas fa-star"></i>
                     <i class="fas fa-star"></i>
                     <i class="fas fa-star"></i>
                     <strong>5.0</strong>
                     <span class="text-dark">2 Reviews </span>
                  </a>
               </div>
            </div>
         </div>
         <ul class="contact_rating">
            <li>
               <a href="#" rel="noopener" target="_blank">
                  <div class="work_logo">
                     <img class="lazy" alt="Top Rated Freelance App developer on Upwork" src="https://www.intelivita.co.uk/assets/frameworks/public/images/brand/upwork.png" style="" width="200" height="75">
                     <img class="top_rating_img lazy" alt="Mn Webbased UpWork Rating" src="https://www.intelivita.co.uk/assets/frameworks/public/images/brand/upwork-rating.png" style="" width="35">
                  </div>
                  <div class="work_rating">
                     <img class="lazy" alt="Mobile App Developers London" src="https://www.intelivita.co.uk/assets/frameworks/public/images/author/star-user.svg" style="" width="50" height="50">
                     <div class="rating_text">
                        <p>Rating <strong>4.7</strong> </p>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                     </div>
                  </div>
               </a>
            </li>
            <li>
               <a href="#" rel="noopener" target="_blank">
                  <div class="work_logo">
                     <img class="lazy" alt="Top UK Mobile App Development Companies" src="https://www.intelivita.co.uk/assets/frameworks/public/images/brand/peoplehour.png" style="" width="200" height="75">
                     <img class="top_rating_img lazy" alt="Top Developers" src="https://www.intelivita.co.uk/assets/frameworks/public/images/brand/pph.png" style="" width="40">
                  </div>
                  <div class="work_rating">
                     <img class="lazy" alt="Top Rating Developers" src="https://www.intelivita.co.uk/assets/frameworks/public/images/author/star-user.svg" style="" width="50" height="50">
                     <div class="rating_text">
                        <p>Rating<strong>9/10</strong></p>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                     </div>
                  </div>
               </a>
            </li>
            <li>
               <a href="#" rel="noopener" target="_blank">
                  <div class="work_logo"><img class="lazy" alt="Hire Best mobile app developers" src="https://www.intelivita.co.uk/assets/frameworks/public/images/brand/freelancer.png" style="" width="200" height="75"></div>
                  <div class="work_rating">
                     <img class="lazy" alt="Top Mobile Application Developers UK" src="https://www.intelivita.co.uk/assets/frameworks/public/images/author/star-user.svg" style="" width="50" height="50">
                     <div class="rating_text">
                        <p>Rating<strong>4.5</strong></p>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                     </div>
                  </div>
               </a>
            </li>
         </ul>
      </div>
      <div class="col-12 col-sm-12 col-lg-7">
         <h3 class="d-flex d-lg-none mb-3">Hire us on</h3>
         <ContactFormDiv></ContactFormDiv>

      </div>
   </div>
</div></section>
</template>

<script>
import ContactFormDiv from '../AssetComponents/ContactFormDiv.vue'
export default {
    components:{
        ContactFormDiv
    }
}
</script>

<style>
.contact_rating {
	width: 100%;
}
.contact_rating li {
	width: 100%;
	float: left;
	background: #fff;
	border: 1px solid #dddfe1;
	border-radius: 10px;
	overflow: hidden;
	height: 95px;
	margin-bottom: 30px;
	transition: all .3s ease;
}

.contact_rating li a {
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #1977cc;
   width: max-content;
}
.work_logo {
	padding: 10px 20px;
	position: relative;
}
.work_rating {
	background: #fbfcfc;
	padding: 22.5px 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-left: 1px solid #dddfe1;
	transition: all .3s ease;
}

.top_rating_img {
	position: absolute;
	top: 0;
	right: 5px;
	margin: 0 !important;
}
img {
	max-width: 100%;
	height: auto;
}

.work_rating img {
	width: 50px;
	margin-right: 10px;
}
.rating_text {
	text-align: center;
}
.rating_text p {
	font-size: 16px;
	font-weight: 700;
	margin: 0 0 3px;
}

.contact_top_rating {
	width: 100%;
	text-align: center;
	border: 1px solid #dddfe1;
	border-radius: 10px;
	margin-bottom: 30px;
	transition: all .3s ease;
}
.contact_top_rating a {
	color: #1977cc;
	display: block;
	padding: 20px 20px 10px;
}
.contact_top_rating img {
	margin-bottom: 5px;
}
.contact_top_rating span {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	font-weight: 500;
	margin: 10px 0;
	line-height: 1;
}
.contact_top_rating strong {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 5px 0 0;
	color: #202122;
	font-size: 24px;
	line-height: 1;
}
.text-dark {
	color: #343a40 !important;
}
</style>