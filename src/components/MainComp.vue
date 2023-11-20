<template>
  <div class="main">
    <h2 class="main-title">Confira e Adicione:</h2>
    <div class="content">
      <div class="coluna">
        <h3>Horários Bloqueados</h3>
        <div class="content-list">
          <div class="list" v-for="(horarioBloq, index) in horarioBloqs" :key="index">
            <span class="item">{{ formatarDataHora(horarioBloq.inicio, horarioBloq.fim) }}</span>
            <button @click="excluirHorario(index)" class="delete-button">Excluir</button>
          </div>
        </div>

        <div>
          <label for="data">Data:</label>
          <input v-model="newDataBloq" type="date" id="data" />
        </div>
        <div>
          <label for="horaInicio">Hora Início:</label>
          <input v-model="newHoraInicio" type="time" id="horaInicio" />
        </div>
        <div>
          <label for="horaFim">Hora Fim:</label>
          <input v-model="newHoraFim" type="time" id="horaFim" />
        </div>

        <div class="button-container">
          <button @click="addhorarioBloq" class="add-button" :disabled="!isValidInput">Adicionar</button>
          <button @click="limparHorarios" class="clear-button">Limpar</button>
        </div>
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
      newDataBloq: '',
      newHoraInicio: '',
      newHoraFim: '',
      newprocedimento: '',
      newpacote: '',
    };
  },
  computed: {
    isValidInput() {
      return this.newDataBloq.trim() !== '' && this.newHoraInicio.trim() !== '' && this.newHoraFim.trim() !== '';
    },
  },
  methods: {
    addhorarioBloq() {
  if (this.isValidInput) {
    const inicio = new Date(`${this.newDataBloq}T${this.newHoraInicio}`);
    const fim = new Date(`${this.newDataBloq}T${this.newHoraFim}`);

    if (!isNaN(inicio) && !isNaN(fim) && inicio < fim) {
      this.horarioBloqs.push({ inicio, fim });
      this.newDataBloq = '';
      this.newHoraInicio = '';
      this.newHoraFim = '';
    } else {
      alert("Por favor, insira datas e horas válidas.");
    }
  } else {
    alert("Por favor, preencha todos os campos.");
  }
},
cluirHorario(index) {
      this.horarioBloqs.splice(index, 1);
    },
    limparHorarios() {
    if (window.confirm('Tem certeza de que deseja limpar todos os horários bloqueados?')) {
      this.horarioBloqs = [];
    }
  },
    addprocedimento() {
      if (this.newprocedimento.trim() !== '') {
        this.procedimentos.push(this.newprocedimento);
        this.newprocedimento = '';
      }
    },
    excluirProcedimento(index) {
      this.procedimentos.splice(index, 1);
    },
    limparProcedimentos() {
      this.procedimentos = [];
    },

    addpacote() {
      if (this.newpacote.trim() !== '') {
        this.pacotes.push(this.newpacote);
        this.newpacote = '';
      }
    },
    excluirPacote(index) {
      this.pacotes.splice(index, 1);
    },
    limparPacotes() {
      this.pacotes = [];
    },

    formatarDataHora(inicio, fim) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      const formatoInicio = new Date(inicio).toLocaleDateString(undefined, options);
      const formatoFim = new Date(fim).toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric' });
      return `${formatoInicio} às ${formatoFim}`;
    },
  },
};
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
</style>
