import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const formatUserName = (user) => {
  if (!user) return '';
  if (user.displayName) return user.displayName;
  if (user.email) {
    const base = user.email.split('@')[0];
    return base.charAt(0).toUpperCase() + base.slice(1);
  }
  return 'Account';
};

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const { getCartItemsCount } = useCart();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="bg-slate-900/90 backdrop-blur text-white shadow-lg sticky top-0 z-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-semibold">
              EC
            </span>
            <span className="hidden sm:inline">E-Commerce Store</span>
          </Link>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link to="/" className="hover:text-blue-200 transition">
              Home
            </Link>
            <Link to="/products" className="hover:text-blue-200 transition">
              Products
            </Link>
            <Link to="/cart" className="hover:text-blue-200 transition relative">
              <span className="inline-flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 3h2l1 4h12l1.2-3.6A1 1 0 0 1 20.2 3H6" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 13h10l2-6H6" />
                  <circle cx="9" cy="19" r="1.4" />
                  <circle cx="17" cy="19" r="1.4" />
                </svg>
                <span>Cart</span>
              </span>
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>

            {currentUser ? (
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 16l4-4m0 0l-4-4m4 4H9" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 20H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" />
                  </svg>
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 3h4a2 2 0 0 1 2 2v3M9 21H5a2 2 0 0 1-2-2v-3" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 17l5-5m0 0l-5-5m5 5H9" />
                </svg>
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

