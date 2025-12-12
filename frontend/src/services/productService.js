import axiosInstance from './axios';

export const productService = {
  getAllProducts: async () => {
    const response = await axiosInstance.get('/products');
    return response.data;
  },

  getProductById: async (id) => {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  },
};

