import { createPayPalOrder, capturePayPalOrder } from '../config/paypal.js';
import Order from '../models/Order.js';
import Product from '../models/Product.js';

// @desc    Create PayPal order (FAKE API)
// @route   POST /api/paypal/create-order
// @access  Private
export const createOrder = async (req, res) => {
  try {
    const { orderItems, totalPrice } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    }

    // Calculate total price from DB
    let calculatedTotal = 0;
    for (const item of orderItems) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(404).json({ message: `Product ${item.product} not found` });
      }
      calculatedTotal += product.price * item.quantity;
    }

    const orderData = {
      items: orderItems,
      total: totalPrice || calculatedTotal,
    };

    // Call fake PayPal function
    const paypalOrder = await createPayPalOrder(orderData);

    // Return only the order ID to frontend
    res.json({ orderID: paypalOrder.id });

  } catch (error) {
    console.error('Error creating FAKE PayPal order:', error);
    res.status(500).json({ message: 'Error creating PayPal order', error: error.message });
  }
};

// @desc    Capture PayPal order (FAKE API)
// @route   POST /api/paypal/capture-order
// @access  Private
export const captureOrder = async (req, res) => {
  try {
    const { orderID, orderData } = req.body;

    if (!orderID) {
      return res.status(400).json({ message: 'PayPal order ID is required' });
    }

    // Capture with fake PayPal
    const captureData = await capturePayPalOrder(orderID);

    if (captureData.status !== 'COMPLETED') {
      return res.status(400).json({ message: 'Payment not completed', data: captureData });
    }

    // Extract order details from frontend
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    } = orderData;

    // Create order in MongoDB
    const order = new Order({
      user: req.user.uid,
      orderItems,
      shippingAddress,
      paymentMethod: paymentMethod || 'FakePayPal',
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      isPaid: true,
      paidAt: new Date(),
      paymentResult: {
        id: captureData.id,
        status: captureData.status,
        email_address: "fakeuser@example.com", // Fake data
      },
      paypalOrderId: orderID,
    });

    // Update product stock
    for (const item of orderItems) {
      const product = await Product.findById(item.product);
      if (product) {
        product.stock -= item.quantity;
        await product.save();
      }
    }

    const createdOrder = await order.save();

    res.json({
      message: 'Order created and FAKE PayPal payment captured successfully',
      order: createdOrder,
      paypalData: captureData,
    });

  } catch (error) {
    console.error('Error capturing FAKE PayPal order:', error);
    res.status(500).json({ message: 'Error capturing PayPal order', error: error.message });
  }
};
