<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo-container">
        <ElementLogo :data="'K'"></ElementLogo>
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
  justify-content: center;

  color: $mondrian-white;

  &.color-black {
    color: $mondrian-black;
  }

  &__container {
    max-width: $grid-width;

    display: flex;
    justify-content: center;
  }

  &__logo-container {
    margin-top: 3rem;
  }
}
</style>
