<template>

  <!-- main-container -->
  <div id="main-container">

    <banner :title="`${ title }`" :subtitle="`${ subtitle }`" banner1="true" class="banner1" cls="banner1" ></banner>

    <div id="data-container">

    <div id="fixed">
      <text-line :message="`${ message }`"  class=" budge-left"></text-line>
    </div>

    <!--box-container-->
    <div id="box-container" class="box-container budge-right">

      <div class="side left-side">
        <info-container :img="`${ img.src }`" :alt="`${ img.alt }`">
        </info-container>
      </div>

      <div class="side center-side" >
        <info-container activeList="true" idData="1" cls="bkg">
        </info-container>
      </div>

        <!-- TODO <div class="button button-down"><icon name="angle-down" scale="4"  ></icon></div>-->
        <div v-on:click.prevent="scrollTop" class="button button-up" id="button-up">
          <icon name="angle-up" scale="4" ></icon>
        </div>

        <div v-on:click.prevent="menuShowHide" class="button button-bars" id="button-bars">
            <icon name="bars" scale="2.5"></icon>
        </div>

    </div>
    <!-- /box-container -->

    <!-- next-container -->
    <div class="next-container">
      <text-line :message="`${profession.title}`" class="sub"></text-line>

      <div class="block">
        <div class="side middle middle1">
          <info-container activeList="true" idData="2" class="data2">
          </info-container>
        </div>

        <div class="side middle description">
          <opacity-container :text="`${profession.text1}`" class="blue ">
          </opacity-container>
        </div>
      </div>

      <div class="block b1">
          <opacity-container :text="`${profession.text2}`" class="default center">
          </opacity-container>
      </div>
    </div>
    <!-- next-container -->

  <footer-div/>

  </div>
  <!-- /data-container -->

  </div>
  <!-- /main-container -->

</template>

<script>

import Banner from '~/components/Banner2.vue'
import TextLine from '~/components/TextLine.vue'
import InfoContainer from '~/components/InfoContainer.vue'
import FooterDiv from '~/components/Footer.vue'
import OpacityContainer from '~/components/OpacityContainer.vue'
import Observers from '~/assets/observers.js'

//vue-awesome plugin import
import "vue-awesome/icons/angle-up"
//import "vue-awesome/icons/angle-down" //TODO
import "vue-awesome/icons/bars"
import Icon from 'vue-awesome/components/Icon.vue'
import BasicMenu from '~/components/menu/BasicMenu.vue'

export default {

  components: {
    Banner,
    TextLine,
    InfoContainer,
    OpacityContainer,
    Icon,
    FooterDiv,
    BasicMenu
  },

  data () {
    return {
      title: 'Welcome!',
      subtitle: "I'm Maria Giraldo",
      message: 'I love to analyze and software coding!',
      img: {
        src: '/img/mariagiraldo.png',
        alt: 'Maria Giraldo',
      },
      textlist:
      [
        { id: 1, text: 'frase 1', active: true, circle: true },
        { id: 2, text: 'frase 2', active: true, circle: true },
      ],
      profession: {
        title: `Maria´s profession`,
        text1: `I’m a person interested in the technology, the software architecture,
                      the planning of projects and work by objectives.`,
        text2: 'Responsible and dedicated to knowledge that I have no.',
      },
      headerHeight: 0,
      subject: [],
      observerScroll: [],
      observerResize: [],
    }
  },

  methods: {

    scrollTop () {

      console.log('srollllllllll')
      let html = document.documentElement
      let to = document.documentElement.scrollTop

      if (to <= 0) return

      let _self = this

      setTimeout(function(){
        console.log('this', this)
        html.scrollTop = to -20
        _self.$emit('scrollTop')
      },10)

    },

    scroll(event) {

      const scroll = document.documentElement.scrollTop
      let textelement = document.getElementById('fixed')
      let buttonup = document.getElementById('button-up')

      // Apply effects when scrolling
      if ( scroll >= 135 ) {
        textelement.classList.remove("budge-left");
        textelement.classList.add("fixed");
        //this.showHideNav(false, 'block')

        buttonup.classList.remove('hidden')
        buttonup.classList.add('visible')

        if ( scroll > 400 ) {
          //let buttonright = document.getElementById('button-right')

          /*if( !buttonright.classList.contains('visible') ) {
            buttonright.classList.remove('hidden')
            buttonright.classList.add('visible')
          }*/
        }
      }
      else {
        textelement.classList.remove('fixed')
        //this.showHideNav(false, 'none')

        buttonup.classList.add('hidden')
        buttonup.classList.remove('visible')
      }
    },

    // Set top property of data-container
    resize() {

      //Get size header2
      this.headerHeight = document.getElementById('header2-container').offsetHeight ;

      console.log('resize', this.headerHeight)

      //Set top on #data-container
      document.getElementById('data-container').style.top = `${ this.headerHeight }px`

    },
    menuShowHide() {

      let menu = document.getElementById('basic-menu')

      if (menu.classList.contains('extend')) {
        menu.classList.remove('extend')
        alert('remove');
      }


      let windowHeight = window.innerHeight
      let navHeight = windowHeight - this.headerHeight


      document.getElementById('data-container').style.top = '100vh'

      menu.style.height = `${navHeight}px`
      menu.classList.add('extend')

    },
    showHideNav(change = true, fixed = "block") {
      let nav = document.getElementById('fixed').childNodes[0]

      //change state when clicked
      if (change) {
        nav.style.display === 'block' ? nav.style.display = 'none' : nav.style.display = 'block'
      }
      else{
        nav.style.display = `${ fixed }`
      }


    }
  },
  mounted () {

    // Progress bar
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })

    document.getElementById('button-up').classList.add('hidden')

    this.resize()

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

    // Event signals betwen vue components
    this.$on('scrollTop', this.scrollTop)
    this.$on('scrollDown', this.scrollDown)

  },
  beforeDestroy () {

    // Destroy events handle and methods
    this.subject.removeObserver(this.observerScroll, this.subject)
    delete this.scroll
    delete this.scrollTop
    delete this.subject
    delete this.observerScroll

    // Disconnect event signals betwen components
    this.$off('scrollTop', this.scrollTop)
    this.$off('scrollDown', this.scrollDown)

  },
  destroyed () {
    console.log('destruido', this.title)
  }
}
</script>

<style lang="scss">

#main-container {

  @include main-width;

  height: auto;
  background-size: 100% 100%;
  cursor: default;
  font-family: 'Tajawal', sans-serif;

  padding: 0;
  font-size: 100%;

  #data-container {
    @include inherit-width;

    min-height: 60vh;
    height: auto;
    max-height: auto;
    background-color: #FAFAFA;
    position: relative;

    #fixed {
      @include inherit-width;
      height:auto;
      background-color: #F5F5F5;

      nav {
        display: none;
      }
    }
  }

  .box-container {

    @include inherit-width;
    @include flexbox;

    visibility: hidden;
    height: auto;
    background-image: url('/img/t4.jpg');
    background-attachment: fixed;

    .left-side {
      width: 40%;
    }
    .center-side {
      width:60%;
    }

    //buttons appearance
    .button {
      color: #9C27B0;
      cursor: pointer;
    }
    .button-up {
      position: fixed;
      top: 80vh;
      right: 2%;
      z-index: 5;
    }
    .button-down {
      position: fixed;
      top: 50vh;
      right: 2%;
      z-index: 5;
    }
    .button-bars {
      position: fixed;
      top:2%;
      right: 2%;
      z-index: 5;
      color: #212121;
      visibility: hidden;
    }
    a:visited {
      color: #9C27B0;
    }
    a:line {
      color: #9C27B0;
    }

  }

  .next-container {

    width: 100%;
    height: auto;

    .block {
      width:100%;
      @include flexbox;

      .middle {
        width:50%;
        height: inherit;
        @include flexbox;
      }

      .middle1 {
        background-color: #FAFAFA;
      }
    }

    .b1 {
      background-image: url('/img/t4.jpg');
    }

  }

  #ABOUT-link {
    @include disable;
  }

  //Transitions

  .budge-right {
    visibility: visible;
    -webkit-animation: budgeRight 1s ease;
    animation: budgeRight 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  .budge-left {
    visibility: visible;
    -webkit-animation: budgeLeft 1s ease;
    animation: budgeLeft 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }
}


//Media queries

@media screen and (max-width: 48rem) {
  #main-container {

    font-size: 70%;

    #box-container {
      background-size: 30%;
    }

    .next-container {
      width:100%;

      .block {

        width: 100%;
        @include flex-direction(column);

        .middle {
          width: 100%;
        }
      }
    }

    .menu {
      padding: 0;
      margin: 0;
    }
  }
}

@media screen and (max-width: 30rem) {
  #main-container {
    #box-container {

      @include flex-direction(column)
      background-image: url('/img/tsmall.png');
      background-size: 50%;

      .side {
        width: 100%;
      }

      .center-side {
        padding: 1em 0 1em 1em;
        border-top: 2px groove #FFF176;
        z-index: 2;
      }
    }

    .next-container {
      .b1 {
        background-size: 50%;
      }
    }
  }
}

@media screen and (max-width: 20rem) {
  #main-container {
    font-size: 70%;

    #data-container {
     // top: 20vh;

      #box-container {
        .button {
          transform: scale(.7);
        }
      }

    }

    #button-bars {
      visibility: visible;
    }






  }
}


@media screen and (min-width: 100rem) {
  #main-container {
    font-size: 150%;
  }
}

@media screen and (min-width: 120rem) {
  #main-container {
   font-size: 180%;
  }
   #box-container {
    background-size: 20%;
  }
}

@media screen and (min-width: 150rem) {
  #main-container {
    font-size: 210%;
  }
}

@media screen and (min-width: 200rem) {
  #main-container {
    font-size: 270%;
  }
}

</style>
