<template>
  <div>
    <!-- ======= Top Bar ======= -->
    <div id="topbar" class="dont-show-on-mobile d-flex align-items-center fixed-top dont-show-on-mobile">
      <div class="container">
         <div class="d-flex align-items-center justify-content-between">
           <div class="top-left-part">
             <a href="#">
               <img src="https://www.intelivita.co.uk/assets/frameworks/public/images/clutch-b2b-logo.svg" alt="Mn Webbased is top rated mobile app agency UK, with offices in London and Leeds. Specialising in mobile app design and development for iOS and Android." width="88" height="25">
               <div class="star">
                <img src="https://www.intelivita.co.uk/assets/frameworks/public/images/footer/footer-rating.png" alt="Mn Webbased is top app making company in UK" width="110" height="19">
               </div>
               <strong>Excellent</strong> 
                <span> 4.8 out of 5</span>
             </a>
           </div>
           <div class="top-right-part d-flex align-items-center justify-content-between">
             <span>Email us on <a href="mailto:sales@intelivita.co.uk"><strong>info@mnwebbased.in</strong></a> or Speak to our expert</span>
             <a href="tel:+447368285632"><strong>+91-7000830437</strong></a>
                             <span class="or">or</span>
               <a href="javascript:;" class="head-requet-btn"><img src="https://www.intelivita.co.uk/assets/frameworks/public/images/home/oliver-request-call.jpg" alt="Oliver Baker is mobile app development consultant in the UK." width="30" height="26">Request a Call Back</a>
                         </div>
         </div>
      </div>
   </div>

    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">
        <h1 class="logo me-auto">
          <a href="index.html">
            <img src="../../assets/images/logo512.png" />
          </a>
        </h1>

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li class="gototop">
              <router-link to="/" class="nav-link scrollto">Home</router-link>
            </li>

            <li class="dropdown show-small-div">
              <a href="#"
                ><span>Company</span> <i class="bx bx-chevron-down"></i
              ></a>
              <ul>
                <li>
                  <router-link to="/about-us"><i class="bx bx-chevron-right"></i>Who We Are</router-link>
                </li>
                <li>
                  <router-link to="/process"><i class="bx bx-chevron-right"></i>How We Work</router-link>
                </li>
                <li>
                  <a href="#"
                    ><i class="bx bx-chevron-right"></i>Client Review</a
                  >
                </li>
                <li>
                  <router-link to="/technologies"
                    ><i class="bx bx-chevron-right"></i>Technologies</router-link
                  >
                </li>
              </ul>
            </li>

            <li class="dropdown our-service-hover">
              <a href="#"
                ><span>Our Service</span> <i class="bx bx-chevron-down"></i
              ></a>
            </li>

            <li class="dropdown solution-hover">
              <a href="#"
                ><span>Solution</span> <i class="bx bx-chevron-down"></i
              ></a>
            </li>

            <li class="gototop">
              <a class="nav-link scrollto" href="#contact">Portfolio</a>
            </li>

            <li class="gototop">
              <a class="nav-link scrollto" href="#contact">Blog</a>
            </li>

            <li class="gototop">
              <router-link to="/contact" class="nav-link scrollto"
                >Contact</router-link
              >
            </li>
          </ul>
          <i class="bx bx-list-ul mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->

        <button
          class="appointment-btn scrollto"
          data-toggle="modal" data-target="#get-qoute"
          >Estimate Your Project</button
        >
        </div>
    <!-- Our Service Div That Appears on Hover Over Our_Services -->
    <OurService class="hidden"></OurService>
    <solution class="hidden"></solution>
    </header>


    <!-- Modal -->
    <div class="modal fade" id="get-qoute" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            <div class="container">

            <h4>Request the <span class="text-color">Quote!</span></h4>
            </div>
    <ContactFormDiv class=""></ContactFormDiv>
          </div>

        </div>
      </div>
    </div>



    <!-- End Header -->
  </div>
</template>

<script>
import $ from "jquery";
import OurService from "./OurService.vue";
import Solution from "./Solution.vue";
import ContactFormDiv from "../AssetComponents/ContactFormDiv.vue";

export default {
  components: {
    OurService,
    Solution,
    ContactFormDiv,
  },
  mounted() {
    //  $(document).mousemove(function(){
    //      if($(".our-service-hover:hover").length != 0){
    //          $('.our-services-div').slideDown();
    //          $(document).mousemove(()=>{
    //            if($(".our-services-div:hover").length == 0) {
    //              //$('.our-services-div').slideUp();
    //            }
    //          })
    //      }

    // });
    $(".our-service-hover").on("mouseenter", () => {
      $("#header").css("max-width", "100%");
      $(".our-services-div").slideDown();
      $(".solution-div").slideUp();

      $(".our-services-div").on("mouseleave", () => {
        $("#header").css("max-width", "90%");
        $(".our-services-div").slideUp();
      });
    });
    $(".solution-hover").on("mouseenter", () => {
      $("#header").css("max-width", "100%");
      $(".solution-div").slideDown();
      $(".our-services-div").slideUp();
      $(".solution-div").on("mouseleave", () => {
        $("#header").css("max-width", "90%");
        $(".solution-div").slideUp();
      });
    });

$(".show-small-div").on("mouseenter", () => {
      $("#header").css("max-width", "90%");
      $(".solution-div").slideUp();
      $(".our-services-div").slideUp();
    });
  },
};
</script>

<style scoped>
.dont-show-on-mobile{
  display: block;
}
.our-services-div,
.solution-div {
  position: fixed;
  z-index: 1000;
  left:0;
  background: #fff;
}
.os-wrapper {
  background: #fff !important;
}
#navbar .dropdown ul li {
  display: flex;
}

#navbar .dropdown ul li a:hover {
  transform: translateX(5px);
  transition: 0.4s;
}

#navbar .dropdown ul li i {
  margin-right: 10px;
}
.modal-body h4 {
	color: #1977cc;
	font-size: 5vw;
	line-height: 1.04444em;
	margin-bottom: 35px;
	margin-left: 10px;
}
.modal-body .text-color {
	color: #343535;
}
.modal-body .container{
  max-width: 600px;
}

.close span{
	font-size: 3rem;
	color: #1977cc;
}

@media(min-width: 800px){
  #topbar {
    width: 100%;
    background: #202122;
    padding: 6px 0;
  }
}



.top-left-part a {
	display: flex;
	align-items: center;
}
.top-left-part .star {
	line-height: 1;
	padding: 0 10px;
}
.top-left-part .star + strong {
	padding-right: 5px;
	font-weight: 600;
}
.top-right-part span {
	color: #fff;
}
.top-right-part a {
	margin-left: 10px;
}
.top-right-part .or {
	padding: 0 10px;
}
.top-right-part .head-requet-btn {
	padding: 6px 15px 6px 10px;
  color:#fff;
	margin-left: 0;
	background-color: #343535;
	border-radius: 30px;
}
.top-right-part .head-requet-btn img {
	margin-right: 10px;
	border-radius: 30px;
}
#topbar .container {
	max-width: 1380px;
	width: 100%;
}


@media (max-width: 750px) {
    .fixed-top {
        width: 100vw;
        margin: initial;
    }
  
}

</style>

