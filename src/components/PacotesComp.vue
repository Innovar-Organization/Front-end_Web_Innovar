<script>
import axios from 'axios';

export default {
  props: ['pacotes'],
  data() {
    return {
      newPacoteNome: '',
      newPacoteDescricao: '',
      newPacoteImagem: null,
      newPacoteImagemNome: '',
    };
  },
  computed: {
    isValidPacoteInput() {
      return (
        this.newPacoteNome.trim() !== '' &&
        this.newPacoteDescricao.trim() !== '' &&
        this.newPacoteImagem !== null
      );
    },
  },
  methods: {
    async addPacote() {
      if (this.isValidPacoteInput) {
        const formData = new FormData();
        formData.append('nome', this.newPacoteNome);
        formData.append('descricao', this.newPacoteDescricao);
        formData.append('imagem', this.newPacoteImagem);

        try {
          const response = await axios.post('http://localhost:19003/api/pacotes/', formData);
          this.$emit('adicionarPacote', response.data);
          this.limparCampos();
        } catch (error) {
          console.error('Erro ao adicionar pacote:', error);
        }
      } else {
        alert('Por favor, preencha todos os campos do pacote.');
      }
    },
    excluirPacote(index) {
      this.$emit('excluirPacote', index);
    },
    limparPacotes() {
      if (window.confirm('Tem certeza de que deseja limpar todos os pacotes?')) {
        this.$emit('limparPacotes');
      }
    },
    handlePacoteImagemChange(event) {
      const file = event.target.files[0];
      this.newPacoteImagem = file;
      this.newPacoteImagemNome = file.name;
    },
    limparCampos() {
      this.newPacoteNome = '';
      this.newPacoteDescricao = '';
      this.newPacoteImagem = null;
      this.newPacoteImagemNome = '';
    },
  },
};
</script>

<template>
  <div class="coluna">
    <h3>Pacotes</h3>
    <div class="content-list">
      <div class="list" v-for="(pacote, index) in pacotes" :key="index">
        <span class="item">{{ pacote.nome }}</span>
        <span class="item">{{ pacote.descricao }}</span>
        <span class="item">{{ pacote.imagemNome }}</span>
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
      <button @click="addPacote" class="add-button" :disabled="!isValidPacoteInput">
        Adicionar
      </button>
      <button @click="limparPacotes" class="clear-button">Limpar</button>
    </div>
  </div>
</template>

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
