<template>
  <section class="hero">
    <div class="hero__container">
      <GlobalHeader></GlobalHeader>
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss">
$component: "hero";

.#{$component} {
  &--theme-default {
    .#{$component} {
      &__container {
        background-color: mondrian-black;
      }
    }
  }

  &__container {
    @include defaultPagePadding;

    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
  }
}
</style>
