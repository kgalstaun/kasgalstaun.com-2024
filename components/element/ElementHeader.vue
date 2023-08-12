<template>
  <header class="header">
    <div class="header__container">header</div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
$component: "header";

.#{$component} {
  width: 100%;

  display: flex;
  justify-content: center;

  &__container {
    min-width: $grid-width;
    background-color: white;
    height: 10rem;
  }
}
</style>
