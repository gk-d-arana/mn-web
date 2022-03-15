<template>
     
   <section class="section portfolio-preview-box arvrapp bluebg" data-hash="virtual-reality-app" style="background-image: url(&quot;https://www.intelivita.co.uk/assets/frameworks/public/images/portfolio/mainpage/microsoft-art-of-work-bg.jpg&quot;);">
      <div>
         <div class="container">
            <div class="row align-items-center">
               <div class="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1">
                  <div class="portfolio-preview-content-box">
                     <div class="portfolio-preview-main-logo">
                        <img class="lazy" alt="" src="https://www.intelivita.co.uk/assets/frameworks/public/images/portfolio/mainpage/microsoft-art-of-work-logo.png" style="">
                     </div>
                     <h3>A 360-Degree Virtual Reality App for Microsoft</h3>
                     <ul class="contentboxlist">
                        <li>Design</li>
                        <li>Development</li>
                     </ul>
                     <p>Microsoft wanted to build an app for artists to share their creative work with the world at large. The technology for the idea was introduced through a SAP and Microsoft Azure partnership. Intelivita capitalized on the possibilities of the technology and built a virtual reality app with the capabilities of Unity 3D. The app experience was also enriched with a virtual reality 360-Degree experience.</p>
                     <div class="button-wrap">
                        <a href="#" rel="noreferrer" target="_blank" class="btn-custome btn waves-effect waves-light">View Website</a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div class="portfolio-preview-thumb text-center">
                     <img class="lazy" src="https://www.intelivita.co.uk/assets/frameworks/public/images/portfolio/mainpage/microsoft-art-of-work-laptop.png" alt="">
                  </div>
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

<style>

.portfolio-preview-box.section {
	display: table;
	width: 100%;
}

.portfolio-preview-box {
	padding: 130px 0 40px;
	position: relative;
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
}
.portfolio-preview-box.bluebg::before {
	background: rgba(41,127,221,.85);
}
.portfolio-preview-box::before {
	content: "";
	display: block;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(0,0,0,.8);
}
.portfolio-preview-box.section > div {
	display: table-cell;
	vertical-align: middle;
}

.portfolio-preview-box .container {
	max-width: 1300px;
}

.portfolio-preview-thumb img {
	margin: 0 auto;
}
.portfolio-preview-main-logo {
	margin-bottom: 15px;
	display: flex;
	align-items: center;
}
.portfolio-preview-main-logo img {
	display: block;
}
.portfolio-preview-content-box h3 {
	font-size: 24px;
	color: #fff;
	font-weight: 400;
	margin-bottom: 25px;
}
.portfolio-preview-content-box .contentboxlist {
	margin-bottom: 20px;
    list-style: none;
}
.portfolio-preview-content-box .contentboxlist li {
	display: inline-block;
	vertical-align: top;
	position: relative;
	color: #fff;
	padding: 0 15px 0 0;
	margin: 0 15px 0 0;
}
.portfolio-preview-content-box .contentboxlist li::before {
	content: "";
	display: block;
	width: 1px;
	height: 18px;
	background-color: #fff;
	position: absolute;
	right: 0;
	top: 50%;
	margin-top: -9px;
}
.portfolio-preview-content-box p {
	color: #fff;
	margin-bottom: 25px;
}
.portfolio-preview-content-box .button-wrap {
	margin-top: 40px;
	display: flex;
	align-items: center;
}

.portfolio-preview-content-box .btn-custome:focus, .portfolio-preview-content-box .btn-custome:hover {
	background-color: #343535 !important;
	color: #fff !important;
}
</style>