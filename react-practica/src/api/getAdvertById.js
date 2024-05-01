export const getAdvertById = async (id) => {
    try {
      const response = await api.get(`/adverts/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };