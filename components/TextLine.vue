<template>
  <div class="text-line">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style lang="scss">
.text-line {
  @include inherit-width;
  @include flexbox;
  @include justify-content(center);
  @include align-items(center);

  min-height: 7vh;
  text-align: center;
  //background-color: #FFF176;
  background-color: #0277bd;
  height: auto;
  transition: all 0.3s ease;
  font-family: 'Libre Baskerville', serif;

  h2 {
    font-weight: 500;
    //color: #01579B;
    color: #eceff1;
    font-size: 1.4em;
    padding: 0.5em;
    letter-spacing: 0.1em;
  }

  &.sub {
    background-color: #fafafa;

    h2 {
      padding: 2rem 0 2rem 0;
      letter-spacing: 0.09em;
      color: #212121;
    }
  }
}
</style>
