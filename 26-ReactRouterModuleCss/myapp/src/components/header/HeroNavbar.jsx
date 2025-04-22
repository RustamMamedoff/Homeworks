import React from "react";
import "./HeroNavbar.css"; 

const HeroNavbar = () => {
  return (
    <div className="hero-container">
      <nav className="navbar">
        <div className="logo">Start Bootstrap</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      
      <div className="hero-content">
        <h2>Present your business in a whole new way</h2>
        <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HeroNavbar;
