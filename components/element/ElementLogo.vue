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
  font-size: 12rem;

  @media screen and (max-width: $screen-size-xxl) {
    font-size: 9.2rem;
  }

  @media screen and (max-width: $screen-size-sm) {
    font-size: 7.2rem;
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
