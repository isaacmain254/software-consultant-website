import React from "react";
import "./Services.css";

// const cardData = [
//   {
//     id: 1,
//   },
// ];

const Services = () => {
  return (
    <div className="services">
      <div className="services-container">
        <div className="services-intro">
          <h3>Waht i do?</h3>
          <p>
            I deleliver the software that you need .I always strive to provide
            my clients with high end software solutions.The main offer is
            perfect services in every project.
          </p>
        </div>

        {/* cards  */}
        <div className="services-list">
          <ul className="service-item">
            <li>
              <img
                className="card-img"
                src={require("../images/web-development.png")}
                alt="img"
              />
              <h5>Search Engine Optmization</h5>
              <p>SEO help your page standout from a search result.</p>
            </li>
            <li>
              <img
                className="card-img"
                src={require("../images/web-development.png")}
                alt="img"
              />
              <h5>Web design and development</h5>
              <p>
                The client comes up with the design or look and i proceed in
                developing the application.
              </p>
            </li>
            <li>
              <img
                className="card-img"
                src={require("../images/web-development.png")}
                alt="img"
              />
              <h5>Digital marketing</h5>
              <p>
                With digital market your business can standout from a
                competitive market inch and also reach out many customers.
              </p>
            </li>
            <li>
              <img
                className="card-img"
                src={require("../images/web-development.png")}
                alt="img"
              />
              <h5>Mobile Development</h5>
              <p>
                I design and develop any type of mobile application that you
                require.I mostly develop cross platform aplication that can help
                you run your business online.
              </p>
            </li>
            <li>
              <img
                className="card-img"
                src={require("../images/web-development.png")}
                alt="img"
              />
              <h5>Domain registration</h5>
              <p>
                I will help you get the domain of your choice and also register
                it.
              </p>
            </li>
            <li>
              <img
                className="card-img"
                src={require("../images/web-development.png")}
                alt="img"
              />
              <h5>E-commerce website.</h5>
              <p>
                I can design you an ecommerce website for your online
                customer.with ecommerce website you can reach out a wide
                audience .
              </p>
            </li>
            <li>
              <img
                className="card-img"
                src={require("../images/web-development.png")}
                alt="img"
              />
              <h5>Progressive Web Apps</h5>
              <p>
                PWA are web applications that is cross platform; can be
                installed on any device and function like a native application.
              </p>
            </li>
          </ul>
        </div>
        {/* <div className="websites">
          <h3>Websites</h3>
          <h5>info sites , ecommerce , </h5>
          <p>
            I build websites of any complexity.from simple landing pages to high
            quality profitable eccomerce projects
          </p>
        </div>
        <div className="mobile-app">
          <h3>Mobile applications</h3>
          <h5>cross platform </h5>
          <p>perfectly work with cross platform solutions.</p>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
