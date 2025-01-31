import axios from 'axios'
const BASE_URL = "https://api-joyread.philtranwp.site/"

export const axiosMainApi = axios.create({
  baseURL: BASE_URL,
})