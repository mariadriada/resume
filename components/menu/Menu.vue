<template>
  <ul class="menu">
    <opt v-for="{ id, name, active, link } in options " @move="move"
    :key = "id"
    :id = "id"
    :name = "`${ name }`"
    v-if = "active">
    </opt>
  </ul>
</template>

<script>
import Opt from '~/components/menu/option.vue'

export default {
  components: {
    Opt
  },
  data () {
    return {
      options: [
        { id: 1, name: 'Performance', active: true },
        { id: 2, name: 'Technologies',  active: true },
        { id: 3, name: 'DataBases',  active: true },
      ]
    }
  },
  methods: {
    move() {
      this.$emit('move')
    }
  }
}
</script>

<style lang="scss">

.menu {

  @include flexbox;
  @include align-items(flex-end);
  @include justify-content(center);

  width: 100%;
  height: 100%;
  list-style: none;
  //font-family: 'Ubuntu', sans-serif;
  background-color: #F5F5F5;
  padding: 0;

}

</style>
