import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <a
        href="https://github.com/98Suzanne/dictionary-react"
        className="github"
        target="blank"
      >
        Open source code
      </a>
      <div id="contact">
        <span>by </span>
        <a
          href="https://www.linkedin.com/in/svandinten/"
          className="linkedin"
          target="blank"
        >
          Suzanne van Dinten
        </a>
      </div>
    </div>
  );
}
