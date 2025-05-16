import React from "react";
import "../styles/PromoBanner.scss";

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="promo-content">
        <h2>Deal of the Day</h2>
        
        <p>Flat 50% Off on Selected Clothing!</p>
        <button className="shop-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default PromoBanner;
