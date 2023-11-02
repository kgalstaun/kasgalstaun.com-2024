<template>
  <h1 class="hero-text" :class="{ 'animate-in': startFadeInAnimation }">
    Hey, I'm Kas<span></span>. <br />A freelance
    <div class="letters-container">
      <span
        class="letters"
        v-for="(letter, index) in text"
        :key="index"
        ref="textCharRefs"
        >{{ letter }}</span
      >
    </div>

    developer<br />
    <span class="hero-text__and-sign">& </span>
    <span
      class="hero-text__underline"
      :class="{ animate: startUnderlineAnimation }"
      >Vue</span
    >
    specialist.
  </h1>
</template>

<script setup lang="ts">
const startUnderlineAnimation = ref(false);
const startFadeInAnimation = ref(false);
const text = ref("front-end".split(""));
const textCharRefs = ref([]);

const startTextColorAnimation = () => {
  textCharRefs.value.forEach((item: any, index) => {
    setTimeout(() => {
      item.classList.add("animate");
    }, index * 33);
  });
};

onMounted(() => {
  setTimeout(() => {
    startFadeInAnimation.value = true;
  }, 900);
  setTimeout(startTextColorAnimation, 1100);
  setTimeout(() => {
    startUnderlineAnimation.value = true;
  }, 1600);
});
</script>

<style lang="scss">
$component: "hero-text";

.#{$component} {
  font-family: $font-epilogue;
  font-variation-settings: "wght" 350;
  text-align: center;
  line-height: 1.25;
  font-size: 10.6rem;

  color: $mondrian-white;

  max-width: 120rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @include animateIn(0s, "down");

  @media screen and (max-width: $screen-size-xxl) {
    font-size: 7.6rem;
    text-align: center;
  }

  @media screen and (max-width: $screen-size-md) {
    font-size: 5rem;
    text-align: center;
  }

  @media screen and (max-width: $screen-size-sm) {
    font-size: 4rem;
  }

  .letters {
    display: inline-block;

    &.animate {
      transition: color 0.05s ease-out;
      transform: scale(1);
      color: $mondrian-yellow;
    }
  }

  .letters-container {
    display: inline-block;
  }

  &__and-sign {
    font-variation-settings: "wght" 400;
  }

  &__underline {
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
      background-color: $mondrian-blue;
      height: 6px;
      bottom: 0;
      left: 50%;
      width: 0%;
      transform: translateX(-50%);

      border-radius: 5px;
      transition: width 0.22s ease-out;
    }
  }
}
</style>
