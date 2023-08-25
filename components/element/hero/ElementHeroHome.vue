<template>
  <ElementHero>
    <div class="hero-home__container">
      <div class="hero-home__text-container">
        <ElementHeroText></ElementHeroText>
      </div>
      <div class="hero-home__card-container">
        <ElementHeroCard></ElementHeroCard>
      </div>
    </div>
  </ElementHero>
</template>

<script setup lang="ts"></script>

<style lang="scss">
$component: "hero-home";

.#{$component} {
  &__container {
    display: grid;
    grid-template-columns: 7fr 5fr;

    width: 100%;
    height: 100%;

    mix-blend-mode: difference;
  }

  &__text-container {
    display: flex;
    align-items: center;
  }

  &__card-container {
    border: 1px solid white;
  }
}
</style>
