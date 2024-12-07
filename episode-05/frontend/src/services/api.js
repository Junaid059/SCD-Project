import axios  from 'axios';  

const api = axios.create({
    baseURL:'http://localhost:3013'
})

export default api;
