<template>
  <div class="info-container">
    <figure v-if="img">
      <img :src="`${ img }`" :alt="`${ alt }`">
    </figure>

    <list :idData="`${ idData }`" v-if="activeList" :cls="`${ cls }`"></list>
  </div>
</template>

<script>
import List from '~/components/TextList.vue'

export default {
  components: {
    List
  },
  props: ['img', 'alt', 'activeList', 'idData', 'cls']
}
</script>

<style lang="scss">
.info-container {
  @include flexbox;
  @include justify-content(center);
  @include align-items(center);

  width: 100%;
  height: 67vh;
  position: relative;

  figure {
    height: inherit;
    margin-left: 50%;

    img {
      height: inherit;
    }
  }

  // Performance professional list
  &.data2 {
    height: inherit;

    .text-list > ul > li > .line-text {
      color: #424242;
      padding: 0 0 1.3em 2em;

      .text {
        font-size: 1.4em;
        font-style: normal;
        text-align: left;
      }
    }
  }
}

//Media queries

@media screen and (max-width: 48rem) {
  .info-container {
    height: 60vh;

    figure {
      margin-left: 0%;
    }

    // Performance professional list
    &.data2 {
      .text-list > ul {
        padding-bottom: 0.5em;
      }
    }
  }
}

@media screen and (max-width: 30rem) {
  .info-container {
    height: auto;

    figure {
      margin-bottom: -2%;
    }
  }
}

/* Smartphones (landscape)*/
@media only screen and (min-width: 20rem) and (max-height: 30rem) and (orientation: landscape) {
  .info-container {
    .text-list > ul > li {
      .line-text {
        margin-bottom: 0.3em;
        padding: 0.1em;

        .text {
          font-size: 1.3em;
        }

        .circle {
          width: 1.2em;
          height: 1.2em;
          line-height: 1.3em;
        }
      }
    }
  }
}
</style>
