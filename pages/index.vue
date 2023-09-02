<template>
  <div class="index">
    <div class="index__container">
      <HeroHome></HeroHome>
    </div>
    <GlobalOverlay></GlobalOverlay>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
$component: "index";

.#{$component} {
  width: 100%;

  background-color: $mondrian-black;
}
</style>
