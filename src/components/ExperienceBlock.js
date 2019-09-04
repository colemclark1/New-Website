import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../CSS/ExperienceBlock.css'

const ExperienceBlock = ({company, image, job_title, time, description, website_link, website_link_text}) =>
    <div className="m-4">
      <img src={image} className="ExpLogos col-2" alt=""/>
      <div className="ExperienceText col-9">
        <p className="Company">{company}</p>
        <p className="MyTitle">{job_title}</p>
        <p className="TimeFrame">{time}</p>
        <p className="JobDesc">{description}</p>
        <p className="CompanySite"><a href={website_link} target="_blank" rel="noopener noreferrer">{website_link_text}</a></p>
      </div>
    </div>

export default ExperienceBlock
