<template>
  <div class="sticky-card">
    <div class="sticky-card__container">
      <div class="sticky-card__container-two"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stickyDistanceToTop = ref(180);

const getStickyDistanceToTopAsPixelString = computed(() => {
  return stickyDistanceToTop.value + "px";
});

const pageHeight = computed(() => {
  if (document) {
    return (
      document.documentElement.scrollHeight - stickyDistanceToTop.value + "px"
    );
  }
});
</script>

<style lang="scss">
$component: "sticky-card";

.#{$component} {
  // absolute, en lengte moet lengte van pagina zijn?
  position: relative;

  &__container {
    position: absolute;
    top: 0px;
    left: -31rem;
    width: 100%;
    height: v-bind(pageHeight);

    transform: rotate(0deg);
    // gebruik deze value voor de animatie
    // het hele ding, flipt van links naar rechts, met een fade in
    // en als die flipt, flippen de child elements ook, als kaarten die uit elkaar schuiven
    // en bij het scrollen naar beneden, over de pagina, flipt ie van zijwaartse view, naar rechtopstaand, en dan kun je daar weer meespelen en ook kaarten voor of achter elkaar laten verschijnen
    // dus: de eerste verschijnt boven de tweeden, met een swipe animatie op scroll, als experience erin komt
    // je moet even uitdenken hoe je dit het beste kan uitvoeren.
    // transform: rotate(-8deg);
  }

  &__container-two {
    position: sticky;
    top: v-bind(getStickyDistanceToTopAsPixelString);
    left: 0px;
    height: 50rem;
    width: 60rem;
    border: 1px solid white;

    transform: rotate(4deg);

    // dit hoeven geen after elements te zijn. je kan het ook gewoon normale elements maken. dan kun je het ook vullen in de html, met een paar foto's
    &::after,
    &::before {
      position: absolute;
      content: "";
      top: 0px;
      left: 0px;

      width: 100%;
      height: 100%;

      border: 1px solid white;
    }

    &::after {
      transform: rotate(4deg);
    }

    &::before {
      transform: rotate(8deg);
    }
  }
}
</style>
