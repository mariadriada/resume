<template>
  <div id ="contact-container">
    <div class="headerpage">
      <banner/>
    </div>
    <div class="datapage">
      <redirect
        :title="`${ title }`"
        :description="`${ description }`"
        :link="`${ link }`"
        :textlink="`${ textlink }`"
      ></redirect>
    </div>
    <div class="footerpage">
      <footer-div/>
    </div>
  </div>
</template>

<script>
import Redirect from '~/components/Redirect.vue'
import Banner from '~/components/Banner2.vue'
import FooterDiv from '~/components/Footer.vue'

export default {
  components: {
    Redirect,
    Banner,
    FooterDiv
  },
  data() {
    return {
      title: 'Contact to me!',
      description: 'You can contact with me through email.',
      link: 'https://www.gmail.com',
      textlink: 'mariagiraldo4@gmail.com'
    }
  }
}
</script>

<style lang="scss">
#contact-container {
  @include main-width;
  height: 100vh;
  background-size: 100% 100%;
  cursor: default;
  font-family: 'Tajawal', sans-serif;

   #header2-container {
    #CONTACT-link {
      @include disable();
    }
  }
}

</style>