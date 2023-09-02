<template>
  <h1 class="hero-text">
    Hey, I'm Kas<span></span>. <br />A freelance
    <span class="hero-text__color--yellow">front-end </span> developer<br />
    <span class="hero-text__and-sign">&</span>
    <span class="hero-text__underline">Vue</span> specialist.
  </h1>
</template>

<script setup lang="ts"></script>

<style lang="scss">
$component: "hero-text";

.#{$component} {
  font-family: $font-epilogue;
  font-variation-settings: "wght" 350;
  text-align: center;
  line-height: 1.26;

  color: $mondrian-white;

  max-width: 80vw;

  transform: translateY(-2vh);

  &__color {
    &--yellow {
      color: $mondrian-yellow;
    }
    &--red {
      color: $mondrian-red;
    }
  }

  &__and-sign {
    font-variation-settings: "wght" 400;
  }

  &__underline {
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;

      background-color: $mondrian-blue;
      width: 92%;
      height: 6px;
      bottom: 0;
      left: 8%;

      border-radius: 5px;
    }
  }
}
</style>
