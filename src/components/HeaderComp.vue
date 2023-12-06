<template>
  <div class="header">
    <h2 class="header-text">Espaço Innovar</h2>
      <!-- <img class="logo" src="/media/logoinnovar.png" alt="Innovar"> -->
    <div class="header-buttons">
      <router-link to="/"><button class="header-button">Home  </button></router-link>
      <router-link to="/horario"><button class="header-button">Horarios Bloqueados</button></router-link>
      <router-link to="/procedimento"><button class="header-button">Procedimentos</button></router-link>
      <router-link to="/pacote"><button class="header-button">Pacotes</button></router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  background: linear-gradient(to bottom, #00b5b2, #3db1af);
  height: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.header-text {
  color: #ffffff;
  font-size: 24px;
  margin: 0;
}

.header-buttons {
  display: flex;
  gap: 20px;
}

.header-button {
  background-color: #00b5b2;
  color:#fcfcfc;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.1s;
}

.header-button:hover {
  background-color: #00b5b2;
  border: none;
  color:#fcfcfc;
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
