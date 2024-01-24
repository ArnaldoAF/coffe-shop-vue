<script setup lang="ts">

const qtd = ref(0);
const { coffee } = defineProps<{
    coffee: CoffeeInterface
}>()

function increment() {
    qtd.value = qtd.value + 1

}
function decrement() {
    if (qtd.value > 0) qtd.value = qtd.value - 1

}

</script>

<template>
    <v-card class="ma-3 " max-width="344" variant="tonal" data-cy="char-card">
        <v-img :src=coffee.photo height="100" class="my-3"></v-img>

        <v-card-item>

            <v-card-title data-cy="coffee-name">
                {{ coffee.name }}
            </v-card-title>

            <v-card-subtitle class="d-flex align-center text-wrap" data-cy="coffee-status">
                {{ coffee.description }}
            </v-card-subtitle>
        </v-card-item>

        <v-card-text>
            <v-chip v-for=" tag in coffee.tags" variant="outlined" class="ma-1" size="small">
                {{ tag }}
            </v-chip>

            


        </v-card-text>
        <v-card-actions class="d-flex justify-space-between align-center">
            <v-text-field v-model="qtd" append-icon="mdi-plus" prepend-icon="mdi-minus" @click:append="increment"
                @click:prepend="decrement" readonly width="5" variant="outlined" max-width="10" class="d-flex align-center justify-center text-center">
            </v-text-field>
            <v-btn density="default" elevation="24" icon="mdi-cart" variant="elevated" class=""></v-btn>
        </v-card-actions>

    </v-card>
</template>