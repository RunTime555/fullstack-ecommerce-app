import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const OrderSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  useEffect(() => {
    if (!order) {
      // Redirect if no order data
      navigate('/');
    }
  }, [order, navigate]);

  if (!order) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-6">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-green-600 mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-600">
            Thank you for your purchase. Your order has been confirmed.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
          <h2 className="text-xl font-bold mb-4">Order Details</h2>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Order ID:</span> {order._id}
            </p>
            <p>
              <span className="font-semibold">Total:</span> ${order.totalPrice.toFixed(2)}
            </p>
            <p>
              <span className="font-semibold">Payment Status:</span>{' '}
              <span className="text-green-600">
                {order.isPaid ? 'Paid' : 'Pending'}
              </span>
            </p>
            {order.shippingAddress && (
              <div className="mt-4">
                <p className="font-semibold mb-2">Shipping Address:</p>
                <p className="text-gray-700">
                  {order.shippingAddress.fullName}
                  <br />
                  {order.shippingAddress.address}
                  <br />
                  {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                  <br />
                  {order.shippingAddress.country}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            Continue Shopping
          </Link>
          <Link
            to="/"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;

