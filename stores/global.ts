import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", () => {
  const background = ref<BackgroundOptions>({ color: "white" });

  function setBackgroundColor(color: "white" | "black") {
    background.value.color = color;
  }

  return { background, setBackgroundColor };
});
