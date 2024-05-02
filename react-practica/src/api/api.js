import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';
console.log('API_BASE_URL:', API_BASE_URL);
const api = axios.create({
  baseURL: API_BASE_URL,
});

export const setAuthorizationHeader = (token) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeAuthorizationHeader = () => {
  delete api.defaults.headers.common['Authorization'];
};

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getAdverts = async () => {
  try {
    const response = await api.get('api/v1/adverts');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default api;
