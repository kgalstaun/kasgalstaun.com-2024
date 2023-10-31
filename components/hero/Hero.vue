<template>
  <section class="hero">
    <div class="hero__container">
      <GlobalHeader
        class="hero__header"
        :class="{ 'animate-in': startFadeInAnimation }"
      ></GlobalHeader>
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
const startFadeInAnimation = ref(false);
onMounted(() => {
  setTimeout(() => {
    startFadeInAnimation.value = true;
  }, 850);
});
</script>

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
    min-height: 40rem;

    width: 100%;

    display: flex;
    flex-direction: column;
  }

  &__header {
    @include animateIn(0s, "down");
  }
}
</style>
