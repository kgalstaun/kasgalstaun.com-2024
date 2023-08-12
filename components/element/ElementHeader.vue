<template>
    <header class="header">
        <div class="header__container">
            header
        </div>
    </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
$component: 'header';

.#{$component} {
    width: 100%;
    height: 10rem;

    background-color: red;

    display: flex;
    justify-content: center;

    &__container {
        max-width: $grid-width;
    }

}
</style>