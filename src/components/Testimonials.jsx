import React from "react";
import Slider from "react-slick";
import "../styles/Testimonial.scss";
import customerImg from '../assets/customerImg.png'
const testimonials = [
  {
    name: "Aanya Deshmukh",
    review: "The latest summer collection is a total game-changer! Got so many compliments on my outfits.",
    image: customerImg,
    rating: 5,
  },
  {
    name: "Megha Verma",
    review: "Stylish, affordable, and top-notch quality. Love that I can find both casual and party wear here!",
    image: customerImg,
    rating: 4,
  },
  {
    name: "Pooja Iyer",
    review: "My go-to destination for trendy fits. The new arrivals section keeps me coming back every week!",
    image: customerImg,
    rating: 5,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="testimonials">
      <h2>What Our Customers Say</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.image} alt={t.name} />
            <p className="review">"{t.review}"</p>
            <div className="rating">
              {Array.from({ length: t.rating }, (_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <h4>{t.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
