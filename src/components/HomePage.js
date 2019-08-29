import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import '../CSS/HomePage.css'
import Projects from './Projects'
import Contact from './Contact'
import Education from './Education'
import About from './About'
import Main from './Main'
import NavBar from './NavBar'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      home: true
    }
  }

  onHomePage = (isTrue) => {
    this.setState ({
      home: isTrue
    })
  }


  render() {
    return (
      <div className='homepage-bg change-font'>
        <Router>
          {!this.state.home && <NavBar />}
            <Route path='/'exact
              render={(props) => <Main onHomePage={this.onHomePage} />} />
            <Route path='/about' exact
              render={(props) => <About onHomePage={this.onHomePage}/>} />
            <Route path='/projects'exact
              render={(props) => <Projects onHomePage={this.onHomePage}/>} />
            <Route path='/contact'exact
              render={(props) => <Contact onHomePage={this.onHomePage}/>} />
            <Route path='/education'exact
              render={(props) => <Education onHomePage={this.onHomePage}/>} />
        </Router>
      </div>
    )
  }
}

export default HomePage;
