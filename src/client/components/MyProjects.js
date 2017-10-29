import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import WoolfeyCarousel from './WoolfeyCarousel';
import SyrupCarousel from './SyrupCarousel';

export default class MyProjects extends Component {
  render() {
    return (
      <div id="projects" className="container section-margin">
        <div className="row">
          <span className="top-header">Projects</span>
        </div>  
        <div className="row">
          <div className="col-md-6">
            <div className="profileCard">
            <a href="http://www.woolfey.com">
              <WoolfeyCarousel />
              <div className="profileContainer">
                <h2 className="card-header">Woolfey</h2>
                <p className="card-info">Cryptocurrency trading simulator with machine learning models.</p>
                <img className="project-icon" src="/images/globe.png" height="30" width="30" /><span className="project-link"> woolfey.com</span>
                <img className="project-icon" src="/images/github-logo.svg" height="30" width="30" /><span className="project-link"> jr-gray/woolfey</span>
              </div>
            </a>
            </div>
          </div>

          <div className="col-md-6">
            <div className="profileCard">
            <a href="https://www.github.com/jr-gray/syrup">
              <SyrupCarousel />
              <div className="profileContainer">
                <h2 className="card-header">Syrup</h2>
                <p className="card-info">Facial Recognition dating app.</p>
                <img src="/images/github-logo.svg" height="30" width="30" /><span className="project-link"> jr-gray/syrup</span>
              </div>
            </a>
            </div>
          </div>
        </div>
      </div>      
    )
  }
}