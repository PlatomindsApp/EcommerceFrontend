import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.scss';
import floralprintImg from '../assets/floralprintImg.png';
import denimjacketsImg from '../assets/denimjacketsImg.png';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Classic Denim Jacket",
      price: 2499,
      quantity: 1,
      image: denimjacketsImg,
    },
    {
      id: 2,
      name: "Floral Printed Dress",
      price: 1299,
      quantity: 2,
      image: floralprintImg,
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>My Cart</h2>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h3>Total: ₹{total}</h3>
        <Link to="/checkout">
          <button className="checkout-btn">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
