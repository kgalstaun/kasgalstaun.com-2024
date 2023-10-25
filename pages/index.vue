<template>
  <div class="index">
    <div class="index__container">
      <HeroHome></HeroHome>
      <main class="index__main" v-if="loaded && content && !error">
        <template v-for="introText in content.home.introTexts">
          <ElementTextBlock
            :data="introText"
            class="index__content"
          ></ElementTextBlock>
        </template>
        <ElementScrollBanner
          :data="'PortfolioPortfolioPortfolioPortfolioPortfolio'"
          class="index__content"
        ></ElementScrollBanner>

        <!-- ticker template -->
        <!-- experience met subcomponents en sticky  -->
        <!-- certificates -->
        <!-- contact me  -->
      </main>
    </div>
  </div>
  <GlobalOverlay></GlobalOverlay>
</template>

<script setup lang="ts">
import ContentComponent from "./ContentComponent.vue";
import { onMounted, ref } from "vue";

import useQuery from "@/composables/useQuery";
import MainQuery from "@/queries/MainQuery";

let loaded = ref(false);
let error = ref(false);
const content = ref();

onMounted(() => {
  fetchContent();
});

async function fetchContent() {
  const locale = window.location.pathname.startsWith("/en")
    ? ["en"]
    : ["nl_NL", "en"];

  useQuery
    .fetch(MainQuery, { locale })
    .then((data) => {
      content.value = data;
      loaded.value = true;

      console.log(content.value);
      return true;
    })
    .catch((error) => {
      console.error(error);
      error.value = true;
    });
}
</script>

<style lang="scss" scoped>
$component: "index";

.#{$component} {
  width: 100%;

  &__content {
    padding-top: 15rem;

    @media screen and (max-width: $screen-size-lg) {
      padding-top: 5rem;
    }
  }
}
</style>
