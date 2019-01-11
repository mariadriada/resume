<template>
  <div id="experience-main-container">

    <banner />

    <div id="data-container">

    <div v-on:click.prevent="up" class="button button-bars visible" id="button-bars">
      <icon name="bars" scale="2" ></icon>
    </div>

      <text-line :message="`${ title }`"  class="budge-left" id="nav" />

      <div id="dynamic-text">

        <article class="active panel" id="performance" >

          <opacity-container :text="`${ text1 }`" class="purple-text-serie  text-normal">
          </opacity-container>

          <opacity-container :text="`${ text2 }`" class="purple-text text-normal">
          </opacity-container>

          <text-line :message="`${ title3 }`" class="sub"></text-line>

          <experience/>

        </article>

      </div>

      <footer-div/>

    </div>
  </div>
</template>

<script>

import Banner from '~/components/Banner2.vue'
import OpacityContainer from '~/components/OpacityContainer.vue'
import TextLine from '~/components/TextLine.vue'
import FooterDiv from '~/components/Footer.vue'
import Experience from '~/components/Experience.vue'

import Observers from '~/assets/observers.js'

import "vue-awesome/icons/bars"
import Icon from 'vue-awesome/components/Icon.vue'

export default {

  components: {
    Banner,
    OpacityContainer,
    TextLine,
    FooterDiv,
    Experience,
    Icon
  },
  data () {
    return {
      title: 'Maria´s Experience',
      title3: 'Roles:',
      text1: `For the last ten years I have professionally developed in the computing,
              mostly as a analyst and software develper.`,
      text2: `I characterize myself for doing best on y job and it has allowed me
              to reach a high performance on planning and leadership
              on the software development workteams.`,
      html: '',
      subject: [],
      observerScroll: [],
      observerResize: [],

    }
  },
  methods: {

    // Validate scroll event to fixed element
    scroll(event) {

      const scroll = document.documentElement.scrollTop
      const headerHeight = document.getElementById('header2-container').offsetHeight;
      let div = document.getElementById('dynamic-text')
      let nav = document.getElementById('nav')

      if ( scroll >= headerHeight ) {
        nav.classList.add('fixed')
        div.style.paddingTop = `${ nav.offsetHeight }px`

        if (!document.getElementById('button-bars').classList.contains('visible'))
        this.showHide('button-bars', 'visible')
      }
      else if ( scroll <= 84 ) {
        nav.classList.remove('fixed')
        div.style.paddingTop = "2em"

        if (document.getElementById('button-bars').classList.contains('visible'))
        this.showHide('button-bars')
      }
    },

    // Set top property of data-container
    resize() {

      //Get size header2
      let height = document.getElementById('header2-container').offsetHeight ;

      //Set top on #data-container
      document.getElementById('data-container').style.top = `${ height }px`

    },

    // Move scroll up
    scrollUp(event, limit) {

      const to =  this.html.scrollTop

      if (to <= limit) return

      const _self = this
      const current_position = to - 15
      const position = current_position <= limit ? limit : current_position

      setTimeout( function() {
        _self.html.scrollTop = position
        _self.$emit('scrollUp', event, limit)
      },10)

    },

    // Click on button-bars
    up() {
      this.$emit('scrollUp', event, 0)
    },

    // Show or hide element
    showHide(id) {

      let element = document.getElementById(id)

      if (element.classList.contains('visible')) {
        element.classList.remove('visible')
        element.classList.add('hidden')
      }
      else {
        element.classList.remove('hidden')
        element.classList.add('visible')
      }
    }

  },

  mounted () {
    this.resize();

    this.html = document.documentElement

    //Hide button-bars
   // this.showHide('button-bars')

    /* Handle Observers */
    this.subject = new Observers.ISubject()

    // Handle scroll
    this.observerScroll = new Observers.IObserver()
    this.subject.addObserver(this.observerScroll, this.subject)
    this.observerScroll.notify = this.scroll
    this.subject.notify(this.observerScroll, document, 'scroll')

    // Handle resize
    this.observerResize = new Observers.IObserver()
    this.subject.addObserver(this.observerResize, this.subject)
    this.observerResize.notify = this.resize
    this.subject.notify(this.observerResize, window, 'resize')

    //  Event signals betwen vue components
    this.$on('scrollUp', this.scrollUp)
  },
  beforeDestroy() {

    // Destroy events handle and methods
    this.subject.removeObserver(this.observerScroll, this.subject)
    this.subject.removeObserver(this.observerResize, this.subject)
    delete this.subject
    delete this.observerScroll
    delete this.observerResize
    delete this.scroll
    delete this.resize
    delete this.scrollDown

    // Disconnect event signals betwen components
    this.$off('scrollUp', this.scrollUp)
  }
}

</script>

<style lang="scss">

#experience-main-container {

  background-color: #FAFAFA;
  position: relative;
  //font-family: 'Ubuntu', sans-serif;
  font-family: 'Tajawal', sans-serif;
  height: auto;
  font-size: 100%;
  @include main-width;
  display: block;
  margin:0 auto;

  #header2-container {
    #Experience-link {
      @include disable(#FFFF00);
    }
  }

  #data-container {

    @include inherit-width;

    min-height: 60vh;
    height: auto;
    max-height: auto;
    background-color: #FAFAFA;
    position: relative;
    z-index: 3;

    .button-bars {
      position: fixed;
      top: 0;
      right: 2%;
      color: #9C27B0;
      z-index: 5;
    }

    nav {
      @include inherit-width;
    }

    #dynamic-text {

      @include flexbox;
      @include align-items(center);
      @include justify-content(center);

      width: 80%;
      height: auto;
      margin: 0 auto;
      position: relative;
      //font-family: 'Raleway', sans-serif;
      padding-top: 2em;

    }
  }
}

//Media queries

@media screen and (max-width: 48rem) {

  #experience-main-container {
    font-size: 70%;

    #data-container {

      #performance {
        .next-container {
          @include flex-direction(column);

          .middle {
            width: 100%;
            padding-left: 0;
          }
        }
      }

      .dynamic-text
      {
        width: 95%;
      }
    }
  }
}

@media screen and (max-width: 20rem) {
  #experience-main-container {
    //font-size: 60%;

    #data-container {
      top: 20vh;
    }

    #button-bars {
      visibility: visible;
    }
  }
}

@media screen and (min-width: 100rem) {
  #experience-main-container {
    border: 5px solid red;
    font-size: 120%;
  }
}

@media screen and (min-width: 120rem) {
  #experience-main-container {
   font-size: 160%;
  }
}

@media screen and (min-width: 150rem) {
  #experience-main-container {
    font-size: 210%;
  }
}


@media screen and (min-width: 200rem) {
  #experience-main-container {
    font-size: 280%;
  }
}

</style>
