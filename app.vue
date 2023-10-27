<template>
  <div class="app" :class="{ 'overlay-is-active': overlayAnimationActive }">
    <div class="app__container">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const { overlayAnimationActive } = storeToRefs(useAnimationStore());
</script>

<style lang="scss" scoped>
$component: "app";

.#{$component} {
   background-color: $mondrian-white;

  &.overlay-is-active {
    height: 100vh;
    overflow: hidden;
  }
}
</style>
