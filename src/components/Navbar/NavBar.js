import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaBars } from 'react-icons/fa';
import "./NavBar.css";

const NavBar = () => {
  const active = 'active'

  return (
      <Navbar expand="lg" className="nav" >
        <NavLink exact to="/" className={'nav-brand'} activeClassName={active}>
            Cole Clark
        </NavLink>
        <Navbar.Toggle><FaBars color="#13EBA2"/></Navbar.Toggle> 
        <Navbar.Collapse >
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
  );
};
export default NavBar;
