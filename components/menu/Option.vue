<template>
    <li @click="change" class="tabs-item " :class="`${ name }-link`" :id="`link${ id }`" >
      {{ name }}
    </li>
</template>

<script>

export default {
  props: ['id', 'name'],
  methods: {

    // Check skill menu option clicked and activate the correct panel by scrolling
    change: function (e) {

      let tabs = Array.prototype.slice.apply(document.querySelectorAll('.tabs-item'))
      let panels = Array.prototype.slice.apply(document.querySelectorAll('.panel'))
      const i = tabs.indexOf(e.target);

      // Active tab
      tabs.map(tab => tab.classList.remove('active'))
      tabs[i].classList.add('active')

      // Active panel
      panels.map(panel => panel.classList.remove('active'))
      panels[i].classList.add('active')

      // Scrolling
      this.$emit('move')

    },
  },
  mounted () {
    document.getElementById('link1').classList.add('active');
  }
}

</script>

<style lang="scss">

.tabs-item {
  padding: .5em 0 .5em 0;
  color: #616161;
  width: 35%;
  max-width: auto;
  text-align: center;
  font-size: 1.4em;
  cursor: pointer;
  border-left: 2px solid #03A9F4;

  transition:  color 0.8s linear 0.2s;
  -webkit-transition:color 0.8s linear 0.2s;

  &#link1 {
    border-left: 0;
  }

  &:hover {
    @include active(#03A9F4);
  }

  &.active {
    text-decoration: underline;
    @include active(#03A9F4);
  }
}

</style>
