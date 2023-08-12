<template>
  <div class="default-grid">
    <div class="default-grid__column">
      <slot name="column-left"></slot>
    </div>
    <div class="default-grid__column">
      <slot name="column-middle"></slot>
    </div>
    <div class="default-grid__column">
      <slot name="column-right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
$component: "default-grid";

.#{$component} {
  width: 100%;

  display: grid;
  grid-template-columns: 4fr 8fr 4fr;

  // small screen: linker en rechter column verdwijnen gewoon, grid-template-columns wordt 12fr.
}
</style>
