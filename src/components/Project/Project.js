import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Row, Col } from "../Utils";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Collapse } from "react-bootstrap";
import style from "../../CSS/Project.module.css";

const Project = (props) => {
  const [displayDetails, setDisplayDetails] = React.useState(false);
  return (
    <Col
      className={style.projectRow}
    >
      <Row onClick={() => setDisplayDetails(!displayDetails)}>
        <Col size={1} className={style.arrow} collapse={"xs"}>
          {!!displayDetails ? (
            <FaMinus size={"12px"} />
          ) : (
            <FaPlus size={"12px"} />
          )}
        </Col>
        <Col size={15} className={style.title}>
          {props.project.title}
        </Col>
        <Col className={style.type} size={5} collapse={"sm"}>
          {props.project.type}
        </Col>
      </Row>
      {
        <Collapse in={displayDetails}>
          <div className={style.details}>
            <Row>
              <Col size={1} collapse={"xs"}></Col>
              <Col size={15} className={style.textShort}>
                {props.project.textShort}
              </Col>
            </Row>
            {props.project.github && (
              <Row>
                <Col size={1} collapse={"xs"}></Col>
                <Col size={15}>
                  <Link
                    to={{ pathname: props.project.github }}
                    target="_blank"
                  >Github</Link>
                </Col>
              </Row>
            )}
            {props.project.deployed && (
              <Row>
                <Col size={1} collapse={"xs"}></Col>
                <Col size={15}>
                  {" "}
                  <Link
                    to={{ pathname: props.project.deployed }}
                    target="_blank"
                  >Project</Link>
                </Col>
              </Row>
            )}
          </div>
        </Collapse>
      }
    </Col>
  );
};

export default Project;
