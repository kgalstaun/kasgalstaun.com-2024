<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo-container">
        <ElementLogo></ElementLogo>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
$component: "header";

.#{$component} {
  width: 100%;

  display: flex;

  &__container {
    max-width: $grid-width;

    display: flex;
    justify-content: center;
  }

  &__logo-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
