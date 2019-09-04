import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ExperienceBlock from './ExperienceBlock'
import IMG_Schellman from '..\\images\\Schellman.svg';
import IMG_EY from '..\\images\\EY.svg';
import IMG_CAI from '..\\images\\CAI.jpg';
import IMG_MORSE from '..\\images\\dragon.svg'
var experience = [
  {
    "company": 'MORSE Corp',
    "image": IMG_MORSE,
    "job_title": "Software Engineer Co-op",
    "time": "June 2019 - Present",
    "description": "",
    'website_link': 'https://www.morsecorp.com',
    'website_link_text': 'www.morsecorp.com'
  },
  {
    "company": 'Schellman & Company LLC',
    "image": IMG_Schellman,
    "job_title": "Senior IT Auditor",
    "time": "May 2016 - August 2017",
    "description": "At Schellman & Company I worked on teams that performed various audits for a broad range of clients in different industries. I primarily worked with clients and evaluated the companies against SOC 1, SOC 2, HIPAA, and ISO compliance requirements. I was responsible for all aspects of the audit including process meetings, testing internal controls, document preparation, and delivering the consolidated audit findings report.",
    'website_link': 'http://www.schellmanco.com',
    'website_link_text': 'www.schellmanco.com'
  },
  {
    "company": 'Ernst and Young, LLP',
    "image": IMG_EY,
    "job_title": "IT Risk Assurance Staff",
    "time": "July 2014 - May 2016",
    "description": "I worked as an IT Risk and Assurance consultant for Ernst and Young in New York, NY. Primarily, I performed reviews and testing of IT general and application controls for SOX (Sarbanes-Oxley) audits. I worked with many clients in the financial services industry. I was also part of a team that prepared quarterly reconciliations of clients' general ledger and trial balances using a scripting language called Audit Command Language (ACL).",
    'website_link': 'http://www.ey.com',
    'website_link_text': 'www.ey.com'
  },
  {
    "company": 'Computer Aid Inc.',
    "image": IMG_CAI,
    "job_title": "Web Development Intern",
    "time": "June - August 2013",
    "description": "I helped Computer Aid transition from an old and outdated intranet, to a new, more responsive intranet. The intranet is used company-wide by employees and contains general information about the company. I worked in a team of 3 to complete this task. We used HTML and CSS and setup the new intranet using DotNetNuke, a content management tool.",
    'website_link': 'http://www.compaid.com',
    'website_link_text': 'www.compaid.com'
  }
]

class Experience extends Component {
  constructor(props) {
    super(props)

  }



render() {
  return (
    <div>
    {experience.map((exp, index) =>
      <ExperienceBlock  company={exp.company}
                        image={exp.image}
                        job_title={exp.job_title}
                        time={exp.time}
                        description={exp.description}
                        website_link={exp.website_link}
                        website_link_text={exp.website_link_text} />
                )}
    </div>


    )
  }
}
export default Experience
