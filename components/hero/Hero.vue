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
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  overflow: hidden;

  &--theme-default {
    .#{$component} {
      &__container {
        background-color: $mondrian-black;
      }
    }
  }

  &__container {
    @include defaultPadding;

    height: calc(100vh);
    width: 100%;

    display: flex;
    flex-direction: column;
  }
}
</style>
