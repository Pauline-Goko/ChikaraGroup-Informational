import React from "react";
import MissionProp from "./Props";
import "./style.css";

function About() {
  return (
    <div className="contain">
       <h3 className="about-title">
          <span>About Us</span>
        </h3>
    <div className="about-section" data-testid="about-section" id="about">
      <div className="about-image-content">
        <img src="/Assets/eco.jpg" alt="Nature" />
      </div>

      <div className="about-text-content">
      
        <p className="about-description">
          At Chikara, we are dedicated to making a positive impact on the environment and combating climate change. Our mission is to reduce carbon emissions and promote sustainability for a better future.
        </p>

        <MissionProp
          title="Mission"
          description="Our mission is to develop innovative solutions for tracking and reducing carbon emissions, empowering individuals and businesses to contribute to a greener planet."
        />

        <MissionProp
          title="Vision"
          description="A world with cleaner air and a healthier planet through sustainable practices and reduced carbon emissions."
        />
      </div>
    </div>
    </div>
  );
}

export default About;
