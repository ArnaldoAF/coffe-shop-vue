<template>
    <v-row justify="center">
        <v-col cols="7">
            <CartComponent />
            <v-dialog width="500">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" prepend-icon="mdi-check" size="x-large" class="w-100 mt-3 bg-green-darken-4"
                        :disabled="totalQtdItems == 0">
                        Finalizar
                    </v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <v-card title="Finalizado!">
                        <v-card-text>
                            Compra Feita!
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <NuxtLink to="/">
                                <v-btn text="Voltar para Home" @click="finish(isActive)" size="x-large" class=" bg-green-darken-4"></v-btn>
                            </NuxtLink>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>

        </v-col>

    </v-row>
</template>

<script setup>

const cartCoffeeListStore = useCartStore()
const { totalQtdItems,  } = storeToRefs(cartCoffeeListStore)
const router = useRouter()

function finish(isActive) {
    isActive.value = false
    router.push({ path: "/" })
    cartCoffeeListStore.cleanCart()

}
</script>

<style lang="scss" scoped></style>