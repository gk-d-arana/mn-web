<template>
  <section class="contact-form-main">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-7 col-sm-12 col-12">
          <div class="contact-form-box bg-white rounded10 box-shadow">
          <ContactFormDiv></ContactFormDiv>
          </div>
        </div>
        <div class="col-lg-4 col-md-5 col-sm-12 col-12">
          <div class="schedule-meeting-main">
            <div class="schedule-meeting-box rounded10">
              <div class="schedule-meeting-img">
                <img
                  class="lazy"
                  alt="Oliver Baker- Author"
                  src="https://www.intelivita.co.uk/assets/frameworks/public/images/author/oliver.jpg"
                  style=""
                />
              </div>
              <div class="schedule-meeting-content text-center">
                <div class="schedule-meeting-content-description">
                  <h3>So you've Heard our Story,</h3>
                  <h4>Tell us Yours!</h4>
                  <p>
                    We've several ways for you to contact us, so drop us a
                    message or give us a call.
                  </p>
                  <p>
                    If you have a question, an idea, are a problem to solve, we
                    can help, so get in touch!
                  </p>
                </div>
                <a
                  href="javascript:;"
                  class="btn-custome btn-re btn waves-effect waves-light head-requet-btn"
                  >Schedule a Meeting</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactFormDiv from '../AssetComponents/ContactFormDiv.vue'
export default {
  components:{
    ContactFormDiv
  }
};
</script>

<style>
</style>
