import { paymentService } from '../services/paymentService';
import { useNavigate } from 'react-router-dom';

const PayPalButton = ({ orderData, onSuccess, onError }) => {
  const navigate = useNavigate();

  const handleFakePayment = async () => {
    try {
      // 1. Create fake PayPal order
      const createRes = await paymentService.createPayPalOrder({
        orderItems: orderData.orderItems,
        totalPrice: orderData.totalPrice,
      });

      const fakeOrderID = createRes.orderID;

      // 2. Capture fake PayPal order
      const captureRes = await paymentService.capturePayPalOrder(
        fakeOrderID,
        orderData
      );

      // 3. Redirect or return success
      if (captureRes.order) {
        onSuccess?.(captureRes.order);
        navigate('/order-success', { state: { order: captureRes.order } });
      }

    } catch (error) {
      console.error("Fake PayPal error:", error);
      onError?.(error);
    }
  };

  return (
    <button
      onClick={handleFakePayment}
      className="bg-blue-600 text-white py-2 px-4 rounded mt-4 w-full"
    >
      Pay with PayPal
    </button>
  );
};

export default PayPalButton;
