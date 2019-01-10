<template>
    <ul id="basic-menu">
      <li v-for="{ id, name, to } in links" :id="`${ name }-link`" :class="`${ name }-link`">
        <nuxt-link :to ="`${ to }`">
          {{ name }}
        </nuxt-link>
      </li>
    </ul>
</template>

<script>

export default {
  data () {
    return {
      links: [
        { id: 1, name: 'ABOUT', to: '/about' },
        { id: 2, name: 'SKILLS', to: '/skills' },
        { id: 3, name: 'EXPERIENCE', to: '/experience' },
        { id: 3, name: 'CODE', to: '/code' },
        { id: 3, name: 'CONTACT', to: '/contact' },
      ]
    }
  },
  methods: {
    show() {
      console.log('show nav')
    }
  }
}

</script>


<style lang="scss">

#basic-menu {

  @include flexbox;
  @include align-items(center);
  @include justify-content(flex-end);
  @include flex-wrap(wrap);
  //@include flex-flow(column wrap)

  width: inherit;
  height: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  //font-family: 'Ubuntu', sans-serif;


  li {
    padding: .5em 0 .5em 1em;
    font-size: 1.3em;
    height: auto;

    a {
      text-decoration: none;
      //color: #FFFF00;
      color: #212121;

      transition:  color 0.5s linear 0.2s;
      -webkit-transition:color 0.5s linear 0.2s;

      &:hover {
        @include active(#FAFAFA);
      }
    }
  }

  &.banner1 {
    @include justify-content(center);
  }

  &.extend {
    background-color: #F5F5F5;
    z-index: 5;
    @include flexbox;
    @include flex-flow(column wrap);

    li {
      font-size: 2em;
    }
  }

}

//Media queries
@media screen and (max-width: 20rem){
  #basic-menu {
      @include flex-flow(column wrap);
      display: none;
  }
}


</style>
