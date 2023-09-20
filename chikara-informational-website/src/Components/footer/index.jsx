import React from "react";
import "./style.css";
import {  FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
   
   

    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="ft-info">
                    <div className="ft-info-p1">
                        <p className="ft-list-title">More about the company</p>
                       
                        <p className="ft-description">
                            At Chikara eco, we are on a mission to create a sustainable world. Our commitment is to reduce carbon emissions and promote eco-friendly practices that lead to a greener future.
                        </p>
                    </div>

                  
                </div>


                <div className="ft-list">
                    <ul className="ft-list-items">
                        <li>
                            <p className="ft-list-title">Quick Links</p>
                        </li>
                        <li>
                            
                            <Link to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500}>About</Link>
                        </li>
                        <li>
                            <Link to="product" smooth={true} duration={500}>Products</Link>
                        </li>
                        <li>
                            <Link to="team" smooth={true} duration={500}>Team</Link>
                        </li>
                    </ul>
                </div>

                <div className="ft-list" id="contact">
                    <ul className="ft-list-items ">
                        <li>
                            <p className="ft-list-title">Talk To Us</p>
                        </li>
                        <li>
                            <a href="mailto:support@chikara.com">support@chikara.com</a>
                        </li>
                        <li>
                            <a href="mailto:info@chikara.com">info@chikara.com</a>
                        </li>
                        <li>
                            <a href="tel:+254754545252">+2547 5454 5252</a>
                        </li>
                        <li>
                            <a href="tel:+254723266232">+2547 2326 6232</a>
                        </li>
                       
                    <ul className="ft-social-links">
                  
                  <li>
                      <a
                          href="https://www.facebook.com/"
                          title="Facebook"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          <FaFacebook size={24} />
                      </a>
                  </li>
                  <li>
                      <a
                          href="https://twitter.com/"
                          title="Twitter"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          <FaTwitter size={24} />
                      </a>
                  </li>
                  <li>
                      <a
                          href="https://www.instagram.com/"
                          title="Instagram"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          <FaInstagram size={24} />
                      </a>
                  </li>
              </ul>
                    </ul>
                </div>
            </div>

            <div className="ft-copyright">
                <p>© 2023 Chikara. All rights reserved.</p>

            </div>
        </footer>
    );
}

export default Footer;
