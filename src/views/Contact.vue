<template>
  <div>
    <ContactBanner></ContactBanner>
    <ContactForm></ContactForm>
    <SocialContact></SocialContact>
    <div class="mb-600">

    <Map></Map>
    </div>
  </div>
</template>

<script>
import ContactBanner from "../components/Contact/ContactBanner.vue";
import ContactForm from "../components/Contact/ContactForm.vue";
import SocialContact from "../components/Contact/SocialContact.vue";
import Flags from '../assets/js/flags'
import Map from "../components/AssetComponents/Map.vue";

export default {
  components: {
    ContactBanner,
    ContactForm,
    SocialContact,
    Map
  },
  mounted(){
     Flags()
  }
};
</script>

<style scoped>
@import url("../assets/css/contact.css");
</style>