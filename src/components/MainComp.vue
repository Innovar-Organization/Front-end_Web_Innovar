<script setup>
import HorariosBloqueados from '/src/components/HorariosBloqueados.vue'
import PacotesComp from '/src/components/PacotesComp.vue'
import ProcedimentosComp from '/src/components/ProcedimentosComp.vue'
</script>

<template>
  <main>
    <HorariosBloqueados />
    <PacotesComp />
    <ProcedimentosComp />
  </main>
</template>

<style>

body {
  background-color: #6f7070;
}

main {
  display: flex;
  justify-content: space-between;
}
</style>
