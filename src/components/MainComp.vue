<template>
  <div class="main">
    <h2 class="main-title">Confira e Adicione:</h2>
    <div class="content">
      <div class="coluna">
        <h3>Horários Bloqueados</h3>
        <div class="content-list">
          <div class="list" v-for="(horarioBloq, index) in horarioBloqs" :key="index">
            <span class="item">{{ horarioBloq }}</span>
            <button @click="excluirHorario(index)" class="delete-button">Excluir</button>
          </div>
        </div>
        
        <input
          v-model="newhorarioBloq"
          @keyup.enter="addhorarioBloq"
          placeholder="Adicionar Horário"
        />
        <button @click="limparHorarios" class="clear-button">Limpar</button>
      </div>
      <div class="coluna">
        <h3>Procedimentos</h3>
        <div class="content-list">
          <div class="list" v-for="(procedimento, index) in procedimentos" :key="index">
            <span class="item">{{ procedimento }}</span>
            <button @click="excluirProcedimento(index)" class="delete-button">Excluir</button>
          </div>
        </div>
        
        <input
          v-model="newprocedimento"
          @keyup.enter="addprocedimento"
          placeholder="Adicionar Procedimento"
        />
        <button @click="limparProcedimentos" class="clear-button">Limpar</button>
      </div>

      <div class="coluna">
        <h3>Pacotes</h3>
        <div class="content-list">
          <div class="list" v-for="(pacote, index) in pacotes" :key="index">
            <span class="item">{{ pacote }}</span>
            <button @click="excluirPacote(index)" class="delete-button">Excluir</button>
          </div>
        </div>
        
        <input v-model="newpacote" @keyup.enter="addpacote" placeholder="Adicionar Pacote" />
        <button @click="limparPacotes" class="clear-button">Limpar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      horarioBloqs: [],
      procedimentos: [],
      pacotes: [],
      newpacote: '',
      newhorarioBloq: '',
      newprocedimento: ''
    }
  },
  methods: {
    addhorarioBloq() {
      if (this.newhorarioBloq.trim() !== '') {
        this.horarioBloqs.push(this.newhorarioBloq);
        this.newhorarioBloq = '';
      }
    },
    addprocedimento() {
      if (this.newprocedimento.trim() !== '') {
        this.procedimentos.push(this.newprocedimento);
        this.newprocedimento = '';
      }
    },
    addpacote() {
      if (this.newpacote.trim() !== '') {
        this.pacotes.push(this.newpacote);
        this.newpacote = '';
      }
    },
    limparHorarios() {
      this.horarioBloqs = [];
    },
    excluirHorario(index) {
      this.horarioBloqs.splice(index, 1);
    },
    limparProcedimentos() {
      this.procedimentos = [];
    },
    excluirProcedimento(index) {
      this.procedimentos.splice(index, 1);
    },
    limparPacotes() {
      this.pacotes = [];
    },
    excluirPacote(index) {
      this.pacotes.splice(index, 1);
    }
  }
}
</script>

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
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #ff4739;
}

.clear-button {
  background-color: #333;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.clear-button:hover {
  background-color: #222;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
