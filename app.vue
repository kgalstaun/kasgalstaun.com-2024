<template>
  <div class="app">
    <div class="app__container">
      <ElementHeader />
      <ElementFooter />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
$component: "app";

.#{$component} {
  height: 100%;

  &__container {
    margin-top: 40vh;
  }
}
</style>
