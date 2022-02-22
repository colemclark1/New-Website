import React from "react";
import Project from "./Project";
import { projects } from "./ProjectUtils";
import { Grid } from "../Utils";

import style from "../../CSS/Projects.module.css"

const Projects = () => {
  return (
    <div className="container-fluid">
      <div className="container col-11 text-center">
        <div className="row header page-headers">Projects</div>
        <Grid className={style.projects}>
          {projects.map((project, index) => 
            <Project key={index} index={index} project={project} />
          )}
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
