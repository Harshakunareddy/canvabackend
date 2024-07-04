import axios from 'axios';

const production_api = 'https://canvabackend-ao4g.onrender.com';

const token = localStorage.getItem('canva_token');

const api = axios.create({
    baseURL: production_api,
    headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    },
    withCredentials: true  // This is used for sending cookies along with the request
});

export default api;
