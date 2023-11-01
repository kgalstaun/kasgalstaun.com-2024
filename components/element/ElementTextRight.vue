<template>
  <div class="text-right">
    <div class="text-right__container">
      <div class="text-left__column--1"></div>
      <div class="text-right__column--2">
        <ElementHtmlText
          :data="data"
          class="text-right__text"
          :style="{ color: color }"
        ></ElementHtmlText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: string;
}>();

const { background } = storeToRefs(useGlobalStore());

const color = computed(() => {
  return background.value.color === "white" ? "#050103" : "#eaefe9";
});
</script>

<style lang="scss">
$component: "text-right";

.#{$component} {
  width: 100%;

  &__container {
    @include defaultOutline;

    display: grid;
    grid-template-columns: 4fr 8fr;
  }

  &__column {
    &--1,
    &--2 {
      @extend .#{$component}__column;
    }
  }

  &__text {
    color: white;
  }
}
</style>
