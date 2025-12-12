import axiosInstance from './axios';

export const paymentService = {
  // Create FAKE PayPal order
  createPayPalOrder: async (orderData) => {
    try {
      const response = await axiosInstance.post('/paypal/create-order', orderData);
      return response.data; // { orderID: "FAKE_ORDER_12345" }
    } catch (error) {
      console.error("Error creating FAKE PayPal order:", error.response?.data || error.message);
      throw error;
    }
  },

  // Capture FAKE PayPal order
  capturePayPalOrder: async (orderID, orderData) => {
    try {
      const response = await axiosInstance.post('/paypal/capture-order', {
        orderID,
        orderData,
      });
      return response.data; // { order: {}, paypalData: {} }
    } catch (error) {
      console.error("Error capturing FAKE PayPal order:", error.response?.data || error.message);
      throw error;
    }
  },
};
