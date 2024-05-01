import api from '../api/api';

export const loginUser = async ({ email, password }) => {
  try {
    const response = await api.post('/api/auth/login', { email, password });
    const { accessToken } = response.data;
    return { token: accessToken };
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw new Error('Error al iniciar sesión');
  }
};
