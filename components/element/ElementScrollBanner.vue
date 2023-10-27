<template>
  <div class="scroll-banner">
    <div class="scroll-banner__container">
      <span class="scroll-banner__text--real">
        {{ data }}
      </span>
      <span class="scroll-banner__text--pseudo">
        {{ data }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: string;
}>();
</script>

<style lang="scss">
$component: "scroll-banner";

.#{$component} {
  width: 100%;
  position: relative;

  &__container {
    width: 100%;
    height: 100%;
  }

  &__text-container {
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;
  }

  &__text {
    font-size: 26.6rem;

    &--pseudo {
      @extend .#{$component}__text;

      opacity: 0;
    }

    &--real {
      @extend .#{$component}__text;
      margin-left: -50%;
    }
  }
}
</style>
