import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref<CartCoffeeElement[]>([]);
  const loading = ref(false);

  function initCartItems(data: CartCoffeeElement[]) {
    cartItems.value = data;
  }

  return {
    cartItems,
    initCartItems,
  };
});
