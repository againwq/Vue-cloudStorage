import axios from 'axios'
const DEV_URL = 'http://127.0.0.1:3000/api'
const http = axios.create({
    baseURL: DEV_URL,
    timeout: 1000
})

export default http
