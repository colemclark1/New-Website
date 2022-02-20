import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../CSS/NavBar.css";

const NavBar = ({ theme }) => {
  return (
    <div className="nav-bg">
      <Navbar expand="lg" className="nav">
        <Link to="/">
          <Navbar.Brand>
            <p className="nav-brand">Cole Clark</p>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/about" className="nav-link">
              <p className="nav-item">About</p>
            </Link>
            <Link to="/projects" className="nav-link">
              <p className="nav-item">Projects</p>
            </Link>
            <Link to="/experience" className="nav-link">
              <p className="nav-item">Experience</p>
            </Link>
            <Link to="/education" className="nav-link">
              <p className="nav-item">Education</p>
            </Link>
            <Link to="/contact" className="nav-link">
              <p className="nav-item">Contact</p>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
