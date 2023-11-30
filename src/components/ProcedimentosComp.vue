<script setup>
import { reactive, ref, onMounted } from 'vue';
import api from "@/plugins/axios";

const Procedimentos = reactive({
  nome: '',
  descricao: '',
  imagem: ''
});

const adicionarProcedimentos = async () => {
  try {
    const response = await api.post('/procedimentos/', Procedimentos);
    console.log('Resposta do servidor:', response.data);
  }catch(error) {
    console.error('Erro ao adicionar horario:', error);
  }
};

const procedimento = ref([]);

onMounted(async () =>{
  const response = await api.get('/procedimentos/');
  procedimento.value = response.data.results;
})
</script>

<template>
  <div class="coluna">
    <label for="procedimentoNome">Procedimentos:</label>
    <input v-model="Procedimentos.nome" class="nome-data" >

    <label for="procedimentoNome">Descrição do Procedimentos:</label>
    <input v-model="Procedimentos.descricao" class="nome-horaInicio"  >

    <label for="procedimentoNome">Imagem:</label>
    <input v-model="Procedimentos.imagem" class="nome-horaFim">
  
  <div class="button-container">
  <div class="botão">
    <button class="adicionar" @click="adicionarProcedimentos">Adicionar</button>
  </div>
  </div>
  </div>
</template>


<style scoped>

.coluna-cotainer {
  display: flex;
  justify-content: space-between;
}

.coluna {
  flex: 0 1 30%;
  width: 33%;
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
  color: #ffffff;
  font-size: 16px;
}

.adicionar {
  background-color: #35a700;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.adicionar:hover {
  background-color: #51ff00;
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

.button-container {
  margin-top: 10px;
  display: flex;
}

input {
  width: calc(100% - 20px);
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
