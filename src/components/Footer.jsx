import React from "react";
import { Link } from "react-router-dom"; // if you're using react-router for navigation
import "../styles/Footer.scss";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms" }
  ];

  const socialLinks = [
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram.com" }
  ];

  const aboutText =
    "We are a fashion eCommerce store offering a wide range of clothing, cosmetics, and jewelry to help you look and feel your best.";

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>{aboutText}</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links Section */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <ul>
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 Fashion eCommerce Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
