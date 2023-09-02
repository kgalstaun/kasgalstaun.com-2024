<template>
  <section class="hero">
    <div class="hero__container" :class="containerClasses">
      <template v-if="triggerAnimation">
        <div class="hero__container-two">
          <ElementHeader></ElementHeader>
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
  position: relative;

  width: 100%;
  height: 100vh;

  &--theme-default {
    .#{$component} {
      &__container {
        background-color: $color-blue--dark;
      }
    }
  }

  &__container {
    @include defaultPagePadding;

    position: absolute;
    top: 0%;
    left: 0px;
    width: 100%;
    height: 100%;

    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  &__container-two {
    height: 100%;

    display: flex;
    flex-direction: column;
  }
}
</style>
