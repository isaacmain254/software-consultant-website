import React from "react";
import { BsGithub, BsTwitter, BsFacebook } from "react-icons/bs";
import { FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import "./SocialMedia.css";

export default function SocialMedia() {
  return (
    <>
      <div className="social-media">
        <ul>
          <li>
            <a href="https://github.com/isaacmain254" target="__blank">
              <BsGithub />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/isaacmain3?t=nRruizvc6Qx5s5GziBW2U8Q&s=09"
              target="__blank"
            >
              <BsTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/isaac-maina-3611ba228/"
              target="__blank"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100081957310194"
              target="__blank"
            >
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="https://t.me/isaacmain" target="__blank">
              <FaTelegramPlane />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
