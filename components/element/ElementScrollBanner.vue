<template>
  <div class="scroll-banner" :style="{ color: color }">
    <div
      class="scroll-banner__container"
      ref="scrollBannerRef"
      :style="{ transform: `translateX(${animationTransform}px)` }"
    >
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
import { useScrollStore } from "@/stores/scroll";
import { useGlobalStore } from "@/stores/global";

defineProps<{
  data: string;
}>();

const scrollBannerRef = ref();
const animationTransform = ref(0);
const isInView = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    isInView.value = entries[0].isIntersecting;
  });

  if (scrollBannerRef.value) {
    observer.observe(scrollBannerRef.value);
  }
});

const { position } = storeToRefs(useScrollStore());
const { background } = storeToRefs(useGlobalStore());

const color = computed(() => {
  return background.value.color === "white" ? "#050103" : "#eaefe9";
});

watch(position, (newValue, oldValue) => {
  if (!isInView.value) return;

  const scrollingDown = newValue > oldValue;

  if (scrollingDown) {
    animationTransform.value += 3;

    if (background.value.color === "white") {
      useGlobalStore().setBackgroundColor("black");
    }
  } else {
    animationTransform.value -= 3;

    if (background.value.color === "black") {
      useGlobalStore().setBackgroundColor("white");
    }
  }
});
</script>

<style lang="scss">
$component: "scroll-banner";

.#{$component} {
  width: 100%;
  position: relative;

  @include colorChangeTransition;

  &__container {
    width: 100%;
    height: 100%;
    transform: translateX(0px);
    will-change: transform;
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
      margin-left: -150%;
    }
  }
}
</style>
