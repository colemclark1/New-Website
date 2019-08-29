import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Slideshow = () =>
<Carousel>
  <Carousel.Item  className='carousel-item justify-content-center'>
    <img
      className="d-inline picture-size"
      src={require('../images/Me.jpeg')}

    />
  </Carousel.Item>
  <Carousel.Item className='carousel-item justify-content-center'>
    <img
      className="d-inline picture-size"
      src={require('../images/Swim.jpg')}
      />
  </Carousel.Item>
  <Carousel.Item className='carousel-item justify-content-center'>
    <img
      className="d-inline picture-size"
      src={require('../images/ATV.JPG')}
      />
  </Carousel.Item>
  <Carousel.Item className='carousel-item justify-content-center'>
    <img
      className="d-inline picture-size"
      src={require('../images/Utah.jpg')}
      />
  </Carousel.Item>
</Carousel>


export default Slideshow
