<template>
  <div class="index">
    <div class="index__container">
      <ElementHero></ElementHero>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
$component: "index";

.#{$component} {
  height: 100%;
  width: 100%;

  background-color: whitesmoke;
}
</style>
