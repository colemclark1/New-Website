import React from "react";
import Project from "./Project";
import { projects } from "./ProjectUtils";
import { Grid } from "../Utils/Utils";

import style from "./Projects.module.css";

const Projects = () => {
  const [displayIndex, setDisplayIndex] = React.useState(null);

  const setDisplay = (index) => {
    if (index === displayIndex) {
      setDisplayIndex(null);
    } else {
      setDisplayIndex(index);
    }
  };

  // Sorting by year (newest first) and then by title (alphabetical)
  projects.sort((a, b) => {
    if (a.year > b.year) {
      return -1
    } else if (a.year == b.year) {
      if (a.title > b.title) {
        return 1
      } else {
        return -1
      }
    }
    return 1
  })

  return (
    <div className="container-fluid">
      <div className="container col-11">
        <div className="row header page-headers">Projects</div>
        <div className={style.projects}>
          {projects.map((project, index) => (
            <Project
              key={index}
              display={index === displayIndex}
              setDisplayIndex={() => setDisplay(index)}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
