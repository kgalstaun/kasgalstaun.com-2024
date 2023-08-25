<template>
  <h1 class="hero-text">
    Hey, I'm Kas. <br />A creative developer
    <span class="hero-text__and-sign">&</span> Vue
    <span class="hero-text__emphasis">specialist</span>.
  </h1>
</template>

<style lang="scss">
$component: "hero-text";

.#{$component} {
  font-family: $font-epilogue;
  font-variation-settings: "wght" 350;
  line-height: 1.26;
  color: rgb(237, 226, 226);

  &__and-sign {
    font-variation-settings: "wght" 400;
  }

  &__emphasis {
    position: relative;

    &::after {
      position: absolute;
    }
  }
}
</style>
