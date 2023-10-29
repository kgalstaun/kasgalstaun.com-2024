import { useScrollStore } from "@/stores/scroll";

export default defineNuxtPlugin((nuxtApp) => {
  document.addEventListener("scroll", (event) => {
    const position = window.scrollY;
    useScrollStore().setPosition(position);
  });
});
