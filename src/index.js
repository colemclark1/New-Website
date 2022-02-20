import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './components/HomePage'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css'

ReactDOM.render(
  <div className='index'>
  <link href="https://fonts.googleapis.com/css?family=Courgette|Permanent+Marker" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"/>
  <HomePage />
  </div>,
  document.getElementById("root")
);
