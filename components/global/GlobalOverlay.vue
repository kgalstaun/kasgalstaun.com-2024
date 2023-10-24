<template>
  <div class="overlay" :class="{ 'start-animation': startAnimation }"></div>
</template>

<script setup lang="ts">
const { overlayAnimationActive } = storeToRefs(useAnimationStore());
const startAnimation = ref(false);

onMounted(() => {
  startAnimation.value = true;

  setTimeout(() => {
    overlayAnimationActive.value = false;
  }, 1200);
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
    transition: transform 1s 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }
}
</style>
