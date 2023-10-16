<template>
  <div class="main">
    <h2 class="main-title">Main</h2>
    <div class="content">
      <div class="coluna-1">
        <h3>Horários Bloqueados</h3>
        <div class="content-list">
          <div class="list" v-for="(horarioBloq, index) in horarioBloqs" :key="index">
            {{ horarioBloq }}
          </div>
        </div>
        <input
          v-model="newhorarioBloq"
          @keyup.enter="addhorarioBloq"
          placeholder="Adicionar horário"
        />
      </div>
      <div class="coluna-2">
        <h3>Procedimentos</h3>
        <div class="content-list">
          <div class="list" v-for="(procedimento, index) in procedimentos" :key="index">
            {{ procedimento }}
          </div>
        </div>
        <input
          v-model="newprocedimento"
          @keyup.enter="addprocedimento"
          placeholder="Adicionar procedimento"
        />
      </div>

      <div class="coluna-3">
        <h3>Pacotes</h3>
        <div class="content-list">
          <div class="list" v-for="(pacote, index) in pacotes" :key="index">
            {{ pacote }}
          </div>
        </div>
        <input v-model="newpacote" @keyup.enter="addpacote" placeholder="Adicionar pacote" />
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
        this.horarioBloqs.push(this.newhorarioBloq)
        this.newhorarioBloq = ''
      }
    },
    addprocedimento() {
      if (this.newprocedimento.trim() !== '') {
        this.procedimentos.push(this.newprocedimento)
        this.newprocedimento = ''
      }
    },
    addpacote() {
      if (this.newpacote.trim() !== '') {
        this.pacotes.push(this.newpacote)
        this.newpacote = ''
      }
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
  min-height: 550px;
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

.coluna-1 {
  width: 30%;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}

.coluna-2 {
  width: 30%;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}

.coluna-3 {
  width: 30%;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}

.content-list {
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid black;
}

.list {
  padding: 5px;
}
</style>
