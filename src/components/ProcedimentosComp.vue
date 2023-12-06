<script setup>
import { reactive, ref, onMounted } from 'vue';
import api from "@/plugins/axios";
import procedimentoService from '@/services/Procedimento.js'
import imageService from '@/services/images.js'


const coverUrl = ref('')
const file = ref(null)
const Procedimentos = reactive({
  nome: '',
  descricao: '',
  imagem: ''
});


const adicionarProcedimento = async () => {
  try {
    const response = await api.post('procedimentos/', Procedimentos);
    const image = await imageService.uploadImage(file.value)
    Procedimentos.cover_attachment_key = image.attachment_key
    await procedimentoService.saveProcedimentos(Procedimentos)
    Object.assign(Procedimentos, {
      id: '',
      nome: '',
      descricao: '',
      imagem: ''
    })
  showForm.value = false
    console.log('Resposta do servidor:', response.data);
  }catch(error) {
    console.error('Erro ao adicionar procedimentos:', error);
  }
};

function onFileChange(e) {
  file.value = e.target.files[0]
  coverUrl.value = URL.createObjectURL(file.value)
}

const procedimento = ref([]);

onMounted(async () =>{
  const response = await api.get('procedimentos/');
  procedimento.value = response.data.results;
})

const showForm = ref(false)
</script>

<template>
  <div class="container">
  <div class="coluna">
    <label for="procedimentoNome">Procedimentos:</label>
    <input v-model="Procedimentos.nome" class="nome-procedimento" >

    <label for="procedimentoNome">Descrição do Procedimentos:</label>
    <input v-model="Procedimentos.descricao" class="nome-descricao"  >
    <form class="form">
        <div class="row">
          <div id="preview">
            <label for="procedimentoNome">Adicione Imagem:</label>
            <input type="file" @change="onFileChange" />
            <div class="cover">
              <img v-if="coverUrl" :src="coverUrl" />
            </div>
          </div>
        </div>
      </form>
  <div class="button-container">
  <div class="botão">
    <button class="adicionar" @click="adicionarProcedimento">Adicionar</button>
  </div>
  </div>
  </div>
</div>
</template>
<style scoped>

.coluna-cotainer {
  display: flex;
  justify-content: space-between;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
}

.coluna {
  flex: 0 1 30%;
  width: 33%;
  background-color: #a0a0a0;
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
  color: #ffffff;
  font-size: 16px;
}

.adicionar {
  background-color: #00b5b2;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.adicionar:hover {
  background-color: #018684;
}
.cover img {
  max-width: 100%; 
  max-height: 100%; 
  width: auto;
  height: auto;
  display: block;
  margin: 0 auto; 
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
