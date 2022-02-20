import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Main.css";

const Main = () => {
  return (
    <div className="main home-row">
      <div className="text-center tag first-column">
        <h1 className="cursive-font heading-size">Cole Clark</h1>
        <h3 className="regular-font">Software Engineer</h3>
        <div className="page-links">
          <NavLink to="/about" className="menu-item">
            About
          </NavLink>
          <NavLink to="/projects" className="menu-item">
            Projects
          </NavLink>
          <NavLink to="/experience" className="menu-item">
            Experience
          </NavLink>
          <NavLink to="/education" className="menu-item">
            Education
          </NavLink>
          <NavLink to="/contact" className="menu-item">
            Contact
          </NavLink>
        </div>
        <div className="justify-content-center row-links">
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
      <div className='fill second-column'>
        <img src={require("../images/Me.jpeg")}/>
      </div>
    </div>
  );
};

export default Main;
