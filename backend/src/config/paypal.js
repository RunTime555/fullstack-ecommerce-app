// 🔥 FAKE PAYPAL INTEGRATION FOR ASSIGNMENT
// No real API call – everything is simulated.

import dotenv from 'dotenv';
dotenv.config();

export const getPayPalAccessToken = async () => {
  // Return a fake token
  return "FAKE_PAYPAL_ACCESS_TOKEN_123456";
};

// Create a fake PayPal order
export const createPayPalOrder = async (orderData) => {
  console.log("FAKE PAYPAL: Creating order...");

  return {
    id: "FAKE_ORDER_" + Math.floor(Math.random() * 1000000),
    status: "CREATED",
    links: [
      {
        href: `${process.env.FRONTEND_URL}/order-success`,
        rel: "approve",
        method: "GET"
      }
    ],
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: orderData.total.toString()
        }
      }
    ]
  };
};

// Capture a fake PayPal order
export const capturePayPalOrder = async (orderID) => {
  console.log("FAKE PAYPAL: Capturing order:", orderID);

  return {
    id: orderID,
    status: "COMPLETED",
    payer: {
      name: { given_name: "Fake", surname: "User" }
    }
  };
};

export const PAYPAL_API_BASE = "FAKE_PAYPAL_API";
