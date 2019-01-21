<template>
  <div id="code-container">
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
      title: 'Code for this project',
      description: 'This repository using Nuxt.js with Vue.js.',
      link: 'https://github.com/mariadriada/resume',
      textlink: 'Click here to review the code.'
    }
  }
}
</script>

<style lang="scss">
#code-container {
  @include main-width;
  height: 100vh;
  background-size: 100% 100%;
  cursor: default;
  font-family: 'Tajawal', sans-serif;

  #header2-container {
    #CODE-link {
      @include disable();
    }
  }
}

</style>