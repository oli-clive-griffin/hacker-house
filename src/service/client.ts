import axios from "axios";

const baseURL = 'http://localhost:5000'

const client = axios.create({ baseURL })

export default client