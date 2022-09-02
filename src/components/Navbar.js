import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { useState } from "react";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  // set the state of the hamberger menu
  const [navbarOpen, setNavbarOpen] = useState(false);
  //   function for handling the click state of the hamberger menu(toggling the hamberger menu)
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  //function for closing the side bar once the navLinks is clicked
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav>
      <div classNameName="slider-container">
        <div className="slider">
          <p className="scroll_text">
            call +254 748923894 or email isaacmain72@gmail.com
          </p>
        </div>
      </div>
      {/* navigation bar logo */}
      <div className="navbar">
        <div className="logo">
          <img
            className="logo_img"
            src={require("../images/isaac-main.png")}
            alt="Isaac main a software developer base in Kenya"
          />
          <h2>CrownLinks</h2>
        </div>
        {/* navigation bar links */}
        {/* when the navbar hammerger menu is true the class will be ".menu_links.showMenu" else it will be empty */}
        <ul className={`menu_links ${navbarOpen ? "showMenu" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu} exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-me" onClick={closeMenu} exact>
              About Me
            </NavLink>
          </li>
          {/* solutions i offer to business and individuals */}
          <li>
            <NavLink to="/services" onClick={closeMenu} exact>
              Services
            </NavLink>
          </li>
          {/* projects */}
          <li>
            <NavLink to="/projects" onClick={closeMenu} exact>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-me" onClick={closeMenu} exact>
              Get In Touch
            </NavLink>
          </li>
        </ul>
        <div className="hire">
          <button className="hire_btn">
            <NavLink to="/hire-me" onClick={closeMenu} exact>
              Schedule A consultation
            </NavLink>
          </button>
        </div>
        <div className="menu_bar" onClick={handleToggle}>
          {navbarOpen ? (
            <ImCross className="cross-icon" />
          ) : (
            <GiHamburgerMenu className="hamberger-menu" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
