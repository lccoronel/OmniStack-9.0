import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.2:1111'
});

export default api;