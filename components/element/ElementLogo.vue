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

  display: flex;
  justify-content: center;

  margin-left: -4px;
  margin-top: -12px;

  font-family: $font-mono;
  font-size: 8.2rem;
  color: $color-beige;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
