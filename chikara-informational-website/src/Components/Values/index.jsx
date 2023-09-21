import React from "react";
import InformationCard from "./values";
import { faBalanceScale, faHandHoldingHeart, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Value() {
  return (
    <div className="info-section" id="values">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Our Values</span>
        </h3>
        <p className="info-description">

          Our values guide us in this mission, ensuring that we uphold the highest standards of integrity, compassion, and innovation.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Integrity"
          description="We maintain the highest standards of accuracy and integrity in collecting, analyzing, and reporting emissions data, ensuring trust and reliability."
          icon={faBalanceScale}
        />

        <InformationCard
          title="Sustainability"
          description="We prioritize environmental stewardship, committed to reducing carbon emissions and promoting sustainability in every aspect of our business."
          icon={faHandHoldingHeart}
        />

        <InformationCard
          title="Innovation"
          description="We continuously seek innovative solutions to monitor, reduce, and offset carbon emissions, staying at the forefront of technology and industry trends."
          icon={faLightbulb}
        />
      </div>
    </div>
  );
}

export default Value;
