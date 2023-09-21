import React from "react";
import "./style.css";

function Hero() {
  return (
    <div className="section-container" id="home">
      <div className="hero-section">
        <video className="background-video" autoPlay loop muted>
          <source
            src="/Assets/mm.mp4" 
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="text-section">
          <div className="text-content">
            <h2 className="text-title">
              YOUR PARTNER IN SUSTAINABILITY
            </h2>
            <p className="text-description">
              At Chikara, we are committed to creating a sustainable future. Join us in our mission to reduce carbon emissions and make the world a better place.
            </p>
            <button className="text-appointment-btn" type="button">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
