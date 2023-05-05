import axios from 'axios'
// used in frontend components to fetch api data
const baseURL = import.meta.env.VITE_API_URL

export const api = axios.create({ baseURL })
