import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.scss";
import floralprintImg from '../assets/floralprintImg.png';
import denimjacketsImg from '../assets/denimjacketsImg.png';
import kurtiImg from '../assets/kurtiImg.png';

const ProductDetail = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Floral Dress",
      price: "₹999",
      image: floralprintImg,
      description: "Chic and breezy floral dress perfect for casual outings and summer vibes."
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: "₹1499",
      image: denimjacketsImg,
      description: "Classic denim jacket for everyday wear and layering."
    },
    {
      id: 3,
      name: "Cotton Kurti",
      price: "₹799",
      image: kurtiImg,
      description: "Elegant cotton kurti with traditional patterns and soft fabric."
    },
  ];

  return (
    <div className="product-detail-wrapper">
      {products
        .filter((product) => product.id === parseInt(id))
        .map((product) => (
          <div className="product-detail" key={product.id}>
            <div className="image-section">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="info-section">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h3>{product.price}</h3>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductDetail;
