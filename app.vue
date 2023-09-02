<template>
  <div class="app">
    <div class="app__container">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
$component: "app";

.#{$component} {
  height: 300vh;

  background-color: $mondrian-white;
}
</style>
