<template>
  <div
    v-if="overlayAnimationActive"
    class="overlay"
    :class="{ 'start-animation': startAnimation }"
  ></div>
</template>

<script setup lang="ts">
const { overlayAnimationActive } = storeToRefs(useAnimationStore());
const startAnimation = ref(false);
const overlayAnimationTime = 1700;

onMounted(() => {
  startAnimation.value = true;

  setTimeout(() => {
    overlayAnimationActive.value = false;
  }, overlayAnimationTime);
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
}
</style>
