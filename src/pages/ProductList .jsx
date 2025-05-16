import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductList.scss";
import floralprintImg from "../assets/floralprintImg.png";
import denimjacketsImg from "../assets/denimjacketsImg.png";
import kurtiImg from "../assets/kurtiImg.png";

const ProductList = () => {
  const products = [
    { id: 1, name: "Floral Dress", price: "₹999", image: floralprintImg },
    { id: 2, name: "Denim Jacket", price: "₹1499", image: denimjacketsImg },
    { id: 3, name: "Cotton Kurti", price: "₹799", image: kurtiImg }
  ];

  return (
    <div className="product-list">
      <h2>Explore Latest Styles</h2>
      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <Link to={`/product/${item.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
