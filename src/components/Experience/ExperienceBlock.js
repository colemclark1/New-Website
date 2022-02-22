import React from 'react'
import './ExperienceBlock.css'

const ExperienceBlock = ({company, image, job_title, time, description, website_link, website_link_text}) =>
    <div className="p-4 row">
      <div className='col-2'>
        <span class="helper"></span><img src={image} className="ExpLogos" alt=""/>
      </div>
      <div className="ExperienceText col-10">
        <div className='row align-items-center'>
          <p className="Company col-6">{company}</p>
          <p className="TimeFrame col-6 text-right">{time}</p>
        </div>
        <p className="MyTitle">{job_title}</p>
        <p className="JobDesc">{description}</p>
        <p className="CompanySite"><a href={website_link} target="_blank" rel="noopener noreferrer">{website_link_text}</a></p>
      </div>
    </div>

export default ExperienceBlock
