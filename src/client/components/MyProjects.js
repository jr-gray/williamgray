import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import WoolfeyCarousel from './WoolfeyCarousel';
import SyrupCarousel from './SyrupCarousel';

export default class MyProjects extends Component {
  render() {
    return (
      <div id="projects" className="container section-margin">
        <div className="row project-div">
          <span className="top-header">Woolfey</span>
          <p className="my-project">Cryptocurrency trading simulator with
            machine learning models.</p>
        </div>  
        <div className="row project-entry">
          <a href="http://www.woolfey.com">
            <WoolfeyCarousel />
          </a>
        </div>
        <div className="row project-div">
          <span className="top-header">Syrup</span>
          <p className="my-project">Facial Recognition dating app.</p>
        </div> 
        <div className="row project-entry">
          <a href="https://www.github.com/jr-gray/syrup">
            <SyrupCarousel />
          </a>
        </div>
      </div>
    )
  }
}