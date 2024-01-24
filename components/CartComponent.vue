<template>
    <v-card  class="mt-6" prepend-icon="mdi-cart">
        <template v-slot:title>Carrinho
    </template>  

        <v-card-text>
        This is content
        <p v-for="cartItem in cartItems">{{ cartItem }}
        </p>
      </v-card-text>   
    </v-card>
</template>

<script setup>
const cartCoffeeListStore = useCartStore()
const { cartItems } = storeToRefs(cartCoffeeListStore)


</script>

<style lang="scss" scoped>

</style>