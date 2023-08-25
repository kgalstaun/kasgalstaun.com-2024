<template>
  <div class="index">
    <div class="index__container">
      <ElementHeroHome></ElementHeroHome>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
$component: "index";

.#{$component} {
  height: 300vh;
  width: 100%;

  background-color: $color-beige;
}
</style>
