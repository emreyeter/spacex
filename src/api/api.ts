import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.spacexdata.com/latest/',
});

export default api;
