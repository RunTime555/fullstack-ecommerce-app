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


Built with ❤️ using MERN stack

