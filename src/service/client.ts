import axios from "axios";

const baseURL = 'http://localhost:5000/api'

const apiClient = axios.create({ baseURL })

export default apiClient