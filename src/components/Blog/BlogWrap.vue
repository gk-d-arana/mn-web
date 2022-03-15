<template>
  <section id="blog">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12 col-sm-12 col-12">
          
          <!--====== Blog listing main ======-->
          <div class="blog-list-wrap">
                <BlogItem v-for="el in [1,2,4]" v-bind:key="el"></BlogItem>
                                      </div>
          <!--====== End Blog listing main ======-->

          <!--====== Blog listing pagination ======-->
          <BlogPagination></BlogPagination>
                    <!--====== End Blog listing pagination ======-->

        </div>
        <div class="col-lg-4 col-12 d-none d-lg-block">
  <!--====== Stay Connected ======-->
  <div class="blog-sidebar-box box-shadow rounded10 bg-white mb-30">
    <h3>Stay Connected</h3>
    <ul class="header_social">
      <!-- <li><a href="https://plus.google.com/u/0/106928501521005803998" target="_blank" class="fab fa-google-plus-g"></a></li> -->
      <li><a href="https://twitter.com/Intelivita" target="_blank" class="fab fa-twitter"></a></li>
      <li><a href="https://www.facebook.com/intelivita" target="_blank" class="fab fa-facebook-f"></a></li>
      <li><a href="https://www.linkedin.com/company/intelivita" target="_blank" class="fab fa-linkedin-in"></a></li>
      <li><a href="https://www.behance.net/intelivita" target="_blank" class="fab fa-behance"></a></li>
    </ul>
  </div>

  <!--====== Blog Category ======-->
  <div class="blog-sidebar-box box-shadow rounded10 bg-white mb-30">
    <h3>Categories</h3>

    <ul class="blog-cat-list">
                                    <li><a href="https://www.intelivita.co.uk/blog/category/augmented-reality">Augmented Reality</a></li>
                            <li><a href="https://www.intelivita.co.uk/blog/category/ecommerce">eCommerce</a></li>
                            <li><a href="https://www.intelivita.co.uk/blog/category/iot">IoT</a></li>
                            <li><a href="https://www.intelivita.co.uk/blog/category/mobile-app-development">Mobile App Development</a></li>
                            <li><a href="https://www.intelivita.co.uk/blog/category/news">News</a></li>
                            <li><a href="https://www.intelivita.co.uk/blog/category/virtual-reality">Virtual Reality </a></li>
                            <li><a href="https://www.intelivita.co.uk/blog/category/web-development">Web Development</a></li>
                        </ul>
  </div>

  <!--====== Latest Tweets ======-->
  <div class="blog-sidebar-box box-shadow rounded10 bg-white mb-30">
    <h3>Latest Tweets</h3>
    <div class="view_latest_tweets" style="height: 400px;overflow-y: auto;">
      <!-- <iframe id="twitter-widget-0" scrolling="no" allowtransparency="true" allowfullscreen="true" class="twitter-timeline twitter-timeline-rendered" style="position: static; visibility: visible; display: inline-block; width: 100%; padding: 0px; border: medium none; max-width: 100%; min-width: 180px; margin-top: 0px; margin-bottom: 0px; min-height: 200px; height: 8174.05px;" data-widget-id="profile:Intelivita" title="Twitter Timeline" frameborder="0"></iframe> 
      <div class="loaddynamitwitterfeed">
      <script defer="" async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div> -->
    </div>
  </div>

  <!--====== Follow on Facebook ======-->
  <div class="blog-sidebar-box box-shadow rounded10 bg-white mb-30">
    <h3>Follow on Facebook</h3>
    <div class="loaddynamifbfeediframe"><iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIntelivita&amp;tabs=timeline&amp;width=300&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId" style="border:none;overflow:hidden" scrolling="no" allowtransparency="true" width="100%" height="500" frameborder="0"></iframe></div>
  </div>

  <!--====== Create awesome app ======-->
  <div class="blog-sidebar-box box-shadow rounded10 bg-white mb-30 p-0 o-hidden">
      <div class="blog-sidebar-cta text-center p-relative">
        <a href="https://www.intelivita.co.uk/contact.php">
          <div class="overlaytext">
            <span>Looking to Create Awesome Mobile App for Your Business</span>
            <div class="btn btn-custome waves-effect waves-light">Get Started</div>
          </div>
        </a>
      </div>
  </div>

</div>          </div>
    </div>
</section>
</template>

<script>
import BlogItem from './BlogItem.vue'
import BlogPagination from './BlogPagination.vue'

export default {
    components:{
        BlogItem,
        BlogPagination
    }
}
</script>

<style>
#blog {
	margin-top: -75px;
	z-index: 10;
	position: relative;
}

section {
	width: 100%;
}
.blog-sidebar-box {
	border: 1px solid #e2e3e5;
	padding: 30px 25px;
}

.blog-sidebar-box h3 {
	font-size: 24px;
	font-weight: 600;
	position: relative;
	border-bottom: 1px solid #f5f5f5;
	padding-bottom: 20px;
	margin-bottom: 30px;
}
.blog-sidebar-box .header_social {
	text-align: left;
}
.blog-sidebar-box h3::before {
	content: "";
	display: block;
	position: absolute;
	bottom: -1px;
	left: 0;
	height: 3px;
	width: 50px;
	background-color: #1977cc;
}
.blog-sidebar-box .header_social li {
	margin-right: 8px;
	display: inline;
	border: 0;
}
.blog-sidebar-box .header_social li .fa-twitter {
	background-color: #54aced;
}
.blog-sidebar-box .header_social li a {
	width: 50px;
	height: 50px;
	border: 0;
	margin: 0;
	font-size: 25px;
}

.header_social li a {
	width: 33px;
	height: 33px;
	background: #0d0d0e;
	display: -webkit-inline-box;
	display: -webkit-inline-flex;
	display: -ms-inline-flexbox;
	display: inline-flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	border-radius: 50%;
	margin: 1px;
	color: #fff;
	font-size: 14px;
}

.header_social li a {
	width: 33px;
	height: 33px;
	background: #0d0d0e;
	display: -webkit-inline-box;
	display: -webkit-inline-flex;
	display: -ms-inline-flexbox;
	display: inline-flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	border-radius: 50%;
	margin: 1px;
	color: #fff;
	font-size: 14px;
}

.blog-sidebar-box .header_social li .fa-linkedin-in {
	background-color: #0079b8;
}

.blog-sidebar-box .header_social li .fa-behance {
	background-color: #4176f9;
}
.blog-sidebar-box .header_social li a:hover {
	color: #fff;
	opacity: .7;
}


.blog-cat-list li {
	display: block;
	padding: 12px 0;
	position: relative;
	padding-left: 35px;
}
.blog-cat-list li a {
	color: #202122;
	font-weight: 500;
}
.blog-cat-list li a::before {
	content: "";
	display: block;
	width: 18px;
	height: 7px;
	left: 0;
	transform: translateY(-50%);
	position: absolute;
	top: 50%;
	background: url('https://www.intelivita.co.uk/assets/frameworks/public/images/blog/arrow.png') no-repeat center center;
	-webkit-transition: all .3s ease-in-out;
	-moz-transition: all .3s ease-in-out;
	-o-transition: all .3s ease-in-out;
	transition: all .3s ease-in-out;
}

.blog-cat-list li a:hover{
	color: #1977cc;
	padding-left: 8px;
}

.blog-cat-list li a:hover .blog-cat-list li a::before{
    left: 15px !important;
}

a {
	-webkit-transition: all .3s ease;
	-o-transition: all .3s ease;
	transition: all .3s ease;
	-webkit-transition: all .3s ease-in-out;
	-moz-transition: all .3s ease-in-out;
	-ms-transition: all .3s ease-in-out;
	-o-transition: all .3s ease-in-out;
	color: #fff;
	cursor: pointer;
}.blog-sidebar-box {
	border: 1px solid #e2e3e5;
	padding: 30px 25px;
}

.blog-sidebar-cta {
	display: block;
	background: url(https://www.intelivita.co.uk/assets/frameworks/public/images/blog/create-app-image.jpg) no-repeat center center;
	background-size: cover;
	height: 350px;
	padding: 5px;
}

.blog-sidebar-cta a {
	display: table;
	width: 100%;
	height: 100%;
}
.blog-sidebar-cta .overlaytext {
	display: table-cell;
	vertical-align: middle;
}
.blog-sidebar-cta .overlaytext span {
	font-size: 30px;
	font-weight: 700;
	color: #fff;
	display: block;
	margin-bottom: 40px;
}
.blog-sidebar-cta .overlaytext .btn-custome {
	background-color: #fff !important;
	color: #1977cc !important;
}




</style>