<script setup>
import HorariosBloqueados from '/home/wedley.schmoeller/Documentos/wedley/innovar-web/src/components/HorariosBloqueados.vue'
import PacotesComp from '/home/wedley.schmoeller/Documentos/wedley/innovar-web/src/components/PacotesComp.vue'
import ProcedimentosComp from '/home/wedley.schmoeller/Documentos/wedley/innovar-web/src/components/ProcedimentosComp.vue'
</script>

<template>
  <main> 
  <HorariosBloqueados />
  <PacotesComp />
  <ProcedimentosComp />
  </main>
</template>
        

<style scoped>
.main {
  margin: 20px;
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
}

.main-title {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.coluna {
  width: 30%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  transition: box-shadow 0.3s;
}

.coluna:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}

.item {
  color: #333;
  font-size: 16px;
}

.delete-button {
  background-color: #a70b00;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #ff1100;
}

.clear-button {
  background-color: #333;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.clear-button:hover {
  background-color: #858484;
}

.add-button {
  background-color: #333;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 10px;
}

.add-button:hover {
  background-color: #525252;
}

.button-container {
  margin-top: 10px;
}

input {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.upload-button {
  background-color: #333;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 10px;
}

.upload-button:hover {
  background-color: #525252;
}

</style>
