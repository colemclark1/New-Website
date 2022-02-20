import React from "react";
import "../CSS/Contact.css";

const Contact = () => {

  return (
    <div className="page">
      <div className="text-center page-headers">
        <a
          href="https://www.linkedin.com/in/coleclark1/"
          target="_blank"
          rel="noopener noreferrer"
          className="social mx-4"
        >
          <i className="fa fa-linkedin fa-3x"></i>
        </a>
        <a href="mailto:colemclark1@gmail.com" className="social mx-4">
          <i className="fa fa-envelope fa-3x"></i>
        </a>
        <a
          href="https://github.com/colemclark1"
          target="_blank"
          rel="noopener noreferrer"
          className="social mx-4"
        >
          <i className="fa fa-github-square fa-3x"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
