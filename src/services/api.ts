import axios from 'axios';

const api = axios.create({
  baseURL: 'https://new-api.urbis.cc',
});

export default api;
