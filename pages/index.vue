<template>
    <div>
        <v-row>
            <v-col cols="8">
                <v-container fluid data-cy="char-card-list">
                    <v-row dense v-if="coffeeList.length">
                        <v-col v-for=" coffee in coffeeList" cols="6" md="4">
                            <CoffeeCard :coffee="coffee" />
                        </v-col>
                    </v-row>
                    <v-row v-else justify="center">
                        <h1>No Results</h1>
                    </v-row>
                </v-container>
            </v-col>
            <v-col cols="4">
                
                <CartComponent />
                <v-btn prepend-icon="mdi-send" size="x-large" class="w-100 mt-3 bg-green-darken-4">
  Fazer Checkout
</v-btn>
            </v-col>
        </v-row>

    </div>
</template>

<script setup>
const coffeeListStore = useCoffeeStore()
const { coffeeList } = storeToRefs(coffeeListStore)

onMounted(async () => {
    await coffeeListStore.initCoffeeList();
});

</script>

<style scoped></style>