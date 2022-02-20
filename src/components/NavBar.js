import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../CSS/NavBar.css";

const NavBar = () => {
  const active = 'active'

  return (
    <div className="nav-bg">
      <Navbar expand="lg" className="nav">
        <NavLink exact to="/" className={'nav-brand'} activeClassName={active}>
            Cole Clark
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/about" className="menu-item" activeClassName={active}>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
