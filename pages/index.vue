<template>
  <div class="index">
    <div class="index__container">
      <HeroHome></HeroHome>
      <main class="index__main" v-if="loaded && content && !error">
        <section
          v-if="content.home?.introTexts"
          v-for="introText in content.home.introTexts"
          class="index__section"
        >
          <ElementTextBlock :data="introText"></ElementTextBlock>
        </section>
        <section class="index__section">
          <ElementScrollBanner
            :data="'PortfolioPortfolioPortfolioPortfolio'"
          ></ElementScrollBanner>
        </section>
        <section v-if="content.home?.portfolio">
          <Portfolio :data="content.home.portfolio"></Portfolio>
        </section>
        <section v-if="content.home?.education?.intro" class="index__section">
          <ElementTextBlock
            :data="content.home?.education?.intro"
          ></ElementTextBlock>
        </section>
        <section v-if="content.home?.education?.content?.html">
          <ElementTextRight
            :data="content.home?.education?.content?.html"
          ></ElementTextRight>
        </section>
        <section v-if="content.home?.contact?.length" class="index__section">
          <ElementContact :data="content.home?.contact"> </ElementContact>
        </section>
      </main>
    </div>
  </div>
  <GlobalOverlay></GlobalOverlay>
</template>

<script setup lang="ts">
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
  overflow: hidden;

  &__section {
    padding-top: 15rem;

    @media screen and (max-width: $screen-size-lg) {
      padding-top: 5rem;
    }
  }
}
</style>
