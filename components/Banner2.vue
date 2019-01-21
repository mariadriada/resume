<template>
  <header id="header2-container">
    <section v-if="banner1" id="section1">
      <h1 v-if="title">{{ title }}</h1>
      <h2 v-if="subtitle">{{ subtitle }}</h2>
    </section>

    <section v-else id="section2">
      <div id="profile">
        <figure>
          <nuxt-link to="/about">
            <img :src="`${ img }`" :alt="`${ alt }`">
          </nuxt-link>
        </figure>
      </div>

      <hgroup id="content">
        <h1>{{ text1 }}</h1>
        <h2>{{ text2 }}</h2>
      </hgroup>
    </section>

    <nav v-if="!banner1" id="menu-top">
      <basic-menu/>
    </nav>
    <nav v-else>
      <basic-menu :class="'banner1'"/>
    </nav>
  </header>
</template>

<script>
import BasicMenu from '~/components/menu/BasicMenu.vue'

export default {
  props: ['banner1', 'title', 'subtitle', 'cls'],
  components: {
    BasicMenu
  },
  data() {
    return {
      text1: 'Maria Eugenia Giraldo Forero',
      text2: 'Business Analyst and Software Developer',
      img: '/img/profile.png',
      alt: 'Maria Eugenia Giraldo Forero'
    }
  }
}
</script>

<style lang="scss">
#header2-container {
  @include inherit-width;
  height: auto;
  position: fixed;
  background-color: #f5f5f5;

  #section1 {
    @include flexbox;
    @include flex-direction(column);
    @include justify-content(center);
    @include align-items(center);

    @include inherit-width;
    z-index: 2;
    position: relative;
    color: #212121;
    font-family: 'Libre Baskerville', serif;
    height: auto;

    h1 {
      font-size: 3em;
      padding: 0.3em 0 0.001em 0;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    h2 {
      font-size: 1.5em;
      font-weight: 500;
      padding-bottom: 0.5em;
      color: #0277bd;
    }
  }

  #section2 {
    @include flexbox;
    background-color: #4fc3f7;

    height: auto;

    #profile {
      width: 40%;
      height: inherit;
      padding: 0.5em 0 0.5em 2em;

      figure {
        width: 10em;
        height: 10em;
        background-color: #fafafa;
        border-radius: 50% 50%;
        display: block;

        img {
          width: 8em;
          display: block;
          margin: 0 auto;
          border: 0;
        }
      }
    }

    hgroup {
      width: 60%;
      padding: 0.5em 2em 0 0;
      text-align: right;

      @include flexbox;
      @include flex-direction(column);

      h1 {
        color: #fafafa;
        font-weight: 100;
        font-size: 1.6em;
      }

      h2 {
        margin-left: 30%;
        color: #fafafa;
        font-weight: 200;
        font-style: oblique;
        font-size: 1.1em;
      }
    }
  }

  #menu-top {
    padding-right: 2em;
    margin-top: -3rem;
    background-color: #4fc3f7;

    li {
      a {
        // color: #FAFAFA;

        &:hover {
          @include active;
        }
      }
    }
  }
}

//Media queries

@media screen and (max-width: 48rem) {
  #header2-container {
    #menu-top {
      margin-top: -2.5rem;
    }
  }
}

@media screen and (max-width: 30rem) {
  #header2-container {
    #menu-top {
      margin-top: -2rem;
    }
  }
}

@media screen and (max-width: 20rem) {
  #header2-container {
    section {
      hgroup {
        @include justify-content(space-around);
        padding-top: 0;
      }
    }

    #menu-top {
      margin-top: 0;
      background-color: #aa00ff;
    }

    #section1 {
      padding: 15% 0 5% 0;

      h1 {
        //font-size: 2.5em;
        padding-top: 5%;
      }
    }
  }
}
</style>
