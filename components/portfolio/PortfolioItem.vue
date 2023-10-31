<template>
  <div class="portfolio-item" :style="{ color: color }">
    <div class="portfolio-item__column--1">
      <h2 class="portfolio-item__title">{{ data.title }}</h2>
      <ElementHtmlText
        class="portfolio-item__text"
        :data="data.text.html"
      ></ElementHtmlText>
    </div>
    <div class="portfolio-item__column--2">
      <div class="portfolio-item__image-container">
        <img class="portfolio-item__image" :src="data.image.url" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: any;
}>();

const { background } = storeToRefs(useGlobalStore());

const color = computed(() => {
  return background.value.color === "white" ? "#050103" : "#eaefe9";
});
</script>

<style lang="scss">
$component: "portfolio-item";

.#{$component} {
  display: grid;
  grid-template-columns: 6fr 6fr;
  gap: 10rem;

  @include colorChangeTransition;

  &__column {
    &--1,
    &--2 {
      @extend .#{$component}__column;
    }
  }

  &__text {
    margin-top: 1.8rem;
  }

  &__image-container {
    padding: 5rem;
    border-radius: 5px;
  }
}
</style>
