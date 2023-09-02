<template>
  <header class="header">
    <div class="header__container">
      <div
        class="header__logo-container"
        :class="{ 'fade-in': startAnimation }"
      >
        >
        <ElementLogo :data="'K'"></ElementLogo>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const startAnimation = ref(false);

onMounted(() => {
  setTimeout(() => {
    startAnimation.value = true;
  }, 520);
});
</script>

<style lang="scss" scoped>
$component: "header";

.#{$component} {
  width: 100%;

  display: flex;
  justify-content: center;

  &__container {
    max-width: $grid-width;

    display: flex;
    justify-content: center;
  }

  &__logo-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include fadeIn;
  }
}
</style>
