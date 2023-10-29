import { defineStore } from "pinia";

export const useScrollStore = defineStore("scroll", () => {
  const position = ref(0);
  function setPosition(newPosition: number) {
    position.value = newPosition;
  }

  return { position, setPosition };
});
