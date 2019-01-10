<template>
  <div class="opacity-container">
    <p>{{ text }}</p>
  </div>
</template>

<script>

export default {
  props: ['text']
}

</script>

<style lang="scss">

.opacity-container {

  @include flexbox;
  @include align-items(center);

  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;

  p {
    width: inherit;
    color: #FFEB3B;
    font-size: 1.7em;
    text-align: center;
    padding: 2em;
  }

  @mixin opacitfix($opacity: .3 , $bgcolor:#FFEB3B ) {

    @if $opacity > 0 {

      ::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: $bgcolor;
        opacity: $opacity;
        filter: alpha(opacity = $opacity * 1000 );
        khtml-opacity:  $opacity;
        -moz-opacity: $opacity;
      }
    }

  }

  &.default {
    @include opacitfix();

    p {
      color: #FAFAFA;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }

  &.text-normal {
    p {
      font-size: 1.5em;
    }
  }

  &.purple{
    margin: 2em 0 2em 0;
    background-color: #9C27B0;
  }

  &.blue {
    background-color: #4FC3F7;
  }

  &.purple-text {
     p {
      color: #9C27B0;
      text-align: left;
      padding: .5em;
      line-height: 1.5em;
      padding: 0 0 2em 0;
    }
  }

  &.purple-text-serie {
    p {
      color: #9C27B0;
      text-align: left;
      padding: .5em;
      line-height: 1.5em;
      padding: 2em 0 1em 0;
    }
  }

  &.center {
    display: block;
    margin: 0 auto;
  }

}

</style>
