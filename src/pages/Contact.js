import React from "react";
import "./Contact.css";
import { BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const contacts = [
  {
    id: 1,
    content: "Machakos, Kenya",
    icons: GoLocation,
  },
  {
    id: 2,
    content: "+254 748 923894",
    icons: BsTelephone,
  },
  {
    id: 3,
    content: "isaacmain72@gmail.com",
    icons: AiOutlineMail,
  },
  {
    id: 4,
    content: "Open to freelance",
    icons: IoMdCheckmarkCircleOutline,
  },
];
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-head">
        <h2>Contact Me</h2>
        <p>
          Whether you want to get in touch , talk about a project collaboration,
          or just say hi, i would love to hear from you.Simply fill the form and
          send me an email.
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact details</h3>
          <p>Your questions and inquiries are all welcome.Lets connect</p>

          <ul>
            {contacts.map((e) => {
              const Icon = e.icons;
              return (
                <li key={e.id}>
                  <span className="icon">
                    <Icon />
                  </span>
                  {e.content}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="contact-form">
          <div className="form-content">
            <h3>Send a message</h3>
            <form action="" className="form">
              <label htmlFor="name">Name :</label>
              <br />
              <input type="text" id="name" placeholder="eg .jane" />
              <br />
              <label htmlFor="phone">Phone :</label>
              <br />
              <input type="tel" id="phone" placeholder="eg .+254 748 ..." />
              <br />
              <label htmlFor="email">Email :</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="eg. jane254@gmail.com"
              />
              <br />
              <label htmlFor="subject">Subject :</label>
              <br />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="eg . project collaboration"
              />
              <br />
              <label htmlFor="message">Message :</label>
              <br />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="message"
              ></textarea>
              <br />
              <button className="send-email" type="submit">
                <a href="mailto:isaacmain@gnail.com">Send Message</a>
              </button>
              {/* <input type="submit" value="Send Message" /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
