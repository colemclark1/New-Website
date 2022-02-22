import React from "react";
import { NavLink } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Grid, Row, Col } from "./Utils";

import style from "../CSS/Main.module.css";


const Main = () => {
  return (
    <Grid className={style.main}>
      <Row>
        <Col size={1} className={style.centerNav}>
          <h1 className={style.name}>Cole Clark</h1>
          <h3 className={style.jobTitle}>Software Engineer</h3>
          <div className={style.pageLinks}>
            <NavLink to="/about" className={style.menuItem}>
              About
            </NavLink>
            <NavLink to="/projects" className={style.menuItem}>
              Projects
            </NavLink>
            <NavLink to="/experience" className={style.menuItem}>
              Experience
            </NavLink>
            <NavLink to="/education" className={style.menuItem}>
              Education
            </NavLink>
            <NavLink to="/contact" className={style.menuItem}>
              Contact
            </NavLink>
          </div>
          <div className={style.rowLinks}>
            <a
              href="https://www.linkedin.com/in/coleclark1/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${style.social}`}
            >
              <FaLinkedin size={"48px"}/>
            </a>
            <a
              href="mailto:colemclark1@gmail.com"
              className={`${style.social}`}
            >
              <FaEnvelope size={"48px"} />
            </a>
            <a
              href="https://github.com/colemclark1"
              target="_blank"
              rel="noopener noreferrer"
              className={`${style.social}`}
            >
              <FaGithub size={"48px"}/>
            </a>
          </div>
        </Col>
        <Col size={2} className={style.fill} collapse={"sm"}>
          <img
            src={`${process.env.REACT_APP_COS}/Me.jpeg`
            }
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default Main;
