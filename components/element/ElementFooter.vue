<template>
    <footer class="footer">
        <div class="footer__container">

        </div>
    </footer>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
$component: 'footer';

.#{$component} {
    width: 100%;

    display: flex;
    justify-content: center;

    &__container {
        min-width: $grid-width;
        background-color: white;
        height: 10rem;
    }

}
</style>