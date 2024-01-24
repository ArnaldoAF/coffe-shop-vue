<template>
    <v-card  class="mt-6">
        <v-card-title>Carrinho</v-card-title>    

        <v-card-text>
        This is content
      </v-card-text>   
    </v-card>
</template>

<script setup>
const cartCoffeeListStore = useCartStore()
const { cartItems } = storeToRefs(cartCoffeeListStore)

onMounted(async () => {
    await cartCoffeeListStore.initCoffeeList();
});

</script>

<style lang="scss" scoped>

</style>