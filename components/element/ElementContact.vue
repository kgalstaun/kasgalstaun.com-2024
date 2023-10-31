<template>
  <div class="contact">
    <div class="contact__container">
      <h1 class="contact__title">Contact</h1>
      <ul class="contact__link-list">
        <template v-for="link in data">
          <li v-if="link.title && link.link" class="contact__link-container">
            <button class="contact__link">
              {{ link.title }}
            </button>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: any;
}>();
</script>

<style lang="scss" scoped>
$component: "contact";

.#{$component} {
  display: flex;
  justify-content: center;

  padding-top: 50px;
  padding-bottom: 50px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  background-color: $mondrian-white;

  &__container {
    @include defaultOutline;
    align-items: flex-start;
  }

  &__link-list {
    padding-top: 25px;

    display: flex;
    gap: 3rem;
  }

  &__link {
    background-color: $mondrian-black;
    color: $mondrian-white;
    border-radius: 25px;
    padding: 2rem 4rem;
    font-size: 2.4rem;
  }
}
</style>
