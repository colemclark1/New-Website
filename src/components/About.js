import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import '../CSS/About.css'
import Slideshow from './Slideshow'
import NavBar from './NavBar'
import SkillBars from './SkillBars'
import PictureRow from './PictureRow'
import Experience from './Experience'
import Education from './Education'
import IMG_Schellman from '..\\images\\Schellman.jpg';
import IMG_EY from '..\\images\\EY.jpg';
import IMG_CAI from '..\\images\\CAI.jpg';


class About extends Component {
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
        <div className='row header page-headers'>About Me&nbsp;<i class="fa fa-commenting" aria-hidden="true"></i></div>
          <div className='row offset-1'>
              <p className='p-text'>I am a highly motivated and skilled computer science graduate student at Northeastern University, specializing in artificial intelligence and software engineering. I have extensive knowledge in multiple programming languages, including Java, Python, C, and JavaScript. I enjoy challenges that involve analytical thinking, problem solving, and math. I strive for excellence in everything that I do while looking for learning opportunities to help myself grow. My goal as a software engineer is to build awesome software applications that are fun to use and make life easier for everyone.<br/> <br/>

                While pursuing my master's degree at Northeastern, I have served as a Teaching Assistant (TA) for two courses, <i>Discrete and Data Structures</i> and <i>Algorithms/Computer Systems</i>. I previously worked as an IT consultant and IT auditor for 3 years, working with many different clients from a broad range of industries. I am a former Division I swimmer at the University of Delaware where I completed my undergraduate degree in management information systems. Outside of computer science I like being outdoors, exercising, listening to music, playing fantasy sports, and gaming.</p>
              <PictureRow/>
            </div>
          </div>

          <div className='container col-9'>
            <div className='row header page-headers'>Language Proficiency</div>
          <div className='row skills-row'>
            <div className='col-md-11 tint-bg offset-1'>
              <SkillBars className='skills-text'/>
            </div>
          </div>
          </div>
        </div>

    )
  }
}
export default About
