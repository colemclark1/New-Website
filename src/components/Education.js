import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import NUSeal from '../images/NU_Mono.jpg'
import UDSeal from '../images/UD_Mono.jpg'
import '../CSS/Education.css'
import '../CSS/HomePage.css'
import NavBar from './NavBar'


class Education extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.onHomePage(false);
  }


render() {
  return (
    <div>
        <div className='container education-font'>
          <table className='table table-hover table-striped table-dark full-table'>
            <tbody>
          <tr className='edu-hover'>
            <td>
          <div className='row edu-item'>
          <div className='col-lg-2'>
            <img src={NUSeal} className='edu-image'></img>
          </div>
          <div className='col-lg-10 edu-text'>
          <div className='row justify-content-left'>
            <h3 className='col-lg-8 col-md-6'>Northeastern University</h3>
            <h6 className='col-lg-4 col-md-6 text-right'>Expected Graduation May 2020</h6>
          </div>
          <div className='row'>
            <h6 className='col-12'><i>Candidate for a Master of Science in Computer Science</i></h6>
          </div>
          <div className='row'>
            <p className='col-lg-3 col-md-4 col-sm-6'>Relevant Courses</p>
            <p className='col-lg-9 col-md-8 col-sm-6'>Algorithms, Machine Learning, Managing Software Development, Web Development, Foundations of AI, Object Oriented Design</p>
          </div>
          <div className='row'>
            <p className='col-lg-3 col-md-4 col-sm-6'>Activities</p>
            <p className='col-lg-9 col-md-8 col-sm-6'>Graduate Teaching Assistant for Discrete and Data Structures (Spring 2019) and Algorithms/Computer Systems (Summer 2019)</p>
          </div>
        </div>
        </div>
        </td>
        </tr>

        <tr>
          <td>
        <div className='row  edu-item'>
        <div className='col-lg-2'>
          <img src={UDSeal} className='edu-image'></img>
        </div>
        <div className='col-lg-10 edu-text'>
        <div className='row justify-content-left'>
          <h3 className='col-lg-8 col-md-6'>University of Delaware</h3>
          <h6 className='col-lg-4 col-md-6 text-right'>May 2014</h6>
        </div>
        <div className='row'>
          <h6 className='col-12'><i>Bachelor of Science in Management Information Systems</i></h6>
        </div>
        <div className='row'>
          <p className='col-lg-3 col-md-4 col-sm-6'>Relevant Courses</p>
          <p className='col-lg-9 col-md-8 col-sm-6'>Web Design, Database Design & Implementation, Systems Analysis and Implementation</p>
        </div>
        <div className='row'>
          <p className='col-lg-3 col-md-4 col-sm-6'>Activities</p>
          <p className='col-lg-9 col-md-8 col-sm-6'>Captain of Men’s Swim Team, Member of Student Athlete Advisory Council, Member of Sigma Nu Fraternity</p>
        </div>
      </div>
      </div>
        </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
    )
  }
}
export default Education
