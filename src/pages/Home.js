import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../components/SocialMedia";
import { FaAngleRight } from "react-icons/fa";
import "./Home.css";
const cardData = [
  {
    id: 1,
    title: "Design & Development",
    Image: "/web-development.png",
    content:
      "The client comes up with the design or look and i proceed in developing the application.",
  },
  {
    id: 2,
    title: "Search Engine Optimization",
    content: "SEO help your page standout from a search result.",
  },
  {
    id: 3,
    title: "Digital Marketing",
    content:
      "With digital market your business can standout from a competitive market inch and also reach out many customers.",
  },
];

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-intro">
          <div className="intro-left">
            <div className="intro-content">
              <h2>Professional Services & Solution</h2>
              <p>
                I offer software solution in <br />
                Mobile and Web Applications.
              </p>
              <p>Hi, i'm isaac a web and mobile application developer.</p>
              <p>Turning your ideas into market ready product.</p>
              {/* <p>
              Hi,i'm Isaac a software developer in love with javascript language
              and all the environment of javaScript technologies like React and
              React Native.I don't see problems ... i see solutions.
            </p> */}
              <p className="social-links">Find Me On :</p>
              <SocialMedia />

              <button className="intro-btn">
                <Link to="contact-me">Contact Me</Link>
              </button>
            </div>
          </div>

          <div className="intro-right">
            <img
              className="card-img"
              src={require("../images/code.jpg")}
              alt="img"
            />
          </div>
        </div>
      </div>

      <div className="about-me-intro">
        <div className="abit-about-me">
          <h3 className="about-heading">About Me</h3>
          <p>Specialized in web and mobile application development</p>
          <p>
            I have Specialized in web and mobile application development with
            the latest technologies.I'm always learning new stuff and more
            important in web and mobile development industry that changes too
            fast.I love alot to do with digital products and with development i
            find an interesting way of being part of that world.I'm passionate
            about comming up with software solutions that suits the business
            needs.My greatest strength is the ability to interprete clients
            requirement ,design , code and test the software.
          </p>
          <p>
            I love javaScript and all the environment of javascript technologies
            like Reactjs and React Native.I don't see problems ... i see
            solutions.{" "}
          </p>
          <p>
            <Link to="/about-me" className="aboutme-btn">
              More about me <FaAngleRight />
            </Link>
          </p>
        </div>
        <div className="about-me-image">
          <img
            src={require("../images/isaac-main.png")}
            alt="Isaac main a software developer base in Kenya"
          />
        </div>
      </div>
      <div className="what-i-do">
        <div className="intro-text">
          <h3>What can i do for your business?</h3>
          <p>
            I develop web and mobile application to help my clients run their
            business online and also interact with their customers on a single
            platform.
          </p>
        </div>
        <div className="my-offer">
          <ul>
            <div className="card">
              {cardData.map((card) => (
                <li key={card.id}>
                  <img
                    className="card-img"
                    src={require("../images/web-development.png")}
                    alt="img"
                  />
                  <h5>{card.title}</h5>
                  <p>{card.content}</p>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
      <div className="mobile-app">
        <img src={require("../images/mobile-app.png")} alt="" />
      </div>
      <div className="who-i-workfor">
        <h3 className="workfor-heading">How and who do i work for?</h3>
        <p className="workfor-intro">
          I work for individuals and business that need my services. I
          interprete the clients requirements and come up with a solution using
          the latest technologies.I'm the one to make your business software
          dream come true.
        </p>

        <div className="get-website-container">
          <div className="website">
            <img src={require("../images/website.jpg")} alt="" />
          </div>
          <div className="get-website">
            <h3>Why you need a website?</h3>
            <p>
              Internet presence is a necessary part of business development.We
              are living in time when internet and technologies have penetrated
              every home and decreasing the importance of offline sales and
              customer acquisition strategies.Whether you want to stand out in a
              competitive niche, take your business to the next level, reach a
              wider audience or expand your contact , you can't afford not to
              have a website.online presence is good for business development
              and growth.
            </p>
            <p>
              I have the expertise in developing a full-fledged application
              using various technologies and languages.Try me and you will love
              my work.
            </p>
          </div>
        </div>
      </div>
      <div className="get-started">
        <h3>Get started </h3>
        <p>Am here to help you solve your problems</p>
        <button className="get-started-btn">
          <Link to="/hire-me">Schedule A Consultation</Link>
        </button>
        <p>
          if you would like more information about me or my services contact me
          and i will reply as fast as possible.
        </p>
      </div>
    </div>
  );
};

export default Home;
