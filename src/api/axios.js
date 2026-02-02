import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://edu-aura-backend-t1du.vercel.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
