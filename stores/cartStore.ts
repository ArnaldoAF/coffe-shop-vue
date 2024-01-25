import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref<CartCoffeeElement[]>([]);
  const loading = ref(false);

  const totalQtdItems = computed(() =>
    cartItems.value.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.qtd,
      0
    )
  );

  const totalValueItems = computed(() =>
    cartItems.value.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.qtd * currentValue.coffee.price,
      0
    )
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  )

  function initCartItems(data: CartCoffeeElement[]) {
    cartItems.value = data;
  }

  function addCoffeeToCart(coffeeElement: CartCoffeeElement) {
    const coffeeIndex = cartItems.value.findIndex(
      (cartItem) => cartItem.coffee.id === coffeeElement.coffee.id
    );

    if (coffeeIndex > -1) {
      const { qtd } = coffeeElement;
      cartItems.value[coffeeIndex].qtd = cartItems.value[coffeeIndex].qtd + qtd;
    } else {
      cartItems.value.push(coffeeElement);
    }
  }

  function setCoffeeQtdOnCart(coffeeElement: CartCoffeeElement) {
    const coffeeIndex = cartItems.value.findIndex(
      (cartItem) => cartItem.coffee.id === coffeeElement.coffee.id
    );

    if (coffeeIndex > -1) {
      const { qtd } = coffeeElement;
      cartItems.value[coffeeIndex].qtd = qtd;
    }
  }

  function deleteCoffeeFromCart(coffeeElementId: number) {
    const coffeeIndex = cartItems.value.findIndex(
      (cartItem) => cartItem.coffee.id === coffeeElementId
    );
    const coffeeFind = cartItems.value.find(
      (cartItem) => cartItem.coffee.id === coffeeElementId
    );
    console.log("deleteCoffeeFromCart");
    console.log(coffeeIndex);
    console.log(coffeeFind);

    if (coffeeIndex > -1) {
      // cartItems.value.splice(coffeeIndex, 1)
      cartItems.value = cartItems.value.filter(
        (cartItem) => cartItem.coffee.id !== coffeeElementId
      );
    }
  }

  function cleanCart() {
    cartItems.value = []
  }

  return {
    cartItems,
    initCartItems,
    addCoffeeToCart,
    setCoffeeQtdOnCart,
    deleteCoffeeFromCart,
    totalQtdItems,
    totalValueItems,
    cleanCart
  };
});
