<template>
    <div>
        <v-card
            color="#1F7087"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
                <v-avatar
                class="ma-3"
                size="70"
                rounded="0"
              >
                <v-img :src=coffee.photo></v-img>
              </v-avatar>
              <div>
                <v-card-title class="text-h5 text-wrap">
                    {{ coffee.name }}
                </v-card-title>

                <v-card-subtitle class="text-h6 text-wrap">{{ formattedPrice }}</v-card-subtitle>

                <v-card-actions class="">
                    <v-text-field v-model="qtdLocal" append-icon="mdi-plus" prepend-icon="mdi-minus" @click:append="increment"
                        @click:prepend="decrement" readonly width="5" variant="outlined" max-width="10" class="d-flex align-center justify-center text-center">
                    </v-text-field>
                    <v-btn density="default" elevation="24" icon="mdi-trash-can" variant="elevated" class="" @click="deleteCoffeeFromCartStore"></v-btn>
                </v-card-actions>
              </div>

              
            </div>
          </v-card>
    </div>
</template>

<script setup lang="ts">

const { cartCoffeeProp } = defineProps<{
    cartCoffeeProp: CartCoffeeElement
}>()
const {coffee, qtd} = cartCoffeeProp
const qtdLocal = toRef(cartCoffeeProp, 'qtd');


const formattedPrice = computed(() => {
  return (coffee.price * qtdLocal.value)
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
})

function increment() {
    qtdLocal.value = qtdLocal.value + 1
    // qtd.value = qtd.value + 1
    setCoffeeQtdOnStoreCart()

}
function decrement() {
    if (qtdLocal.value > 1) qtdLocal.value = qtdLocal.value - 1
    // if (qtd.value > 1) qtd.value = qtd.value - 1
    setCoffeeQtdOnStoreCart()
}

const cartStore = useCartStore()

function setCoffeeQtdOnStoreCart() {
    const newCoffeeObject = {
        coffee,
        qtd: qtdLocal.value
    }
    cartStore.setCoffeeQtdOnCart(newCoffeeObject)
}

function deleteCoffeeFromCartStore() {
    cartStore.deleteCoffeeFromCart(coffee.id)
}

</script>

