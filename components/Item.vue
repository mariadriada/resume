<template>
  <div class="line-text">
    <div class="circle" v-if="circle"></div>
    <div class="text">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text', 'circle']
}
</script>

<style lang="scss">
$color: #212121;

.line-text {
  width: 100%;

  @include flexbox;
  @include align-items(center);

  min-height: 1.5em;
  height: auto;
  color: $color;
  margin-bottom: 0.5em;

  &.bkg {
    background-color: #fffde7;
    border-radius: 5em 0 0 5em;
    padding-left: 0.5em;
  }

  .text {
    width: 90%;
    padding-left: 0.3em;
    font-size: 1.7em;
  }

  .circle {
    width: 1.5em;
    height: 1.5em;
    background-color: $color;
    border-radius: 50%;
    opacity: 0.5;
    line-height: 1.7em;
  }
}

//Media queries

@media screen and (max-width: 30rem) {
  .line-text {
    text-align: left;
  }
}
</style>
