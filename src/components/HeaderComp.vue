<template>
  <div class="header">
    <h2 class="header-text">Espaço Innovar</h2>
      <!-- <img class="logo" src="media/logoinnovar.png" alt="Innovar"> -->
    <div class="header-buttons">
      <button class="header-button" @click="goToProcedimentos">Procedimentos</button>
      <button class="header-button" @click="goToHorariosBloqueados">Horários Bloqueados</button>
      <button class="header-button" @click="goToPacotes">Pacotes</button>
    </div>
  </div>
</template>

<style scoped>
.header {
  background: linear-gradient(to bottom, #00b5b2, #68e2e0);
  height: 160px;
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 0 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header-text {
  color: white;
  font-size: 24px;
  margin: 0;
}

.header-buttons {
  display: flex;
  gap: 20px;
}

.header-button {
  background-color: #2e86de;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.1s;
}

.header-button:hover {
  background-color: #fcfcfc;
  border: 2px solid #2e86de;
  color:#2e86de;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .header-text {
    font-size: 20px;
  }
  .header-button {
    padding: 10px 20px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .header-text {
    font-size: 18px;
  }
  .header-button {
    padding: 8px 16px;
    font-size: 12px;
  }
}
</style>

<script>
export default {
  methods: {
    goToProcedimentos() {
     
    },
    goToHorariosBloqueados() {
     
    },
    goToPacotes() {
  
    },
  },
};
</script>
