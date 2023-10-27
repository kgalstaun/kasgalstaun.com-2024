<template>
  <div class="portfolio-item">
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
</script>

<style lang="scss">
$component: "portfolio-item";

.#{$component} {
  display: grid;
  grid-template-columns: 6fr 6fr;
  gap: 10rem;

  &:nth-child(2) {
    .#{$component}__image-container {
      background-color: $mondrian-black;
    }
  }

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
    background-color: $mondrian-black;
    border-radius: 5px;
  }
}
</style>
