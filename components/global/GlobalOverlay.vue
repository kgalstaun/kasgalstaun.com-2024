<template>
  <div
    v-if="!animationFinished"
    class="overlay"
    :class="{ 'start-animation': startAnimation }"
  >
    <GlobalHeader class="color-black"></GlobalHeader>
  </div>
</template>

<script setup lang="ts">
const animationFinished = ref(false);
const startAnimation = ref(false);

onMounted(() => {
  startAnimation.value = true;

  setTimeout(() => {
    animationFinished.value = true;
  }, 1700);
});
</script>

<style lang="scss">
$component: "overlay";

.#{$component} {
  position: fixed;

  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;

  z-index: 999;

  background-color: $mondrian-white;

  transform: translateY(0%);

  &.start-animation {
    transform: translateY(-100%);
    transition: transform 0.66s 1s $ease-cubic;
  }
}
</style>
