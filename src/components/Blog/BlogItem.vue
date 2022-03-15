<template>
  <div class="blog-list-box">
                      <div class="blog-list-image box-shadow rounded10">
                                                    <a href="#"><img class="lazywithloader rounded10" src="https://www.intelivita.co.uk/assets/frameworks/plugins/filemanager/userfiles/How_Much_Does_an_eCommerce_Website_Cost.png" alt="How Much Does an eCommerce Website Cost in the UK [2022 Edition]" style=""></a>
                                              </div>
                      <div class="blog-list-info-box d-flex align-items-center">
                        <div class="blog-list-author-date d-flex align-items-center">
                          <div class="blog-list-author-image-wrap d-flex align-items-center">
                            <div class="blog-list-author-image box-shadow">
                                                                    <img class="lazy" alt="Oliver-Author" src="https://www.intelivita.co.uk/upload/avatar/imgpsh_fullsize.jpg" style="">
                                                            </div>
                            <a href="#"> Oliver Baker</a>
                          </div>
                          <span class="divider">|</span>
                          <div class="blog-list-date">February 23, 2022</div>
                          <span class="divider">|</span>
                        </div>
                        <div class="blog-list-category">
                          <a href="#">eCommerce</a>  
                                                    </div>
                      </div>
                      <div class="blog-list-desc">
                        <h2><a href="#">How Much Does an eCommerce Website Cost in the UK [2022 Edition]</a></h2>
                        <p></p><p>The United Kingdom (UK) has the most sophisticated e-commerce market in Europe. According to the most current estimates…</p>
                        <a href="#" class="btn btn-custome waves-effect waves-light">Explore More</a>
                        <!-- 359 -->
                      </div>
                    </div>
</template>

<script>
export default {

}
</script>

<style>
.blog-list-box {
	border-bottom: 1px solid #e3e3e3;
	padding-bottom: 35px;
	margin-bottom: 35px;
}

.blog-list-image {
	padding: 10px;
	background-color: #fff;
	margin-bottom: 20px;
	height: auto;
}
img.lazywithloader {
	display: block;
	background-image: url('https://www.intelivita.co.uk/assets/frameworks/public/images/loading.gif');
	background-repeat: no-repeat;
	background-position: center center;
}

.blog-list-image img {
	width: 100%;
}

.blog-list-info-box {
	margin-bottom: 15px;
}

.blog-list-info-box .divider {
	margin: 0 14px;
	color: #6a6d6f;
}
.blog-list-date {
	color: #6a6d6f;
}
.blog-list-author-image {
	width: 70px;
	height: 70px;
	margin-right: 20px;
	border-radius: 100%;
	border: 3px solid #fff;
	overflow: hidden;
}
.blog-list-author-image-wrap a {
	color: #1977cc;
	font-weight: 600;
	font-size: 16px;
}
.blog-list-author-image img {
	object-fit: cover;
	width: 100%;
	height: 100%;
}
.blog-list-desc h2 {
	font-size: 28px;
	font-weight: 600;
	line-height: 1.4;
	margin-bottom: 20px;
}
.blog-list-desc p {
	margin-bottom: 25px;
	font-weight: 500;
}
.blog-list-desc h2 a {
	color: #202122;
}

</style>