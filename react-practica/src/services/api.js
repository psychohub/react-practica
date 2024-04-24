import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Interceptor para agregar el token de autenticación a las peticiones
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAdverts = async () => {
  try {
    const response = await api.get('/adverts');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
