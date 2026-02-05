import axios from 'axios';

const api = axios.create({
  baseURL: 'https://edu-aura-backend-t1du.vercel.app/api',
});

api.interceptors.request.use((config) => {
  if (config.method !== 'get' && !(config.data instanceof FormData)) {
    config.headers['Content-Type'] = 'application/json';
  }

  if (config.data instanceof FormData) {
    delete config.headers['Content-Type'];
  }

  return config;
});

export default api;
