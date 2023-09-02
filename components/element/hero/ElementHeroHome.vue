<template>
  <ElementHero class="hero--theme-default">
    <div class="hero-home__container" :class="{ 'slide-in': startAnimation }">
      <ElementHeroText
        :data="{
          firstLine: 'Hey, I\'m Kas',
          secondLine: 'A freelance front-end developer',
          thirdLine: 'Vue specialist',
        }"
      ></ElementHeroText>
    </div>
  </ElementHero>
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
  }
}
</style>
