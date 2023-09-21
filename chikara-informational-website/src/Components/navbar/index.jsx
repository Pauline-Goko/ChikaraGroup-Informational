import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Navbar({ isHome }) {
  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
  
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 850); 
    };


    window.addEventListener("resize", checkIsMobile);

 
    checkIsMobile();

  
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const links = [
    { label: "Home", href: "home" },
    { label: "About", href: "#about" },
    { label: "Values", href: "#values" },
    { label: "Product", href: "#product" },
    { label: "Team", href: "#team" },
  ];

  const handleLinkClick = () => {
    setNav(false);
  };

  return (
    <div className={`navbar-section ${isHome ? "home" : ""}`}>
     <h1 className="navbar-title">
  <img
    src="/Assets/logo.png" 
    alt="Your Logo"
    className="navbar-logo"
  />
</h1>

      {isMobile ? (
       
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar-close">
            <FontAwesomeIcon icon={nav ? faTimes : faBars} className="hamb-icon" />
          </div>

          <div className="mobile-navbar-content">
            <ul className={`mobile-navbar-links ${nav ? "show-links" : ""}`}>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} onClick={handleLinkClick}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
  
        <ul className={`navbar-items ${nav ? "open-nav" : ""}`}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="navbar-links" onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}

 
      {isMobile && (
        <div className="mobile-nav">
          <FontAwesomeIcon
            icon={nav ? faTimes : faBars}
            onClick={openNav}
            className="hamb-icon"
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
