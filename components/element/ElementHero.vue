<template>
  <section class="hero">
    <div class="hero__container" :class="containerClasses">
      <div v-if="triggerAnimation" class="hero__container-two">
        <ElementHeader></ElementHeader>
        <slot>
          <div class="hero__content-container">
            <div class="hero__text-container">
              <ElementHeroText></ElementHeroText>
            </div>
            <div class="hero__image-container">
              <!-- to do: element, dat een dotted line container heeft, met een
              iamge, die onder de dotted line heen komt (absolute); dit ding is
              sticky, en gaat mee naar beneden, met die inverted color idee. -->
              <!-- to do: clean up code, voeg breakpoints toe, kies een color scheme, voeg variabelen toe -->
            </div>
          </div>
        </slot>
      </div>
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

  &__container {
    @include defaultPagePadding;

    position: absolute;
    top: 0%;
    left: 0px;
    width: 100%;
    height: calc(100% - 2.5rem);

    background-color: #172232;

    border-bottom-left-radius: 33px;
    border-bottom-right-radius: 33px;

    &.active {
      animation: slideIn 0.6s cubic-bezier(0.87, 0, 0.13, 1);
    }
  }

  &__container-two {
    height: 100%;
  }

  &__content-container {
    display: grid;
    grid-template-columns: 7fr 5fr;

    width: 100%;
    height: 100%;

    margin-top: -5rem;

    mix-blend-mode: difference;
  }

  &__text-container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__image-container {
    height: 100%;

    border: 4px dotted white;
  }
}
</style>
