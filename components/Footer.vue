<template>
  <footer>

    <!--<nav class="menu"> <basic-menu/> </nav>-->

    <div>

      <section class="author">
        <p class="text">
          {{ text }}
        </p>
        <p class="cc"> {{ cc }} </p>
      </section>

      <aside id="img">
        <figure>
          <img :src="`${ img }`" :alt="`${ alt }`" />
        </figure>
      </aside>

    </div>

  </footer>
</template>

<script>

import BasicMenu from '~/components/menu/BasicMenu.vue'

export default {

  components: {
    BasicMenu
  },
  data () {
    return {
      text:'Design and development by',
      cc: '©MariaDriada',
      img: '/img/firma.png',
      alt: 'Maria Eugenia Giraldo Forero'
    }
  }

}

</script>


<style lang="scss">

footer {

  //background-color: #FFEB3B;
  background-color: #0277BD;
  min-height: 25vh;
  margin: 0 auto;
  @include inherit-width;

  div {
    @include flexbox
    @include justify-content(center);
    min-height: inherit;
    height: auto;

    .author {

      @include flexbox;
      @include align-items(left);
      @include flex-direction(column);
      @include justify-content(center);

      width:50%;
      font-family: 'Indie Flower', cursive;
      font-size: inherit;
      //padding-left: 2em;
      //color: #9C27B0;
      color: #F5F5F5;
      height: auto;
      //padding-top: 1.5em;
      padding: 1.6em 0 0 2em;

      .text{
        font-size: 1.3em;
      }

      .cc {
        font-size: 3em;
      }
    }

    #img {

      @include flexbox;
      @include align-items(flex-end);
      @include justify-content(flex-end);

      width: 50%;
      height:inherit;
      font-size:inherit;
      padding: 0 2em .5em 0;

      figure {
        width: 17em;

        img {
          width: inherit;
          border-bottom: 1px solid #F5F5F5;
        }
      }
    }
  }

  .menu {
    width: 100%;
    height: auto;
    background-color: #FFEB3B;
    padding-right: 2em;
  }

}

//Media queries

@media screen and (max-width: 48rem) {
  footer {
    padding-top: 2em;

    div {
      display: block;

      .author {
        width: 100%;
        display:block;
        padding: 0;
        margin: 0 auto;
        text-align:center;
      }

      #img {
        width: 100%;
        padding: 1em 0 1em 0;

        figure{
          width: 100%;

          img {
            width: 40%;
            display:block;
            margin: 0 auto;
            padding-top:2em;
          }
        }
      }
    }
  }

  .menu {
    #basic-menu {
      @include justify-content(center);
      padding: 1em 0 3em 0;
    }
  }
}

@media screen and (max-width: 38rem) {
  footer {
    div {
      #img {
        figure {
          img {
            width: 50%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 28rem) {
  footer {
    div {
      #img {
        figure {
          img {
            width: 70%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 20rem) {
  footer {
  .menu {
      //padding: 1em 0 2em 0;
    }
  }
}

</style>
