import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { productService } from '../services/productService';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setProducts(data.slice(0, 6)); // Show only 6 products on homepage
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,#bfdbfe,transparent_28%),radial-gradient(circle_at_80%_0%,#e9d5ff,transparent_30%),radial-gradient(circle_at_50%_80%,#bbf7d0,transparent_25%)]"></div>
        <div className="container mx-auto px-4 pt-16 pb-14 md:pt-20 md:pb-18 relative">
          <div className="flex flex-col items-center text-center space-y-6">
            <p className="inline-flex items-center space-x-2 bg-white border border-blue-100 text-sm px-3 py-1 rounded-full shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span>Fresh arrivals • Curated for you</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 max-w-3xl">
            Everything You Need<br></br> All in One Marketplace
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
            Discover quality products across every category with secure checkout and a smooth shopping experience.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-blue-500/25 transition"
              >
                <span>Shop Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 12h14m0 0-5-5m5 5-5 5" />
                </svg>
              </Link>
              <Link
                to="/checkout"
                className="inline-flex items-center space-x-2 bg-white hover:bg-blue-50 text-blue-700 px-6 py-3 rounded-lg font-semibold border border-blue-100 transition shadow-sm"
              >
                <span>Fast checkout</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Featured Products</h2>
        {loading ? (
          <div className="text-center py-12 text-slate-500">
            <div className="text-xl">Loading products...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
        {!loading && products.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <p>No products available at the moment.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;

