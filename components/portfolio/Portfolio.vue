<template>
  <section class="portfolio">
    <div class="portfolio__container">
      <template v-for="(item, index) in data">
        <PortfolioItem class="portfolio__item" :data="item"></PortfolioItem
      ></template>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  data: any;
}>();
</script>

<style lang="scss">
$component: "portfolio";

.#{$component} {
  display: flex;
  justify-content: center;

  &__container {
    @include defaultOutline;
  }
  &__item {
    margin-top: 15rem;
  }
}
</style>
