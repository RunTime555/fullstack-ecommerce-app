import express from 'express';
import { verifyFirebaseToken } from '../middlewares/authMiddleware.js';
import { createOrder, captureOrder } from '../controllers/paypalController.js';

const router = express.Router();

// Optional test route for assignment demo
router.get('/test', (req, res) => {
  res.json({
    message: "Fake PayPal API is working!",
    sampleOrderID: "FAKE_ORDER_123456"
  });
});

// Protected routes
router.use(verifyFirebaseToken);

router.post('/create-order', createOrder);
router.post('/capture-order', captureOrder);

export default router;
