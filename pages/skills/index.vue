<template>
  <div id="skills-main-container">
    <banner class="header2-container"></banner>

    <div id="data-container" class="datac">
      <div v-on:click.prevent="up" class="button button-up hidden" id="button-up">
        <icon name="angle-up" scale="4"></icon>
      </div>

      <nav id="nav">
        <text-line :message="`${ title }`" id="fixed2" class="budge-left"></text-line>
        <skills-menu @move="changeSkills"/>
      </nav>

      <div id="dynamic-text">
        <!-- <Performance> -->
        <article class="active panel" id="performance">
          <opacity-container :text="`${ maintext }`" class="purple-text text-normal"/>

          <text-line :message="`${ title2 }`" class="sub"></text-line>

          <div class="next-container">
            <section class="middle">
              <list idData="3" class="normal"></list>
            </section>

            <section class="middle">
              <list idData="4" class="normal"></list>
            </section>
          </div>

          <text-line :message="`${ title3 }`" class="sub"></text-line>

          <opacity-container :text="`${ text2 }`" class="purple text-normal"/>
        </article>
        <!-- </Performance> -->
        <!-- Technologies -->
        <skills idData="1" class="panel"/>
        <!-- /Technologies -->
        <!-- Databases -->
        <skills idData="2" class="panel"/>
        <!-- /Databases -->
      </div>

      <footer-div/>
    </div>
  </div>
</template>

<script>
import Banner from '~/components/Banner2.vue'
import Skills from '~/components/Skills.vue'
import OpacityContainer from '~/components/OpacityContainer.vue'
import SkillsMenu from '~/components/menu/Menu.vue'
import TextLine from '~/components/TextLine.vue'
import List from '~/components/TextList.vue'
import FooterDiv from '~/components/Footer.vue'

import Observers from '~/assets/observers.js'

import 'vue-awesome/icons/angle-up'
import Icon from 'vue-awesome/components/Icon.vue'

export default {
  components: {
    Banner,
    Skills,
    OpacityContainer,
    SkillsMenu,
    TextLine,
    List,
    FooterDiv,
    Icon
  },
  data() {
    return {
      title: 'Maria´s Skills',
      title2: 'Abilities and experience:',
      title3: 'Challenges:',
      maintext: `I love everything about software and I know that it´s a big world.
                    For that, I focus on receive the client's needs and propouse alternatives solve their problems,
                    until they are satisfied; I don't know everything,
                    but I find the appropiate tecnology, asimilate and apply it.`,
      text2:
        'My current English level is medium, I am working on improving my pronunciation skills.',
      html: '',
      subject: [],
      observerScroll: [],
      observerResize: []
    }
  },
  methods: {
    // Validate scroll event to fixed element
    scroll(event) {
      const scroll = document.documentElement.scrollTop
      const headerHeight = document.getElementById('header2-container')
        .offsetHeight
      let div = document.getElementById('dynamic-text')
      let nav = document.getElementById('nav')
      let nav2 = document.getElementById('fixed2')

      if (scroll >= headerHeight) {
        nav.classList.add('fixed')
        //nav2.classList.add('fixed')
        div.style.paddingTop = `${nav.offsetHeight}px`

        if (!document.getElementById('button-up').classList.contains('visible'))
          this.showHide('button-up', 'visible')
      } else if (scroll <= 84) {
        nav.classList.remove('fixed')
        div.style.paddingTop = '2em'

        if (document.getElementById('button-up').classList.contains('visible'))
          this.showHide('button-up')
      }
    },

    // Set top property of data-container
    resize() {
      //Get size header2
      let height = document.getElementById('header2-container').offsetHeight

      //Set top on #data-container
      document.getElementById('data-container').style.top = `${height}px`
    },

    // Scrolling when menu skills options clicked
    changeSkills() {
      //Get current position
      const to = this.html.scrollTop

      //Direction validation
      const limit = document.getElementById('header2-container').offsetHeight

      if (to <= limit) {
        this.$emit('scrollDown', event, limit)
      } else {
        this.$emit('scrollUp', event, limit)
      }
    },

    // Move scroll down
    scrollDown(event, limit) {
      const to = this.html.scrollTop

      if (to >= limit) return

      const _self = this
      const current_position = to + 5
      const position = current_position >= limit ? limit : current_position

      setTimeout(function() {
        _self.html.scrollTop = position
        _self.$emit('scrollDown', event, limit)
      }, 10)
    },

    // Move scroll up
    scrollUp(event, limit) {
      const to = this.html.scrollTop

      if (to <= limit) return

      const _self = this
      const current_position = to - 15
      const position = current_position <= limit ? limit : current_position

      setTimeout(function() {
        _self.html.scrollTop = position
        _self.$emit('scrollUp', event, limit)
      }, 10)
    },

    // Click on button-up
    up() {
      this.$emit('scrollUp', event, 0)
    },

    // Show or hide element
    showHide(id) {
      let element = document.getElementById(id)

      if (element.classList.contains('visible')) {
        element.classList.remove('visible')
        element.classList.add('hidden')
      } else {
        element.classList.remove('hidden')
        element.classList.add('visible')
      }
    }
  },

  mounted() {
    this.resize()

    this.html = document.documentElement

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
    this.$on('scrollDown', this.scrollDown)
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
    delete this.scrollTop
    delete this.scrollDown

    // Disconnect event signals betwen components
    this.$off('scrollUp', this.scrollUp)
    this.$off('scrollDown', this.scrollDown)
  }
}
</script>

<style lang="scss">
#skills-main-container {
  background-color: #fafafa;
  position: relative;
  //font-family: 'Ubuntu', sans-serif;
  font-family: 'Tajawal', sans-serif;
  height: auto;
  font-size: 100%;
  @include main-width;
  display: block;
  margin: 0 auto;

  #header2-container {
    #SKILLS-link {
      @include disable();
    }
  }

  #data-container {
    /*@include inherit-width;

    min-height: 60vh;
    height: auto;
    max-height: auto;
    background-color: #FAFAFA;
    position: relative;
    z-index: 3;*/

    /*.button-up {
      position: fixed;
      top: 0;
      right: 2%;
      color: #9c27b0;
      z-index: 5;
    }*/

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

      .next-container {
        @include inherit-width;
        height: auto;
        padding: 2em 0 2em 0;
        @include flexbox;

        .middle {
          width: 50%;
          height: auto;
          padding-left: 10%;
        }
      }

      .panel {
        width: 100%;
        position: absolute;
        left: -500%;
        padding: 2em 0 2em 0;
        display: none;

        &.active {
          position: relative;
          left: 0;
          display: block;
        }
      }
    }
  }

  footer {
    #Skills-link {
      @include disable;
    }
  }
}

//Media queries

@media screen and (max-width: 48rem) {
  #skills-main-container {
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

      .dynamic-text {
        width: 95%;
      }
    }
  }
}

@media screen and (max-width: 20rem) {
  #skills-main-container {
    //font-size: 60%;

    #data-container {
      top: 20vh;
    }
  }
}

@media screen and (min-width: 100rem) {
  #skills-main-container {
    font-size: 120%;
  }
}

@media screen and (min-width: 120rem) {
  #skills-main-container {
    font-size: 160%;
  }
}

@media screen and (min-width: 150rem) {
  #skills-main-container {
    font-size: 210%;
  }
}

@media screen and (min-width: 200rem) {
  #skills-main-container {
    font-size: 270%;
  }
}
</style>
