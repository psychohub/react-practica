// adverts.js
import api from '../api/api';

export const getAdverts = async () => {
  try {
    const response = await api.get('/api/v1/adverts');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createAdvert = async (advertData) => {
  try {
    const response = await api.post('/api/v1/adverts', advertData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAdvertById = async (id) => {
  try {
    const response = await api.get(`/api/v1/adverts/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
