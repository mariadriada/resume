<template>
  <article class="article-redirect">
    <header>
      <text-line :message="`${ title }`" class="sub"></text-line>
      </header>
      <section id="section-redirect">
        <p> {{ description }} </p>
        <p><a target="_blank" :href="`${ link }`"> {{ textlink }} </a></p>
      </section>
  </article>
</template>

<script>
import TextLine from '~/components/TextLine.vue'

export default {
  components: {
    TextLine
  },
  props: ['title', 'description', 'link', 'textlink']

}
</script>

<style lang="scss">
.article-redirect {
  font-size: 100%;

  #section-redirect {
    font-size: 1.4em;
    text-align: center; 
    font-family: 'Tajawal', sans-serif;   
  }
}

//Media queries
@media screen and (min-width: 120rem) {
  .article-redirect {
    font-size: 75%;
  }
}

@media screen and (min-width: 150rem) {
  .article-redirect {
    font-size: 80%;
  }
}

@media screen and (min-width: 200rem) {
  .article-redirect {
    font-size: 100%;
    border: 1px solid red;
  }
}

</style>
