import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import "../styles/Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const cartCount = '';
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "❤️", path: "/wishlist", badge:'' },
    { name: "🛒 Cart", path: "/cart", badge: cartCount },
    { name: "📦 Orders", path: "/orders" },
    { name: "Login", path: "/login" },
  ];
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Ecom-website</div>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navItems.map(({ name, path, badge }) => (
            <li key={path}>
              <NavLink to={path} onClick={closeMenu} end={path === '/'}>
                {name}
                {badge > 0 && <span className="badge">{badge}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
