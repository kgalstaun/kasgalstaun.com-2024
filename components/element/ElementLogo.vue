<template>
  <span class="header-logo">{{ data }}</span>
</template>

<script setup lang="ts">
defineProps<{
  data: string;
}>();
</script>

<style lang="scss">
$component: "header-logo";

.#{$component} {
  width: 100%;

  font-family: $font-mono;
  font-size: 9.2rem;

  // transform: rotate(-90deg);

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
