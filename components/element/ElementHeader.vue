<template>
  <header class="header">
    <div class="header__container">
      <LayoutDefaultGrid>
        <template #column-middle>
          <div class="header__column">
            <div class="header__logo-container">
              <h3>kas galstaun</h3>
            </div>
            <div class="header__nav-container">
              <nav class="header__nav">
                <a class="header__nav-link">experience </a>
                <span>| </span>
                <a class="header__nav-link">education </a>
                <span>| </span>
                <a class="header__nav-link">about </a>
              </nav>
            </div>
          </div>
        </template>
      </LayoutDefaultGrid>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
$component: "header";

.#{$component} {
  width: 100%;

  display: flex;
  justify-content: center;

  &__container {
    min-width: $grid-width;

    background-color: white;
  }

  &__column {
    display: flex;
    justify-content: space-between;
  }
}
</style>
