import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import style from "../CSS/Main.module.css";

import "../CSS/Contact.css";

const Contact = () => {
  return (
    <div className="page">
      <div className="text-center page-headers">
        <a
          href="https://www.linkedin.com/in/coleclark1/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${style.social} mx-4`}
        >
          <FaLinkedin size={"48px"} />
        </a>
        <a
          href="mailto:colemclark1@gmail.com"
          className={`${style.social} mx-4`}
        >
          <FaEnvelope size={"48px"} />
        </a>
        <a
          href="https://github.com/colemclark1"
          target="_blank"
          rel="noopener noreferrer"
          className={`${style.social} mx-4`}
        >
          <FaGithub size={"48px"} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
