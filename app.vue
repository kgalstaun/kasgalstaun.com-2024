<template>
  <div
    class="app"
    :class="{ 'overlay-is-active': overlayAnimationActive }"
    :style="{ 'background-color': backgroundColor }"
  >
    <div class="app__container">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const { overlayAnimationActive } = storeToRefs(useAnimationStore());
const { background } = storeToRefs(useGlobalStore());

const backgroundColor = computed(() => {
  return background.value.color === "white" ? "#eaefe9" : "#050103";
});
</script>

<style lang="scss" scoped>
$component: "app";

.#{$component} {
  background-color: $mondrian-white;

  @include backgroundColorChangeTransition;

  &.overlay-is-active {
    height: 100vh;
    overflow: hidden;
  }
}
</style>
