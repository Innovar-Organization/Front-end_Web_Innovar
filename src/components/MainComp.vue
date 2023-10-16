<template>
  <div class="main">
    <h2 class="main-title">Confira e Adicione:</h2>
    <div class="content">
      <div class="coluna">
        <h3>Horários Bloqueados</h3>
        <div class="content-list">
          <div class="list" v-for="(horarioBloq, index) in horarioBloqs" :key="index">
            {{ horarioBloq }}
            <button @click="excluirHorario(index)">Excluir</button>
          </div>
        </div>
        <button @click="limparHorarios" class="limpar-button">Limpar</button>
        <input
          v-model="newhorarioBloq"
          @keyup.enter="addhorarioBloq"
          placeholder="Adicionar Horário"
        />
      </div>
      <div class="coluna">
        <h3>Procedimentos</h3>
        <div class="content-list">
          <div class="list" v-for="(procedimento, index) in procedimentos" :key="index">
            {{ procedimento }}
            <button @click="excluirProcedimento(index)">Excluir</button>
          </div>
        </div>
        <button @click="limparProcedimentos" class="limpar-button">Limpar</button>
        <input
          v-model="newprocedimento"
          @keyup.enter="addprocedimento"
          placeholder="Adicionar Procedimento"
        />
      </div>

      <div class="coluna">
        <h3>Pacotes</h3>
        <div class="content-list">
          <div class="list" v-for="(pacote, index) in pacotes" :key="index">
            {{ pacote }}
            <button @click="excluirPacote(index)">Excluir</button>
          </div>
        </div>
        <button @click="limparPacotes" class="limpar-button">Limpar</button>
        <input v-model="newpacote" @keyup.enter="addpacote" placeholder="Adicionar Pacote" />
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
  background-color: cyan;
  padding: 20px;
  text-align: center;
  min-height: 500px;
  border-radius: 5px;
}

.main-title {
  color: white;
  font-size: 24px;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.coluna {
  width: 30%;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
  position: relative;
}

.coluna .content-list {
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid black;
  margin-bottom: 10px;
  border-radius: 5px;
}

.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}

input {
  text-align: center;
}

.limpar-button {
  position: absolute;
  bottom: 10px;
  left: 10px;
  border: black;
  border-radius: 5px;
  cursor: pointer;
}
</style>
