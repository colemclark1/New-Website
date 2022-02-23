import React, { Component } from "react";
import { Row } from "../Utils/Utils"
import style from "./ProjectNew.module.css";
import { Collapse } from 'react-bootstrap'

const ProjectNew = (props) => {
  return (
    <>
    <div className={`${style.card} ${props.display ? style.active : ''}`} onClick={props.setDisplayIndex} >
        <img src={props.project.image} className={style.picture}></img>
        <div className={style.body}>
        <div className={style.title}>{props.project.title}</div>
        <div className={style.type}>{props.project.type}</div>
        </div>
    </div>
    
    {
    <Collapse in={props.display}>
    <div className={`${style.fullWidthCard} ${props.display ? style.active : ''}`}  >
      <div>{props.project.textShort}</div>


    </div>
    
    </Collapse>}

    </>
  );
};

export default ProjectNew;
