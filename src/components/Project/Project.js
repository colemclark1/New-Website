import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Badge from "react-bootstrap/Badge";
import "../../CSS/Projects.css";

const Project = (props) => {
  const [displayDetails, clickDetails] = React.useState(false);

  return (
    <div className="outer-card projects-font">
      <Card className="cards-change-font " bg="light" text="dark">
        <div className="row justify-content-center">
          <Card.Header className="mb-0 col-12">
            <Card.Title className="row justify-content-center">
              {props.project.title}
            </Card.Title>
          </Card.Header>
        </div>
        <Card.Img
          variant="top"
          src={props.project.image}
          className="images"
          style={{ minHeight: "10rem", maxHeight: "20rem" }}
        />
        <Card.Body>
          <div className="row justify-content-center">
            {props.project.deployed !== "" && (
              <Card.Link href={props.project.deployed}>
                Deployed Project
              </Card.Link>
            )}
          </div>
          <div className="row justify-content-center">
            {props.project.github !== "" && (
              <Card.Link href={props.project.github}>
                Project on Github
              </Card.Link>
            )}
          </div>
          <div className="row justify-content-center">
            {props.project.kaggle !== "" && (
              <Card.Link href={props.project.github}>
                Project Data on Kaggle
              </Card.Link>
            )}
          </div>
          <div className="row justify-content-center wrap-text">
            {props.project.tags.map((tag, i) => (
              <h6 key={i}>
                <Badge className="mr-2 mt-1" pill variant="primary">
                  {tag}
                </Badge>
              </h6>
            ))}
          </div>

          <div className="row justify-content-center">
            {!displayDetails && (
              <button
                onClick={() => clickDetails(!displayDetails)}
                aria-expanded={false}
                className="btn details-button justify-content-center"
              >
                Details <i className="fa fa-angle-double-down"></i>
              </button>
            )}

            {displayDetails && (
              <button
                onClick={() => clickDetails(!displayDetails)}
                aria-expanded={true}
                className="btn details-button justify-content-center"
              >
                <i className="fa fa-angle-double-up"></i>
              </button>
            )}
          </div>
        </Card.Body>
        <Collapse in={displayDetails}>
          <Card.Text>{props.project.textShort}</Card.Text>
        </Collapse>
      </Card>
    </div>
  );
};

export default Project;
