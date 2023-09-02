<template>
  <section class="hero">
    <div class="hero__container" :class="containerClasses">
      <template v-if="triggerAnimation">
        <div class="hero__container-two">
          <GlobalHeader></GlobalHeader>
          <slot></slot>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
const triggerAnimation: Ref<boolean> = ref(false);

const containerClasses = computed(() => {
  return {
    active: triggerAnimation.value,
  };
});

const startAnimation = ref(false);

onMounted(() => {
  setTimeout(() => {
    triggerAnimation.value = true;
  }, 1);
});
</script>

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
  }

  &__container-two {
    height: 100%;

    display: flex;
    flex-direction: column;
  }
}
</style>
