<template>
  <Hero class="hero--theme-default">
    <div class="hero-home__container" :class="{ 'slide-in': startAnimation }">
      <HeroText></HeroText>
    </div>
  </Hero>
</template>

<script setup lang="ts">
const startAnimation = ref(false);

onMounted(() => {
  setTimeout(() => {
    startAnimation.value = true;
  }, 420);
});
</script>

<style lang="scss">
$component: "hero-home";

.#{$component} {
  &__container {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: -5rem;
  }
}
</style>
