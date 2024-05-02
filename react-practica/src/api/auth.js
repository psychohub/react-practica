import api from '../api/api';

export const loginUser = async ({ email, password }) => {
  try {
    const response = await api.post('/api/auth/login', { email, password });
    if (response.status >= 200 && response.status < 300) {
      return { accessToken: response.data.accessToken };
    } else {
      const error = new Error('Error en la respuesta del servidor');
      error.response = response;
      throw error;
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
    throw error;
  }
};
