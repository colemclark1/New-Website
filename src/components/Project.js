import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Collapse from 'react-bootstrap/Collapse'
import Badge from 'react-bootstrap/Badge'
import '../CSS/Projects.css'


class Project extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayDetails: false
    }
  }

  clickDetails = () => {
    this.setState({
      displayDetails: !this.state.displayDetails
    })
  }

render() {
  return (
    <div className='outer-card mr-5 projects-font'>
      <Card className='cards-change-font ' bg="light" text="dark" >
        <div className='row justify-content-center align-middle'><Card.Header className='mb-0 col-12'><Card.Title className='row justify-content-center'>{this.props.project.title}</Card.Title></Card.Header></div>
        <Card.Img variant="top" src={this.props.project.image} className='images' style={{ minHeight: '10rem', maxHeight: '20rem'}} />
        <Card.Body>

          <div className='row justify-content-center'>{this.props.project.deployed !== '' && <Card.Link href={this.props.project.deployed}>Deployed Project</Card.Link>}</div>
          <div className='row justify-content-center'>{this.props.project.github !== '' && <Card.Link href={this.props.project.github}>Project on Github</Card.Link>}</div>
          <div className='row justify-content-center'>{this.props.project.kaggle !== '' && <Card.Link href={this.props.project.github}>Project Data on Kaggle</Card.Link>}</div>
          <div className='row justify-content-center wrap-text'>
          {this.props.project.tags.map((tag, i) => <h6 key={i}><Badge className='mr-2 mt-1' pill variant="primary">{tag}</Badge></h6>)}
          </div>

          <div className='row justify-content-center'>
          {!this.state.displayDetails &&
          <button onClick={this.clickDetails}  aria-expanded={false} className='btn details-button justify-content-center'><i className="fa fa-angle-double-down"></i>
          </button>}

          {this.state.displayDetails && <button onClick={this.clickDetails} aria-expanded={true} className='btn details-button justify-content-center'><i className="fa fa-angle-double-up"></i>
          </button>}

          <Collapse in={this.state.displayDetails}>
          <Card.Text>
            {this.props.project.textShort}
          </Card.Text>
        </Collapse>
        </div>
        </Card.Body>
      </Card>
      </div>
    )
  }
}
export default Project
