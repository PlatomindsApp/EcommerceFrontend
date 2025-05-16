// src/pages/Checkout.jsx
import React, { useState } from "react";
import "../styles/Checkout.scss";

const Checkout = () => {
  const shippingFields = [
    { name: "name", placeholder: "Full Name" },
    { name: "address", placeholder: "Address" },
    { name: "city", placeholder: "City" },
    { name: "postalCode", placeholder: "Postal Code" },
    { name: "phone", placeholder: "Phone Number" },
  ];

  const paymentMethods = [
    { label: "Cash on Delivery", value: "cod" },
    { label: "Online Payment", value: "online" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    paymentMethod: "cod",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        
        {/* Shipping Address Section */}
        <div className="form-section">
          <h3>Shipping Address</h3>
          {shippingFields.map((field) => (
            <input
              key={field.name}
              type="text"
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              required
            />
          ))}
        </div>

        {/* Payment Method Section */}
        <div className="form-section">
          <h3>Payment Method</h3>
          {paymentMethods.map((method) => (
            <label key={method.value}>
              <input
                type="radio"
                name="paymentMethod"
                value={method.value}
                checked={formData.paymentMethod === method.value}
                onChange={handleChange}
              />
              {method.label}
            </label>
          ))}
        </div>

        <button type="submit" className="place-order-btn">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
