// src/pages/About.jsx
import React from 'react';
import "../styles/About.scss";
import customerImg from '../assets/customerImg.png';
// Sample data for team members, company sections, and web app details
const aboutData = [
  {
    id: 1,
    name: "John Doe",
    role: "Founder & CEO",
    image:customerImg,
    description: "John is the visionary behind FashionFiesta, leading the company with a passion for fashion and technology.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Chief Marketing Officer",
    image: customerImg,
    description: "Jane heads the marketing team, creating impactful campaigns to reach our customers globally.",
  },
  {
    id: 3,
    name: "Emily Brown",
    role: "Head of Operations",
    image:customerImg,
    description: "Emily ensures smooth operations, making sure every order is delivered on time and to the highest standards.",
  },
  // Add more sections or team members as needed
];

// Data for about the web app (mission, vision, values, and features)
const appInfo = [
  {
    id: 1,
    title: "Our Mission",
    content: "Our mission is to provide high-quality, trendy fashion at affordable prices, making fashion accessible to everyone.",
  },
  {
    id: 2,
    title: "Our Vision",
    content: "We envision becoming the leading fashion retailer globally, with an unwavering commitment to innovation, sustainability, and customer satisfaction.",
  },
  {
    id: 3,
    title: "Our Values",
    content: "Integrity, innovation, sustainability, and customer-centricity are the core values that drive us every day.",
  },
  {
    id: 4,
    title: "App Features",
    content: "Our app offers features such as personalized recommendations, a secure shopping experience, easy navigation, and fast checkout to provide the best user experience.",
  },
];

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h2>About Us</h2>
        <p>Welcome to Ecom-website, your one-stop online fashion destination.</p>
      </div>

      <div className="app-info">
        {appInfo.map((item) => (
          <div className="app-info-section" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>

      <div className="team-section">
        <h3>Meet Our Team</h3>
        <div className="team-members">
          {aboutData.map((member) => (
            <div className="team-member" key={member.id}>
              <img src={member.image} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
