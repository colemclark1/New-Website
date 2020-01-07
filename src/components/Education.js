import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import NUSeal from '../images/NU_Mono.jpg'
import UDSeal from '../images/UD_Mono.jpg'
import '../CSS/Education.css'
import '../CSS/HomePage.css'
import NavBar from './NavBar'
import EducationBlock from './EducationBlock'

var education = [
  {
    "school": 'Northeastern University',
    "image": NUSeal,
    "degree": "Candidate for a Master of Science in Computer Science",
    "graduation_time": "Expected Graduation May 2020",
    "relevant_courses": "Algorithms, Machine Learning, Managing Software Development, Web Development, Foundations of AI, Object Oriented Design",
    'activities': 'Graduate Teaching Assistant for Discrete and Data Structures (Spring 2019) and Algorithms/Computer Systems (Summer 2019)'
  },
  {
    "school": 'University of Delaware',
    "image": UDSeal,
    "degree": "Bachelor of Science in Management Information Systems",
    "graduation_time": "May 2014",
    "relevant_courses": "Web Design, Database Design & Implementation, Systems Analysis and Implementation",
    'activities': 'Captain of Men’s Swim Team, Member of Student Athlete Advisory Council, Member of Sigma Nu Fraternity'
  }
]


class Education extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.onHomePage(false);
  }



render() {
  return (
    <div className='container-fluid'>
      <div className='container col-9'>
        <div className='row header page-headers'>Education</div>
      {education.map((edu, index) =>
        <EducationBlock   school={edu.school}
                          image={edu.image}
                          degree={edu.degree}
                          graduation_time={edu.graduation_time}
                          relevant_courses={edu.relevant_courses}
                          activities={edu.activities} />
                  )}
      </div>
    </div>
    )
  }
}
export default Education
