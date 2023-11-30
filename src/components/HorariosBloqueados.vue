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

const horariosget = ref([]);

onMounted(async () =>{
  const response = await api.get('/horario_bloqueado');
  horariosget.value = response.data.results;
})
</script>

<template>
  <div class="nome-horario">
    <input v-model="horarios.data" class="nome-data" placeholder="data" type="date">
    <input v-model="horarios.hora_inicio" class="nome-horaInicio" placeholder="HoraInicio" type="time">
    <input v-model="horarios.hora_fim" class="nome-horaFim" placeholder="HoraFim"  type="time">
  </div>
  <div class="botão">
    <button class="adicionar" @click="adicionarHorario">Adicionar</button>
  </div>
  <div class="nomes-container">
        <div class="nome-item" v-for="horarioget in horariogets" :key="horarioget.id">
          <h1>{{ horarioget.data }}</h1>
          <h3>{{ horarioget.hora_inicio }}</h3>
          <h3>{{ horarioget.hora_fim }}</h3>
        </div>
  </div>
</template>