<template>
    <v-app theme="dark">
        <v-app-bar :elevation="2">
            <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>
                <NuxtLink to="/">Coffee Shop</NuxtLink>
            </v-app-bar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <NuxtLink to="/cart"><v-icon>mdi-cart</v-icon></NuxtLink>

            </v-btn>
        </v-app-bar>
        <!-- .... -->
        <v-main>
            <v-container class="d-flex flex-column">
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>
  