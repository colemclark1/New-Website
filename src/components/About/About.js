import React from "react";
import SkillBars from "../Utils/SkillBars/SkillBars";
import PictureRow from "../Utils/PictureRow";
import "./About.css";

const About = () => {
  return (
    <div className="container-fluid">
      <div className="container col-11">
        <div className="row header page-headers">
          About Me&nbsp;<i class="fa fa-commenting" aria-hidden="true"></i>
        </div>
        <div className="row offset-1">
          <p className="p-text">
            I am a highly motivated and skilled Advisory Software Engineer for IBM. 
            I graduated from Northeastern University in 2020 with a Master's degree in Computer Science. 
            Since then, I have worked on the Apps@Research team within IBM Research where we build internal web applications for researchers. 
            During this time I have worked on multiple projects with different tech stacks. I have always been good at learning new technologies on 
            the fly so that I can quickly start contributing to new projects.
            
            <br /> <br />
            While I have worked with many different languages and tools, my main experience the past few years has revolved around backend development 
            in Python/Flask, TypeScript, Node.js, GraphQL, REST APIs, GoLang and PostgreSQL. I have also been a key contributor to our CI/CD pipeline implementation 
            using Kuberenetes, Red Hat OpenShift, IBM Cloud, and Travis. On the frontend I have mainly worked with React, TypeScript, CSS, and SCSS.

            <br /><br />

            I enjoy challenges that involve analytical thinking and
            problem solving. I strive for excellence in everything
            that I do while looking for learning opportunities to help myself
            grow. My goal as a software engineer is to build awesome software
            applications that are fun to use and make life easier for everyone.
            <br /> <br />
            
            I previously worked as an IT
            consultant and IT auditor for 3 years, working with many different
            clients from a broad range of industries. I am a former Division I
            swimmer at the University of Delaware where I completed my
            undergraduate degree in management information systems. Outside of
            computer science I like being outdoors, exercising, listening to
            music, playing fantasy sports, and gaming.
          </p>
          <PictureRow />
        </div>
      </div>

      <div className="container col-11">
        <div className="row header page-headers">Language Proficiency</div>
        <div className="row skills-row">
          <div className="col-md-11 tint-bg offset-1">
            <SkillBars className="skills-text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
