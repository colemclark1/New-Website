import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./Project/Projects";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import About from "./About/About";
import Main from "./Home/Home";
import NavBar from "./Navbar/NavBar";
import "./App.css";

const App = () => {
  return (
    <div className="homepage-bg change-font">
      <Router basename={`${process.env.PUBLIC_URL}`}>
        <Switch>
          <Route path="/" exact render={() => <Main />} />
          <>
            <NavBar />
            <Route path="/about" exact render={() => <About />} />
            <Route path="/projects" exact render={() => <Projects />} />
            <Route path="/contact" exact render={() => <Contact />} />
            <Route path="/education" exact render={() => <Education />} />
            <Route path="/experience" exact render={() => <Experience />} />
          </>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
