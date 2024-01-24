<template>
    <v-card  class="mt-6" prepend-icon="mdi-cart">
        <template v-slot:title>Carrinho
    </template>  

        <v-card-text>
        <v-row dense v-if="cartItems.length">
                        <v-col v-for="cartItem in cartItems" cols="12" md="12" :key="cartItem.coffee.id">
                            <CartCoffeeCard :cartCoffeeProp="cartItem" />
                        </v-col>
                    </v-row>
        <div v-for="cartItem in cartItems">
            <hr />
            <p>{{ cartItem.coffee.name }}</p>
            <p>{{cartItem.coffee.id}}</p>
            <p>{{cartItem.qtd}}</p>
        </div>
      </v-card-text>   
    </v-card>
</template>

<script setup>
const cartCoffeeListStore = useCartStore()
const { cartItems } = storeToRefs(cartCoffeeListStore)


</script>

<style lang="scss" scoped>

</style>