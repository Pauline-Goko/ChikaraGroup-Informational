import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Product() {
  return (
    <div className="ba-section" id="product">
      <div className="ba-image-content">
        <img src="/Assets/chikaradashboard.png" alt="Carbon Emissions" />
        <img src="/Assets/dashboard2.png" alt="dashboard"/>
      </div>

      <div className="ba-text-content">
    
        <h3 className="ba-title">
          <span>Our Product</span>
        </h3>
        <p className="ba-description">
        Our Portable Emissions Measurement System (PEMS) is designed for vehicles to accurately measure and track carbon emissions. Our PEMS empowers individuals and businesses to 
        take control of their carbon footprint and make environmentally conscious choices. This data is then sent to a dashboard for analysis.

          Key Features:
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#098081", fontSize: '32px' }}  data-testid="fa-circle-check-icon" className="icon" />  Accurate measurement of carbon dioxide (CO2) emissions in  vehicle exhaust gases.
        </p>
       
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#098081", fontSize: '32px' }}  data-testid="fa-circle-check-icon" className="icon" /> Real-time emissions monitoring for immediate feedback on environmental impact.
        </p>
       
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#098081", fontSize: '32px' }}  data-testid="fa-circle-check-icon" className="icon" /> Secure and easy-to-use attachment mechanism for various vehicle exhaust pipes.
        </p>
        
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#098081", fontSize: '32px' }}  data-testid="fa-circle-check-icon" className="icon" /> Compliance with emissions testing regulations and standards.
        </p>
      </div>
    </div>
  );
}

export default Product;
