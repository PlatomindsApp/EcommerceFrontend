import React from 'react';
import '../styles/Home.scss';
import { Link } from 'react-router-dom';
import homeImg from '../assets/homeImg.png';
import cosmeticsImg from '../assets/cosmeticsImg.png';
import jewellaryImg from '../assets/jewellaryImg.png';
import footwareImg from '../assets/footwareImg.png'
import Slider from 'react-slick';
import PromoBanner from "../components/PromoBanner";
import Testimonials from "../components/Testimonials";

const categories = [
  { name: 'Clothing', path: 'clothing', image: homeImg },
  { name: 'Cosmetics', path: 'cosmetics', image: cosmeticsImg },
  { name: 'Jewelry', path: 'jewelry', image: jewellaryImg },
  
  { name: 'Footwear', path: 'footwear', image: footwareImg },
  { name: 'Accessories', path: 'accessories', image: cosmeticsImg },
  { name: 'Bags', path: 'bags', image: jewellaryImg },
];

const featuredProducts = [
  { name: 'Stylish Denim Jacket', image: homeImg },
  { name: 'Elegant Lipstick Set', image: homeImg },
  { name: 'Gold Plated Necklace', image: homeImg },
  { name: 'Fashionable Sunglasses', image: homeImg },
];

const Home = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,  // Set to 4 cards per slide
    slidesToScroll: 1,
    dots: true,  // Show dots for pagination
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="home">
      <section className="hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/shopping.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-text">
          <h1>Unleash Your Style</h1>
          <p>Shop the trendiest fashion, cosmetics, and jewelry</p>
          <Link to="/products" className="btn">Shop Now</Link>
        </div>
      </section>

      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-slider">
          <Slider {...sliderSettings}>
            {categories.map((cat) => (
              <div key={cat.name}>
                <Link to={`/products/${cat.path}`} className="category-card">
                  <img src={cat.image} alt={cat.name} />
                  <h3>{cat.name}</h3>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="featured">
        <h2>Featured Deals</h2>
        <div className="product-slider">
          <Slider {...sliderSettings}>
            {featuredProducts.map((item, index) => (
              <div key={index}>
                <div className="product-card">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <PromoBanner/>
    <Testimonials/>
    <section className="featured">
        <h2>Featured Deals</h2>
        <div className="product-slider">
          <Slider {...sliderSettings}>
            {featuredProducts.map((item, index) => (
              <div key={index}>
                <div className="product-card">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
    
  );
};
export default Home;
