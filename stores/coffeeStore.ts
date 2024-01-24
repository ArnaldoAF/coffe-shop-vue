import { ref, computed } from "vue";
import { CoffeeListData } from "~/data/data";

export const useCoffeeStore = defineStore("coffee", () => {
  const coffeeList = ref<CoffeeInterface[]>([]);
  const loading = ref(false);

  function initCoffeeList() {
    coffeeList.value = CoffeeListData;
  }

  return {
    coffeeList,
    initCoffeeList,
  };
});
