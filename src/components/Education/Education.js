import React from "react";
import EducationBlock from "./EducationBlock";
import { education } from "./EducationUtils";
import "../../CSS/Education.css";
import "../../CSS/HomePage.css";



const Education = () => {

  return (
    <div className="container-fluid">
      <div className="container col-11">
        <div className="row header page-headers">Education</div>
        {education.map((edu) => (
          <EducationBlock
            school={edu.school}
            image={edu.image}
            degree={edu.degree}
            graduation_time={edu.graduation_time}
            relevant_courses={edu.relevant_courses}
            activities={edu.activities}
          />
        ))}
      </div>
    </div>
  );
};
export default Education;
