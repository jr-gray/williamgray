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
              <WoolfeyCarousel />
              <div className="profileContainer">
                <h2 className="top-header">Woolfey</h2>
                <p>Cryptocurrency trading simulator with machine learning models.</p>
                <a href="http://www.woolfey.com"><button className="cardButton">woolfey.com</button></a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="profileCard">
              <SyrupCarousel />
              <div className="profileContainer">
                <h2 className="top-header">Syrup</h2>
                <p>Facial Recognition dating app.</p>
                <a href="https://www.github.com/jr-gray/syrup"><button className="cardButton">Syrup code</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>      
    )
  }
}