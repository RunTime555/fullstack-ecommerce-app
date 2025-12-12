import express from 'express';
import { verifyFirebaseToken } from '../middlewares/authMiddleware.js';
import {
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrderToPaid,
} from '../controllers/orderController.js';

const router = express.Router();

// All routes are protected
router.use(verifyFirebaseToken);

router.post('/', createOrder);
router.get('/', getUserOrders);
router.get('/:id', getOrderById);
router.put('/:id/pay', updateOrderToPaid);

export default router;

