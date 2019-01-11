<template>
  <li class="experience-item">

    <hgroup>
      <h1> {{ companyRol }} </h1>
      <h3> - {{ date }} - </h3>
    </hgroup>

    <section v-if="observation">
      <p> {{ observation }} </p>
    </section>

  </li>
</template>

<script>

export default {

  props: ['company', 'rol', 'date', 'observation'],
  computed: {
    companyRol: function () {
      return `${ this.company.toUpperCase() } -> ${ this.rol }`
    }
  }

}

</script>

<style lang="scss">

.experience-item {

  @include inherit-width;

  padding: 3em;
  border-bottom: 1px ridge #FFF176;
  color: #424242;
  text-align: center;

  hgroup {
    h1 {
      font-weight: 600;
      font-size: 1.5em;
    }
    h3 {
      padding-top: 1em;
      font-weight: 500;
    }
  }

 section {
  padding-top: 1em;
  font-size: 1.3em;
 }

}

</style>
