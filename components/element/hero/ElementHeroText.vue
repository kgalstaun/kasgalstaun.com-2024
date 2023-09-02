<template>
  <h1 class="hero-text" :class="{ 'fade-in': startAnimation }">
    {{ data.firstLine }}
    <br />{{ data.secondLine }}<br />
    <span class="hero-text__and-sign">&</span> {{ data.thirdLine }}.
  </h1>
</template>

<script setup lang="ts">
interface HeroText {
  firstLine: string;
  secondLine: string;
  thirdLine: string;
}
defineProps<{
  data: HeroText;
}>();

const startAnimation = ref(false);
onMounted(() => {
  setTimeout(() => {
    startAnimation.value = true;
  }, 550);
});
</script>

<style lang="scss">
$component: "hero-text";

.#{$component} {
  font-family: $font-epilogue;
  font-variation-settings: "wght" 350;
  text-align: center;
  line-height: 1.26;

  color: $color-beige;

  max-width: 80vw;

  @include fadeIn;

  &__and-sign {
    font-variation-settings: "wght" 400;
  }
}
</style>
