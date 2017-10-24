import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import WoolfeyCarousel from './WoolfeyCarousel';
import SyrupCarousel from './SyrupCarousel';

export default class MyProjects extends Component {
  render() {
    return (
      <div id="projects" className="container section-margin text-center">
        <div className="row">
          <h1>Projects</h1>
          <hr />
        </div>  
        <a href="http://www.woolfey.com">
          <div className="row">
            <WoolfeyCarousel />
          </div>
        </a>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <a href="https://www.github.com/jr-gray/syrup">
          <div className="row">
            <SyrupCarousel />
          </div>
        </a>
      </div>
    )
  }
}