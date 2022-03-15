<template>
      <div
      class="callouts-separate callouts d-flex align-items-center justify-content-center"
    >
      <span
        >Do you have a
        <span id="callouts-type">
          <span class="typed"></span
          ><span>We have a TEAM to get you there. &nbsp; &nbsp;</span>
        </span>
      </span>
      <router-link
        class="btn-custome btn waves-effect waves-light appointement-btn"
        to="/contact"
        >Get In Touch</router-link
      >
    </div>
</template>

<script>
import Typed from "typed.js";

export default {

  mounted(){
new Typed(".typed", {
        strings: ["MISSION ?", "VISION?"],
        typeSpeed: 100,
        loop: true,
        backSpeed: 100,
      });
  }

}
</script>

<style>

</style>