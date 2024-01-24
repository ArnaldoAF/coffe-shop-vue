import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref<CartCoffeeElement[]>([]);
  const loading = ref(false);

  function initCartItems(data: CartCoffeeElement[]) {
    cartItems.value = data;
  }

  function addCoffeeToCart(coffeeElement: CartCoffeeElement) {
    const coffeeIndex = cartItems.value.findIndex(cartItem => cartItem.coffee.id === coffeeElement.coffee.id)
    console.log(coffeeIndex)
    console.log(cartItems.value)

    if(coffeeIndex > -1) {
      const {qtd} = coffeeElement
      cartItems.value[coffeeIndex].qtd = cartItems.value[coffeeIndex].qtd + qtd
    }
    else {
      cartItems.value.push(coffeeElement)
    }
  }

  return {
    cartItems,
    initCartItems,
    addCoffeeToCart,
  };
});
