// adverts.js
import api from '../api/api';

export const getAdverts = async () => {
  try {
    const response = await api.get('/adverts');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createAdvert = async (advertData) => {
  try {
    const response = await api.post('/adverts', advertData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAdvertById = async (id) => {
  try {
    const response = await api.get(`/adverts/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
