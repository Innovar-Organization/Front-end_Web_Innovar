<template>
  <div class="coluna">
    <h3>Procedimentos</h3>
    <div class="content-list">
      <div class="list" v-for="(procedimento, index) in procedimentos" :key="index">
        <span class="item">{{ procedimento.nome }}</span>
        <span class="item">{{ procedimento.descricao }}</span>
        <span class="item">{{ procedimento.imagemNome }}</span>
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
      <button @click="addProcedimento" class="add-button" :disabled="!isValidProcedimentoInput">
        Adicionar
      </button>
      <button @click="limparProcedimentos" class="clear-button">Limpar</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['procedimentos'],
  data() {
    return {
      newProcedimentoNome: '',
      newProcedimentoDescricao: '',
      newProcedimentoImagem: null,
      newProcedimentoImagemNome: '',
    };
  },
  computed: {
    isValidProcedimentoInput() {
      return (
        this.newProcedimentoNome.trim() !== '' &&
        this.newProcedimentoDescricao.trim() !== '' &&
        this.newProcedimentoImagem !== null
      );
    },
  },
  methods: {
    async addProcedimento() {
      if (this.isValidProcedimentoInput) {
        const formData = new FormData();
        formData.append('nome', this.newProcedimentoNome);
        formData.append('descricao', this.newProcedimentoDescricao);
        formData.append('imagem', this.newProcedimentoImagem);

        try {
          const response = await axios.post('http://localhost:19003/api/procedimentos/', formData);
          this.$emit('adicionarProcedimento', response.data);
          this.limparCampos();
        } catch (error) {
          console.error('Erro ao adicionar procedimento:', error);
        }
      } else {
        alert('Por favor, preencha todos os campos do procedimento.');
      }
    },
    excluirProcedimento(index) {
      this.$emit('excluirProcedimento', index);
    },
    limparProcedimentos() {
      if (window.confirm('Tem certeza de que deseja limpar todos os procedimentos?')) {
        this.$emit('limparProcedimentos');
      }
    },
    handleProcedimentoImagemChange(event) {
      const file = event.target.files[0];
      this.newProcedimentoImagem = file;
      this.newProcedimentoImagemNome = file.name;
    },
    limparCampos() {
      this.newProcedimentoNome = '';
      this.newProcedimentoDescricao = '';
      this.newProcedimentoImagem = null;
      this.newProcedimentoImagemNome = '';
    },
  },
};
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
