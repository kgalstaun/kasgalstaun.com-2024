<template>
  <div class="app">
      <div class="app__container">
        <ElementHeader></ElementHeader>
        <ElementFooter></ElementFooter>
      </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
$component: 'app';

.#{$component} {
  height: 100%;

  &__container {
    margin-top: 33%;
  }
}
</style>