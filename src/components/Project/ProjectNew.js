import React, { Component } from "react";
import { Row } from "../Utils/Utils"
import style from "./ProjectNew.module.css";

const ProjectNew = (props) => {
  const [displayDetails, setDisplayDetails] = React.useState(false);
  return (
    <div className={style.card}>
        <img src={props.project.image} className={style.picture}></img>
        <div className={style.body}>
        <div className={style.title}>{props.project.title}</div>
        <div className={style.type}>{props.project.type}</div>
        </div>
    </div>
  );
};

export default ProjectNew;
