<template>
  <div class="portfolio-item" :style="{ color: color }">
    <div class="portfolio-item__column--1" ref="container">
      <h2>
        <span class="portfolio-item__title" :class="{ animate: isInView }">
          {{ data.title }}</span
        >
      </h2>
      <ElementHtmlText
        class="portfolio-item__text"
        :data="data.text.html"
      ></ElementHtmlText>
    </div>
    <div class="portfolio-item__column--2">
      <div
        class="portfolio-item__image-container"
        :class="{ animate: isInView }"
      >
        <img class="portfolio-item__image" :src="data.image.url" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: any;
}>();

const isInView = ref(false);
const container = ref();
const { background } = storeToRefs(useGlobalStore());

const color = computed(() => {
  return background.value.color === "white" ? "#050103" : "#eaefe9";
});

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (!isInView.value) {
        isInView.value = entries[0].isIntersecting;
      }
    },
    { threshold: 0.1 }
  );

  if (container.value) {
    observer.observe(container.value);
  }
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

  &__title {
    position: relative;
    overflow: hidden;

    &.animate {
      &::before {
        width: 100%;
      }
    }

    &::before {
      content: "";
      position: absolute;
      background-color: $mondrian-red;
      height: 5px;
      bottom: 0;
      left: 50%;
      width: 0%;
      transform: translateX(-50%);

      border-radius: 5px;
      transition: width 0.22s 0.3s ease-out;
    }
  }

  &__image-container {
    padding: 20%;
    transition: padding 0.5s ease-out;
    border-radius: 5px;

    &.animate {
      transition: padding 0.5s ease-out;
      padding: 5%;
    }
  }
}
</style>
