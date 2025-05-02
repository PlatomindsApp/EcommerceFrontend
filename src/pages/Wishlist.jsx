
import React from 'react';
import '../styles/Wishlist.scss';
import floralprintImg from '../assets/floralprintImg.png';
import denimjacketsImg from '../assets/denimjacketsImg.png';

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: 'Floral Printed Dress',
      price: 1299,
      image: floralprintImg,
    },
    {
      id: 2,
      name: 'Classic Denim Jacket',
      price: 2499,
      image: denimjacketsImg,
    },
    // Add more if needed
  ];

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>
      <div className="wishlist-items">
        {wishlistItems.map((item) => (
          <div className="wishlist-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="wishlist-details">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <div className="wishlist-actions">
                <button className="add-cart-btn">Add to Cart</button>
                <button className="remove-btn">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
