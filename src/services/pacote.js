import api from '../plugins/axios'

class PacoteService {
  async getAllPacotes() {
    const response = await api.get('/pacotes/')
    return response.data
  }
  async savePacote(pacote) {
    let response
    if (pacote.id) {
      response = await api.put(`/pacotes/${pacote.id}/`, pacote)
    } else {
      response = await api.post('/pacotes/', pacote)
    }
    return response.data
  }
}

export default new PacoteService()