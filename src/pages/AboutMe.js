import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgShapeRhombus } from "react-icons/cg";
import { SiDjango } from "react-icons/si";
import { FaHtml5, FaCss3, FaReact, FaPython, FaAndroid } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
import "./About.css";

const Tech = [
  {
    id: 1,
    type: "web",
    name: "Django",
    icon: SiDjango,
  },
  {
    id: 2,
    type: "web",
    name: "javscript",
    icon: DiJavascript1,
  },
  {
    id: 3,
    type: "mobile",
    name: "React Native",
    icon: TbBrandReactNative,
  },
  {
    id: 4,
    type: "web",
    name: "HTML",
    icon: FaHtml5,
  },
  {
    id: 5,
    type: "web",
    name: "CSS",
    icon: FaCss3,
  },
  {
    id: 6,
    type: "web",
    name: "React",
    icon: FaReact,
  },
  {
    id: 7,
    type: "web",
    name: "Python",
    icon: FaPython,
  },
];

function Web() {
  return (
    <div>
      <ul>
        {Tech.filter((tech) => tech.type === "web").map((tech) => {
          const Icons = tech.icon;
          return (
            <div className="tech">
              <li key={tech.id}>
                <span>
                  <Icons />
                </span>
                <p>{tech.name}</p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
function Mobile() {
  return (
    <div>
      <ul>
        {Tech.filter((tech) => tech.type === "mobile").map((tech) => {
          const Icons = tech.icon;
          return (
            <div className="tech">
              <li key={tech.id}>
                <span>
                  <Icons />
                </span>
                <p>{tech.name}</p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

const About = () => {
  const [visibleItem, setVisibleItem] = useState("web");
  return (
    <div className="about-me">
      <div className="about-container">
        <div className="isaac-img">
          <img src={require("../images/isaac-main.png")} alt="" />
        </div>
        <div className="more-about-me">
          <h3>Isaac Maina</h3>
          <p>
            Hello! My name is Isaac Maina a software developer based in
            kenya.I'm a computer science student with more interest in the
            programming world.I think programming is something magical because
            you can develop whatever you imagine and that's the coolest part of
            it. I love working with components because they divide a difficult
            task into chunks and i think that's the reason i've developed
            interest in ReactJs .
          </p>
          <p>
            I have more than 3 years of experience working with code as a
            programmer.Started my journey in development as a frontend developer
            but along the way i adopted other skills like backend and mobile
            development.
          </p>
          <p>
            one of my strengths is that i'm always learning new stuffs and
            always looking for ways to improve the performance of the things i
            have developed.
          </p>
        </div>
      </div>
      <div className="skills-tools">
        <div className="skills-head">
          <h3>Skills and tools</h3>
          <p>
            I have expertise in a number of technologies and programming
            languages.
          </p>
        </div>
        <ul>
          <li>
            <button className="tech-btn" onClick={() => setVisibleItem("web")}>
              Web development
            </button>
          </li>
          <li>
            <button
              className="tech-btn"
              onClick={() => setVisibleItem("mobile")}
            >
              Mobile development
              <FaAndroid color="green" />
            </button>
          </li>
        </ul>
        <div className="technologies">
          {visibleItem === "mobile" && (
            <div>
              <Mobile />
            </div>
          )}
          {visibleItem === "web" && (
            <div>
              <Web />
            </div>
          )}
        </div>
      </div>
      <div className="work-with-me">
        <div className="work-container">
          <h3>Why you should work with me?</h3>
          {/* the list can start with icons */}
          <ul>
            <li>
              <CgShapeRhombus color="blue" /> I provide great services by
              employing my high engineering skills to all who is looking for it.
            </li>
            <li>
              <CgShapeRhombus color="blue" /> I complete the work on time ,
              completely fulfilling and exceeding clients' expectations.
            </li>
            <li>
              <CgShapeRhombus color="blue" /> I don't go over the budget.
            </li>
            {/* the right side having a circle with rings "98% cost effectiveness" */}
            <button className="discuss-btn">
              <Link to="/hire-me">Discuss project</Link>
            </button>
          </ul>
        </div>
        <div className="work-stats">
          <div className="projcts">
            <p>
              20+
              <br />
              projects
            </p>
          </div>
          <div className="solutions">
            <p>
              15+ <br />
              Solutions
            </p>
          </div>
          <div className="complete">
            <p>
              90% <br />
              Complete projects
            </p>
          </div>
        </div>
      </div>

      {/* above the footer */}
      <div className="get-in-touch">
        <p>Get in touch. Let's talk about your project</p>
        <p>
          Hello there, do you have an interesting project that you think i can
          add value to?? Or talk about sofware development, feel free to contact
          me.
        </p>
        <div className="btns">
          <button className="cont-btn">
            <Link to="/contact-me">Contact Me</Link>
          </button>
          <button className="cont-btn">
            <a href="tel:+254748923894">Call Now: 0748923894</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
