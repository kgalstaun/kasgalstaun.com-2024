<template>
  <div class="text-block" :class="{ 'animate-in': isInView }" ref="container">
    <div
      class="text-block__container"
      :class="{ reverse: data.textRight }"
      :style="{ color: color }"
    >
      <div class="text-block__column--1">
        <div class="text-block__text">
          <span
            :class="`text-block__text${data.textSmall ? '--small' : '--big'}`"
          >
            {{ data.text }}
          </span>
        </div>
      </div>
      <div class="text-block__column--2"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: any;
}>();

const container = ref();
const isInView = ref(false);
const { background } = storeToRefs(useGlobalStore());

const color = computed(() => {
  return background.value.color === "white" ? "#050103" : "#eaefe9";
});

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      isInView.value = entries[0].isIntersecting;
    },
    { threshold: 0.1 }
  );

  if (container.value) {
    observer.observe(container.value);
  }
});
</script>

<style lang="scss">
$component: "text-block";

.#{$component} {
  width: 100%;
  display: flex;
  justify-content: center;

  @include animateIn(0.05s, "up");

  &__container {
    @include defaultOutline;

    display: grid;
    grid-template-columns: 7fr 5fr;

    @include colorChangeTransition;

    &.reverse {
      grid-template-columns: 5fr 7fr;

      .#{$component}__column--1 {
        order: 2;
      }

      .#{$component}__column--2 {
        order: 1;
      }
    }

    @media screen and (max-width: $screen-size-md) {
      grid-template-columns: 1fr;

      &.reverse {
        grid-template-columns: 1fr;

        .#{$component}__text {
          text-align: end;
        }
      }
    }
  }

  &__column {
    &--1,
    &--2 {
      @extend .#{$component}__column;
    }
  }

  &__text {
    line-height: 1.725;

    &--big {
      font-size: 6rem;
    }
    &--small {
      font-size: 4rem;
      line-height: 2;
      font-style: italic;
    }

    @media screen and (max-width: $screen-size-md) {
      padding-left: 1rem;
      padding-right: 1rem;

      &--big {
        font-size: 3.2rem;
      }

      &--small {
        font-size: 2rem;
        text-align: end;
      }
    }
  }
}
</style>
