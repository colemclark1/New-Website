import React from "react";
import ProjectNew from "./ProjectNew";
import { projects } from "./ProjectUtils";
import { Grid } from "../Utils/Utils";

import style from "./Projects.module.css"

const Projects = () => {
  return (
    <div className="container-fluid">
      <div className="container col-11 text-center">
        <div className="row header page-headers">Projects</div>
        <div className={style.projects}>
          {projects.map((project, index) => 
            <ProjectNew key={index} index={index} project={project} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
