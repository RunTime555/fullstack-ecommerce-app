# Full-Stack E-Commerce Website

A complete MERN stack e-commerce application with Firebase Authentication and PayPal payment integration.

## 🚀 Features

- **User Authentication**: Firebase Authentication (Email/Password)
- **Product Management**: Browse products, view details, search and filter
- **Shopping Cart**: Add/remove items, update quantities, persistent cart (localStorage)
- **Secure Checkout**: PayPal payment integration
- **Order Management**: View order history and order details
- **Responsive Design**: Modern UI with TailwindCSS

## 📁 Project Structure

```
/project-root
   /frontend          # React + Vite frontend
      /src
         /components  # Reusable components
         /pages       # Page components
         /context     # Context providers (Auth, Cart)
         /services    # API services
         /config      # Firebase config
   /backend           # Node.js + Express backend
      /src
         /config      # Database, PayPal, Firebase configs
         /controllers # Route controllers
         /models      # Mongoose models
         /routes      # API routes
         /middlewares # Auth middleware
         /utils       # Utility scripts (seed)
      server.js       # Express server entry point
```

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- React Router
- Context API
- Axios
- TailwindCSS
- Firebase Authentication
- PayPal JS SDK

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Firebase Admin SDK
- PayPal REST API

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- Firebase project
- PayPal Developer account

## 🔧 Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd e-commerce-website
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
PORT=5000
NODE_ENV=development

# MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority

# Firebase Admin SDK (Option 1: Service Account JSON as string)
FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"your-project-id",...}

# OR Option 2: Individual credentials
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project-id.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key\n-----END PRIVATE KEY-----\n"

# PayPal
PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_CLIENT_SECRET=your-paypal-client-secret
PAYPAL_MODE=sandbox

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=http://localhost:5000/api
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_PAYPAL_CLIENT_ID=your-paypal-client-id
```

## 🔥 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable **Authentication** → **Email/Password** sign-in method
4. Get your Firebase config:
   - Go to Project Settings → General
   - Scroll down to "Your apps" → Web app
   - Copy the config values to your frontend `.env` file
5. For backend authentication:
   - Go to Project Settings → Service Accounts
   - Click "Generate new private key"
   - Download the JSON file
   - Copy the entire JSON content to `FIREBASE_SERVICE_ACCOUNT_KEY` in backend `.env`
   - OR extract individual values (project_id, client_email, private_key)

## 🗄️ MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user (username and password)
4. Whitelist your IP address (or use `0.0.0.0/0` for development)
5. Get your connection string:
   - Click "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Add database name: `ecommerce`
   - Add to `MONGODB_URI` in backend `.env`

## 💳 PayPal Setup

1. Go to [PayPal Developer Dashboard](https://developer.paypal.com/)
2. Create a new app (Sandbox for testing)
3. Get your **Client ID** and **Secret**
4. Add to backend `.env`:
   - `PAYPAL_CLIENT_ID`
   - `PAYPAL_CLIENT_SECRET`
   - `PAYPAL_MODE=sandbox` (or `live` for production)
5. Add `VITE_PAYPAL_CLIENT_ID` to frontend `.env` (same Client ID)

### PayPal Sandbox Testing

- Use PayPal sandbox test accounts for testing
- Create test accounts in PayPal Developer Dashboard → Sandbox → Accounts
- Use these accounts to test payments

## 🚀 Running the Application

### Start Backend Server

```bash
cd backend
npm run dev
```

Server will run on `http://localhost:5000`

### Start Frontend Development Server

```bash
cd frontend
npm run dev
```

Frontend will run on `http://localhost:3000`

### Seed Products (Optional)

To populate the database with sample products:

```bash
cd backend
npm run seed
```

## 📝 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID

### Orders (Protected)
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order by ID
- `PUT /api/orders/:id/pay` - Update order payment status

### PayPal (Protected)
- `POST /api/paypal/create-order` - Create PayPal order
- `POST /api/paypal/capture-order` - Capture PayPal payment

## 🔐 Authentication Flow

1. User registers/logs in via Firebase Authentication
2. Frontend receives Firebase ID token
3. Token is sent in `Authorization: Bearer <token>` header for protected routes
4. Backend verifies token using Firebase Admin SDK
5. Request proceeds if token is valid

## 💰 Payment Flow

1. User adds items to cart
2. User proceeds to checkout and fills shipping address
3. User clicks PayPal button
4. Frontend calls `/api/paypal/create-order`
5. PayPal popup opens for payment
6. After payment, frontend calls `/api/paypal/capture-order`
7. Backend creates order in database and marks as paid
8. User is redirected to order success page

## 🧪 Testing

### Test User Flow

1. Register a new account
2. Browse products
3. Add items to cart
4. Proceed to checkout
5. Fill shipping address
6. Complete PayPal payment (use sandbox account)
7. View order success page

## 📦 Production Build

### Build Frontend

```bash
cd frontend
npm run build
```

Build files will be in `frontend/dist`

### Deploy Backend

- Deploy to services like Heroku, Railway, or AWS
- Update environment variables in production
- Set `PAYPAL_MODE=live` for production PayPal
- Update `FRONTEND_URL` to production URL

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Verify connection string format
- Check IP whitelist in MongoDB Atlas
- Verify database user credentials

### Firebase Authentication Issues
- Verify Firebase config in frontend `.env`
- Check Firebase project settings
- Ensure Email/Password auth is enabled

### PayPal Integration Issues
- Verify PayPal credentials in both frontend and backend
- Check PayPal mode (sandbox vs live)
- Verify PayPal app is active in developer dashboard

### CORS Issues
- Ensure backend CORS is configured correctly
- Check frontend API URL matches backend

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built with ❤️ using MERN stack

