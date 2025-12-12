import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import Product from '../models/Product.js';

dotenv.config();

const products = [
  {
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Electronics',
    stock: 50,
    rating: 4.5,
    numReviews: 120,
  },
  {
    name: 'Smart Watch Pro',
    description: 'Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone connectivity.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'Electronics',
    stock: 30,
    rating: 4.7,
    numReviews: 89,
  },
  {
    name: 'Laptop Stand Adjustable',
    description: 'Ergonomic aluminum laptop stand with adjustable height and ventilation.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
    category: 'Accessories',
    stock: 75,
    rating: 4.3,
    numReviews: 156,
  },
  {
    name: 'Mechanical Keyboard RGB',
    description: 'Gaming mechanical keyboard with RGB backlighting and Cherry MX switches.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
    category: 'Electronics',
    stock: 40,
    rating: 4.6,
    numReviews: 203,
  },
  {
    name: 'Wireless Mouse Ergonomic',
    description: 'Comfortable wireless mouse with ergonomic design and long battery life.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
    category: 'Accessories',
    stock: 100,
    rating: 4.4,
    numReviews: 178,
  },
  {
    name: 'USB-C Hub 7-in-1',
    description: 'Multi-port USB-C hub with HDMI, USB 3.0, SD card reader, and power delivery.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500',
    category: 'Accessories',
    stock: 60,
    rating: 4.2,
    numReviews: 94,
  },
  {
    name: 'Portable SSD 1TB',
    description: 'Fast external SSD with USB-C connectivity, perfect for backups and file transfers.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500',
    category: 'Electronics',
    stock: 45,
    rating: 4.8,
    numReviews: 267,
  },
  {
    name: 'Webcam HD 1080p',
    description: 'High-definition webcam with auto-focus and built-in microphone for video calls.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1587825147138-346d5d7c5c5a?w=500',
    category: 'Electronics',
    stock: 35,
    rating: 4.5,
    numReviews: 142,
  },
  {
    name: 'Desk Organizer Set',
    description: 'Bamboo desk organizer with compartments for pens, papers, and office supplies.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500',
    category: 'Accessories',
    stock: 80,
    rating: 4.1,
    numReviews: 67,
  },
  {
    name: 'Monitor Stand with Drawer',
    description: 'Sturdy monitor stand with hidden drawer for storing office essentials.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500',
    category: 'Accessories',
    stock: 55,
    rating: 4.3,
    numReviews: 98,
  },
];

const seedProducts = async () => {
  try {
    await connectDB();

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    await Product.insertMany(products);
    console.log(`Seeded ${products.length} products`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();

