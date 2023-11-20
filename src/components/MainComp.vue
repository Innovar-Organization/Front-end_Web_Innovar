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
            <span class="item">{{ procedimento.nome }}</span>
            <span class="item">{{ procedimento.descricao }}</span>
            <img :src="procedimento.imagem" alt="Imagem do Procedimento" />
            <button @click="excluirProcedimento(index)" class="delete-button">Excluir</button>
          </div>
        </div>

        <div>
          <label for="procedimentoNome">Nome do Procedimento:</label>
          <input v-model="newProcedimentoNome" type="text" id="procedimentoNome" />
        </div>
        <div>
          <label for="procedimentoDescricao">Descrição do Procedimento:</label>
          <input v-model="newProcedimentoDescricao" type="text" id="procedimentoDescricao" />
        </div>
        <div>
          <label for="procedimentoImagem">Imagem do Procedimento:</label>
          <input type="file" @change="handleProcedimentoImagemChange" />
        </div>

        <div class="button-container">
          <button @click="addprocedimento" class="add-button" :disabled="!isValidProcedimentoInput">Adicionar</button>
          <button @click="limparProcedimentos" class="clear-button">Limpar</button>
        </div>
      </div>

      <div class="coluna">
        <h3>Pacotes</h3>
        <div class="content-list">
          <div class="list" v-for="(pacote, index) in pacotes" :key="index">
            <span class="item">{{ pacote.nome }}</span>
            <span class="item">{{ pacote.descricao }}</span>
            <img :src="pacote.imagem" alt="Imagem do Pacote" />
            <button @click="excluirPacote(index)" class="delete-button">Excluir</button>
          </div>
        </div>

        <div>
          <label for="pacoteNome">Nome do Pacote:</label>
          <input v-model="newPacoteNome" type="text" id="pacoteNome" />
        </div>
        <div>
          <label for="pacoteDescricao">Descrição do Pacote:</label>
          <input v-model="newPacoteDescricao" type="text" id="pacoteDescricao" />
        </div>
        <div>
          <label for="pacoteImagem">Imagem do Pacote:</label>
          <input type="file" @change="handlePacoteImagemChange" />
        </div>

        <div class="button-container">
          <button @click="addpacote" class="add-button" :disabled="!isValidPacoteInput">Adicionar</button>
          <button @click="limparPacotes" class="clear-button">Limpar</button>
        </div>
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
      newProcedimentoNome: '',
      newProcedimentoDescricao: '',
      newProcedimentoImagem: null,
      newPacoteNome: '',
      newPacoteDescricao: '',
      newPacoteImagem: null,
    };
  },
  computed: {
    isValidInput() {
      return this.newDataBloq.trim() !== '' && this.newHoraInicio.trim() !== '' && this.newHoraFim.trim() !== '';
    },
    isValidProcedimentoInput() {
      return (
        this.newProcedimentoNome.trim() !== '' &&
        this.newProcedimentoDescricao.trim() !== '' &&
        this.newProcedimentoImagem !== null
      );
    },
    isValidPacoteInput() {
      return (
        this.newPacoteNome.trim() !== '' &&
        this.newPacoteDescricao.trim() !== '' &&
        this.newPacoteImagem !== null
      );
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
    excluirHorario(index) {
      this.horarioBloqs.splice(index, 1);
    },
    limparHorarios() {
      if (window.confirm('Tem certeza de que deseja limpar todos os horários bloqueados?')) {
        this.horarioBloqs = [];
      }
    },

    addprocedimento() {
      if (this.isValidProcedimentoInput) {
        const procedimento = {
          nome: this.newProcedimentoNome,
          descricao: this.newProcedimentoDescricao,
          imagem: this.newProcedimentoImagem,
        };

        this.procedimentos.push(procedimento);
        this.newProcedimentoNome = '';
        this.newProcedimentoDescricao = '';
        this.newProcedimentoImagem = null;
      } else {
        alert("Por favor, preencha todos os campos do procedimento.");
      }
    },
    excluirProcedimento(index) {
      this.procedimentos.splice(index, 1);
    },
    limparProcedimentos() {
      if (window.confirm('Tem certeza de que deseja limpar todos os procedimentos?')) {
        this.procedimentos = [];
      }
    },
    handleProcedimentoImagemChange(event) {
      const file = event.target.files[0];
      this.newProcedimentoImagem = URL.createObjectURL(file);
    },

    addpacote() {
      if (this.isValidPacoteInput) {
        const pacote = {
          nome: this.newPacoteNome,
          descricao: this.newPacoteDescricao,
          imagem: this.newPacoteImagem,
        };

        this.pacotes.push(pacote);
        this.newPacoteNome = '';
        this.newPacoteDescricao = '';
        this.newPacoteImagem = null;
      } else {
        alert("Por favor, preencha todos os campos do pacote.");
      }
    },
    excluirPacote(index) {
      this.pacotes.splice(index, 1);
    },
    limparPacotes() {
      if (window.confirm('Tem certeza de que deseja limpar todos os pacotes?')) {
        this.pacotes = [];
      }
    },
    handlePacoteImagemChange(event) {
      const file = event.target.files[0];
      this.newPacoteImagem = URL.createObjectURL(file);
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
