import React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Project from "./Project";
import { projects } from "./ProjectUtils";

const Projects = () => {
  return (
    <div className="container-fluid">
      <div className="container col-11 text-center">
        <div className="row header page-headers">Projects</div>
        <CardColumns className="change-font font-color-black mx-4 mt-4 col-12">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </CardColumns>
      </div>
    </div>
  );
};

export default Projects;
