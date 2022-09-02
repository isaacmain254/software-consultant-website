import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  const [visibleApps, setVisibleApps] = useState("allApps");
  return (
    <div className="projects-container">
      <div className="project-into">
        <h3>Checkout my work</h3>
        <p>Take a look at what i have created and get inspired.</p>
      </div>

      <div className="display-options">
        <ul>
          <li>
            <button
              className="btn-apps"
              onClick={() => setVisibleApps("allApps")}
            >
              All
            </button>
          </li>
          <li>
            <button className="btn-apps">Web Applications</button>
          </li>
          <li>
            <button className="btn-apps">Mobile Appplications</button>
          </li>
        </ul>
      </div>
      <div className="projects-section">
        {visibleApps === "allApps" && (
          <div className="app-items">
            <ul>
              <div className="app-item">
                <li>
                  <img
                    className="card-img"
                    src={require("../images/website.jpg")}
                    alt="img"
                  />
                </li>
                <li>
                  <img
                    className="card-img"
                    src={require("../images/responsive-web-design.jpg")}
                    alt="img"
                  />
                </li>
                <li>
                  <img
                    className="card-img"
                    src={require("../images/ecommerce.png")}
                    alt="img"
                  />
                </li>
              </div>
            </ul>
          </div>
        )}
      </div>
      {/* above the footer */}
      <div className="start-now">
        <p>Satisfied with my work?</p>
        <p>
          Get in touch to get your project started and have your business
          oparate with the latest technologies.I got you covered in this.
        </p>
        <button className="start-now-btn">
          <Link to="/hire-me">Get Started Now</Link>
        </button>
      </div>
    </div>
  );
}

export default Projects;
