<template>
  <header class="header">
    <div class="header__container">
      <div class="header__title-container">
        <h1 class="header__title">KG</h1>
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
  justify-content: flex-start;

  @include defaultPagePadding;

  &__container {
    max-width: $grid-width;

    padding-top: 2.5rem;
    background-color: white;

    display: flex;
    justify-content: center;
  }

  &__title-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  &__title {
    width: 100%;

    display: flex;
    justify-content: center;
    font-family: $font-mono;

    // compensate for the default letter spacing
    margin-left: -4px;
  }

  &__subtitle {
    margin-top: 1rem;
    font-family: $font-epilogue;
    font-size: clamp(1.4rem, 3vw, 1.6rem);
  }
}
</style>
