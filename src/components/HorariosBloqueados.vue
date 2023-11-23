<template>
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
      <button @click="adicionarHorarioBloq" class="add-button" :disabled="!isValidInput">
        Adicionar
      </button>
      <button @click="limparHorarios" class="clear-button">Limpar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['horarioBloqs'],
  data() {
    return {
      newDataBloq: '',
      newHoraInicio: '',
      newHoraFim: ''
    }
  },
  computed: {
    isValidInput() {
      return (
        this.newDataBloq.trim() !== '' &&
        this.newHoraInicio.trim() !== '' &&
        this.newHoraFim.trim() !== ''
      )
    }
  },
  methods: {
    adicionarHorarioBloq() {
      if (this.isValidInput) {
        const inicio = new Date(`${this.newDataBloq}T${this.newHoraInicio}`)
        const fim = new Date(`${this.newDataBloq}T${this.newHoraFim}`)

        if (!isNaN(inicio) && !isNaN(fim) && inicio < fim) {
          this.$emit('adicionarHorarioBloq', { inicio, fim })
          this.limparCampos()
        } else {
          alert('Por favor, insira datas e horas válidas.')
        }
      } else {
        alert('Por favor, preencha todos os campos.')
      }
    },
    excluirHorario(index) {
      this.$emit('excluirHorario', index)
    },
    limparHorarios() {
      if (window.confirm('Tem certeza de que deseja limpar todos os horários bloqueados?')) {
        this.$emit('limparHorarios')
      }
    },
    formatarDataHora(inicio, fim) {
      const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }
      const formatoInicio = new Date(inicio).toLocaleDateString(undefined, options)
      const formatoFim = new Date(fim).toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: 'numeric'
      })
      return `${formatoInicio} às ${formatoFim}`
    },
    limparCampos() {
      this.newDataBloq = ''
      this.newHoraInicio = ''
      this.newHoraFim = ''
    }
  }
}
</script>

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
  display: flex; /* Adição para alinhar os botões horizontalmente */
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
