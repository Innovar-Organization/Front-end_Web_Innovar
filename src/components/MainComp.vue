<script setup>
import HomeScreen from '../screens/HomeScreen.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <main>
    
    <RouterView />
    </main>
</template>

<style>

body {
  background-color: #fcfcfc;
}

main {
  display: flex;
  justify-content: space-between;
}
</style>
