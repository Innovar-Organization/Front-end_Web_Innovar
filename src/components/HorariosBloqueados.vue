<script setup>
import { reactive, ref, onMounted } from 'vue';
import api from "@/plugins/axios";

const horarios = reactive({
  data: '',
  hora_inicio: '',
  hora_fim: ''
});

const adicionarHorario = async () => {
  try {
    const response = await api.post('/horario_bloqueado/', horarios);
    console.log('Resposta do servidor:', response.data);
  }catch(error) {
    console.error('Erro ao adicionar horario:', error);
  }
};

const horario = ref([]);

onMounted(async () =>{
  const response = await api.get('horario_bloqueado/');
  horario.value = response.data.results;
})
</script>

<template>
  <div class="coluna">
    <label for="procedimentoNome">Data:</label>
    <input v-model="horarios.data" class="nome-data" placeholder="data" type="date">

    <label for="procedimentoNome">Horario Inicio:</label>
    <input v-model="horarios.hora_inicio" class="nome-horaInicio" placeholder="HoraInicio" type="time">

    <label for="procedimentoNome">Horario Fim:</label>
    <input v-model="horarios.hora_fim" class="nome-horaFim" placeholder="HoraFim"  type="time">
  
  <div class="button-container">
  <div class="botão">
    <button class="adicionar" @click="adicionarHorario">Adicionar</button>
  </div>
  </div>
  </div>
  <div class="nomes-container">
        <div class="list" v-for="horario in horarios" :key="horario.id">
          <h3 class="item">{{ horario.data }}</h3>
          <h3 class="item">{{ horario.hora_inicio }}</h3>
          <h3 class="item">{{ horario.hora_fim }}</h3>
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
