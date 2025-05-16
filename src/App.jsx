// src/App.jsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import './App.scss';
import './styles/variables.scss'; // Global variables
import './styles/Navbar.scss'; // Navbar-specific styles
import Footer from "./components/Footer";
import ProductList from "./pages/ProductList ";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import OrderHistory from "./pages/OrderHistory";
import NotFound from "./pages/NotFound";
import LoginForm from "./pages/LoginForm";
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout/>} /> 
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/orders" element={<OrderHistory/>} />
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
