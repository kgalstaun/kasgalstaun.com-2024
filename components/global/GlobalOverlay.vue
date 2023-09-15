<template>
  <div class="overlay" :class="{ 'start-animation': startAnimation }">
    <div class="overlay__logo"><ElementLogo :data="'K'"></ElementLogo></div>
  </div>
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
    transition: transform 0.88s 0.88s ease;
  }

  &__logo {
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translate(-50%, 0%);
  }
}
</style>
