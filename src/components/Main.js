import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import '../CSS/Main.css'



class Main extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.onHomePage(true);
  }

render() {
  return (
          <div className='row main'>
          <div className='text-center col-xl-4 col-lg-5 col-md-6 col-7 tag'>
            <h1 className='cursive-font heading-size'>Cole Clark</h1>
            <h3 className='regular-font'>Software Engineer</h3>
            <div className='justify-content-center row'>
              <Link to='/about' className="nav-link"><p className='main-item'>About</p></Link>
              <Link to='/projects' className="nav-link"><p className='main-item'>Projects</p></Link>
              <Link to='/experience' className="nav-link"><p className='main-item'>Experience</p></Link>
              <Link to='/education' className="nav-link"><p className='main-item'>Education</p></Link>
              <Link to='/contact' className="nav-link"><p className='main-item'>Contact</p></Link>
            </div>
            <div className='justify-content-center row row-links'>
              <a href="https://www.linkedin.com/in/coleclark1/" target="_blank" rel="noopener noreferrer" className='social mx-4'><i className="fa fa-linkedin fa-3x"></i></a>
              <a href="mailto:colemclark1@gmail.com" className="social mx-4"><i className="fa fa-envelope fa-3x"></i></a>
              <a href="https://github.com/colemclark1" target="_blank" rel="noopener noreferrer" className='social mx-4'><i className="fa fa-github-square fa-3x"></i></a>
            </div>
          </div>
          <div className='col-xl-8 col-lg-7 col-5 col-md-6 pic'>
          </div>
        </div>

    )
  }
}
export default Main
