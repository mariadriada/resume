<template>
  <li class="skill-item">

    <figure >
      <a target="_blank" :href="`${ doc }`">
        <img :src="`${ img }`" :alt="`${ alt }`" />
      </a>
    </figure>

    <hgroup class="name">
      <h1 class="name-text"> {{ name }} </h1>
      <h2 class="level-tag"> {{ tag }} </h2>
      <h3 class="description"> {{ description }} </h3>
    </hgroup>

  </li>
</template>

<script>

export default {
  props: ['name', 'description', 'level', 'img', 'alt', 'doc',  'tag']
}

</script>

<style lang="scss">

.skill-item {

  @include flexbox;
  @include align-items(baseline);
  @include flex-direction(column);
  @include justify-content(center);

  width: 30%;
  max-height: 16em;
  //font-size: 100%;
  margin: .3em;
  padding: .5em;

  figure {
    width:100%;
    height:40%;
    padding: .5em 0 0 0;

    img {
      max-width: 80%;
      height: 100%;
      display: block;
      margin: 0 auto;
      border: 0;
    }
  }

  hgroup {

    width:100%;
    height:auto;
    text-align:center;

    h1{
      padding: .5em;
      font-size: 1.5em;
      font-weight: 400;
    }

    h2 {
      padding: .5em;
      font-weight: 400;
      color: #F9FBE7;
      font-size: 1.1em;
    }

    h3 {
      padding: 0 .5em 0.5em .5em;
      font-weight: 400;
      font-size: 1em;
      text-align: left;
      font-style: Italic;
      padding: .5em;
      color: #757575;
    }
  }

  // Style performance mixin
  @mixin performance($bkg, $border-color, $text-color, $content) {

    background-color: $bkg;
    box-shadow: 0 1px 7px $border-color;

    *.name>.level-tag {

      background-color: $border-color;

      &:after {
        content: $content;
      }
    }

    *.name>.name-text {
      color: $text-color
    }
  }

  // High peformance
  &.high {
    @include performance(#E8F5E9, #4CAF50, #1B5E20,'Hihg applied performance');
  }

  // Moderate performance
  &.moderate {
    @include performance(#FFF8E1, #FFA726, #E65100, 'Moderate applied performance');
  }

  //Basic performance
  &.basic {
    @include performance(#E1F5FE, #01579B, #01579B, 'Basic applied performance');
  }
}

// Media queries

@media screen and (min-width: 80rem) {
  .skill-item {
    width: 23%;
  }
}

@media screen and (max-width: 48rem) {
  .skill-item {
    min-width: 45%;
    font-size: 130%;
  }
}

@media screen and (max-width: 30rem) {
  .skill-item {
    min-width: 100%;
  }
}

</style>
