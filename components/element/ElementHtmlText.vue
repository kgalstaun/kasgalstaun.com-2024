<template>
  <div class="html-text" v-html="data"></div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["data"]);
</script>

<style lang="scss">
$component: "html-text";

.#{$component} {
  p {
    font-size: 1.9rem;
    line-height: 1.725;
    hyphens: auto;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: pre-line;

    padding-bottom: 2rem;

    &:last-child {
      padding-bottom: 0rem;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: $font-epilogue;
    text-wrap: balance;
  }

  ul {
    width: 100%;
  }

  li {
    width: 100%;
    font-size: 2.3rem;
    list-style: circle;
    line-height: 1.625;
    font-weight: normal !important;

    > div {
      font-family: $font-epilogue;
      margin-left: 1.6rem;
    }

    &:not(:last-child) {
      padding-bottom: 2rem;
    }
  }

  a {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }

  @media screen and (max-width: $screen-size-lg) {
    h1,
    h2,
    h3,
    h4,
    h5 {
      text-align: center;
    }

    p {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: $screen-size-md) {
    p {
      font-size: 1.6rem;
    }
    ul {
      padding-left: 4.8rem;
    }
  }
}
</style>
