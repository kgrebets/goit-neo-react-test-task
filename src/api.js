import axios from 'axios';

const BASE_URL = 'https://example.com'; // заміни на свій бекенд API

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;