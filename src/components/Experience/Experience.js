import React from "react";
import ExperienceBlock from "./ExperienceBlock";
import { experience } from "./ExperienceUtils";
import "../../CSS/Experience.css";

const Experience = () => {

  return (
    <div className="container-fluid pb-4">
      <div className="container col-11">
        <div className="row header page-headers">Experience</div>
        {experience.map((exp, index) => (
          <ExperienceBlock
            company={exp.company}
            image={exp.image}
            job_title={exp.job_title}
            time={exp.time}
            description={exp.description}
            website_link={exp.website_link}
            website_link_text={exp.website_link_text}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
