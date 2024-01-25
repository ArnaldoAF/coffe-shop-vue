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
        <hr class="my-3"/>
        
      </v-card-text>   
      <v-card-actions class="d-flex flex-column px-4">
        <div class="text-h5 d-flex justify-space-between w-100">
            <p>Qtd Total</p>
            <p>{{ totalQtdItems }}</p>
            
        </div>
        <div class="text-h4 d-flex justify-space-between w-100 mt-4">
            <p>Total</p>
            <p>{{ totalValueItems }}</p>
        </div>
        
        
      </v-card-actions>
    </v-card>
</template>

<script setup>
const cartCoffeeListStore = useCartStore()
const { cartItems, totalQtdItems, totalValueItems } = storeToRefs(cartCoffeeListStore)


</script>

<style lang="scss" scoped>

</style>