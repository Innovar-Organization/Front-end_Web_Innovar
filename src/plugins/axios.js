import axios from 'axios'

const api = axios.create({
  baseURL: 'http://0.0.0.0:19003/api/'
})


export default api;