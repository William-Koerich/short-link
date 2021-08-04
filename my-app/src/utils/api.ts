import axios from 'axios'

/**
 * Connection with back-end.
 */
const api = axios.create({
  baseURL: 'http://localhost:7777'
})

export default api
