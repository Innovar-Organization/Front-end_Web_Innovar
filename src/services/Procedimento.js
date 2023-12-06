import api from '../plugins/axios'

class ProcedimentoService {
  async getAllProcedimentos() {
    const response = await api.get('/procedimentos/')
    return response.data
  }
  async saveProcedimentos(procedimento) {
    let response
    if (procedimento.id) {
      response = await api.put(`/procedimentos/${procedimento.id}/`, procedimento)
    } else {
      response = await api.post('/procedimentos/', procedimento)
    }
    return response.data
  }
}

export default new ProcedimentoService()