import React from "react";
import "./Footer.css";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <hr />
        <div className="footer-content">
          <SocialMedia />
          <p>
            <small>&copy; 2022 All rights reserved </small> &ensp; made
            with&thinsp;
            <span>&hearts;</span> by Isaac
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
