<template>
    <div>
        <h1>Home</h1>
        {{ coffeeList }}
    </div>
</template>

<script setup>
const coffeeListStore = useCoffeeStore()
const { coffeeList } = storeToRefs(coffeeListStore)

onMounted(async () => {
    await coffeeListStore.initCoffeeList();
});

</script>

<style scoped>

</style>