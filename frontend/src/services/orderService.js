import axiosInstance from './axios';

export const orderService = {
  createOrder: async (orderData) => {
    const response = await axiosInstance.post('/orders', orderData);
    return response.data;
  },

  getUserOrders: async () => {
    const response = await axiosInstance.get('/orders');
    return response.data;
  },

  getOrderById: async (id) => {
    const response = await axiosInstance.get(`/orders/${id}`);
    return response.data;
  },
};

