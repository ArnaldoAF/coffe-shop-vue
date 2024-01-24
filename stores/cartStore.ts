import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref<CartCoffeeElement[]>([]);
  const loading = ref(false);

  function initCartItems(data: CartCoffeeElement[]) {
    cartItems.value = data;
  }

  function addCoffeeToCart(coffeeElement: CartCoffeeElement) {
    const coffeeIndex = cartItems.value.findIndex(cartItem => cartItem.coffee.id === coffeeElement.coffee.id)

    if(coffeeIndex > -1) {
      const {qtd} = coffeeElement
      cartItems.value[coffeeIndex].qtd = cartItems.value[coffeeIndex].qtd + qtd
    }
    else {
      cartItems.value.push(coffeeElement)
    }
  }

  function setCoffeeQtdOnCart(coffeeElement: CartCoffeeElement) {
    const coffeeIndex = cartItems.value.findIndex(cartItem => cartItem.coffee.id === coffeeElement.coffee.id)

    if(coffeeIndex > -1) {
      const {qtd} = coffeeElement
      cartItems.value[coffeeIndex].qtd = qtd
    }
  }

  function deleteCoffeeFromCart(coffeeElementId: number) {
    const coffeeIndex = cartItems.value.findIndex(cartItem => cartItem.coffee.id === coffeeElementId)
    const coffeeFind = cartItems.value.find(cartItem => cartItem.coffee.id === coffeeElementId)
    console.log("deleteCoffeeFromCart")
    console.log(coffeeIndex)
    console.log(coffeeFind)

    if(coffeeIndex > -1) {
      // cartItems.value.splice(coffeeIndex, 1)
      cartItems.value = cartItems.value.filter(cartItem => cartItem.coffee.id !== coffeeElementId)
    }
  }

  return {
    cartItems,
    initCartItems,
    addCoffeeToCart,
    setCoffeeQtdOnCart,
    deleteCoffeeFromCart,
  };
});
