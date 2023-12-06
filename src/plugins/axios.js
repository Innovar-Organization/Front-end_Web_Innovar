import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backendinnovar-dev-sbpq.3.us-1.fl0.io/api/'
})


export default api;