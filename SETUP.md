# Quick Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 2. Configure Environment Variables

**Backend `.env` file** (create in `backend/` directory):
```env
PORT=5000
MONGODB_URI=your-mongodb-connection-string
FIREBASE_SERVICE_ACCOUNT_KEY=your-firebase-service-account-json
PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_CLIENT_SECRET=your-paypal-secret
PAYPAL_MODE=sandbox
FRONTEND_URL=http://localhost:3000
```

**Frontend `.env` file** (create in `frontend/` directory):
```env
VITE_API_URL=http://localhost:5000/api
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_PAYPAL_CLIENT_ID=your-paypal-client-id
```

### 3. Seed Database (Optional)

```bash
cd backend
npm run seed
```

This will populate your database with 10 sample products.

### 4. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### 5. Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📝 Next Steps

1. Register a new account
2. Browse products
3. Add items to cart
4. Complete checkout with PayPal (use sandbox account)

## 🔧 Troubleshooting

- **MongoDB Connection Error**: Check your connection string and IP whitelist
- **Firebase Auth Error**: Verify Firebase config and enable Email/Password auth
- **PayPal Error**: Ensure PayPal credentials are correct and app is active
- **CORS Error**: Check that backend CORS is configured and frontend URL matches

For detailed setup instructions, see [README.md](./README.md)

