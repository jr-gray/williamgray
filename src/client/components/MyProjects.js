import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class MyProjects extends Component {
  render() {
    return (
      <div id="projects" className="container-fluid projects-section section-margin">
        <div className="row section-header">
          <h2 className="text-center">My Projects</h2>
          <hr className="hr-light"/>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <a href="http://www.woolfey.com">
          <div className="col-md-6 text-center project-link">
            <h3>Woolfey</h3>
            <img className="project-image" src='/images/woolfey.png' />
            <ListGroup>
              <ListGroupItem>React</ListGroupItem>
              <ListGroupItem>Node</ListGroupItem>
              <ListGroupItem>Express</ListGroupItem>
              <ListGroupItem>Redis</ListGroupItem>
              <ListGroupItem>AWS RDS Postgres</ListGroupItem>
              <ListGroupItem>Highcharts</ListGroupItem>
            </ListGroup>
          </div>
          </a>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <a href="https://www.github.com/jr-gray/syrup">
          <div className="col-md-6 text-center project-link">
            <h3>Syrup</h3>
            <img className="project-image" src='/images/syrup.png' />
            <ListGroup>
              <ListGroupItem>React</ListGroupItem>
              <ListGroupItem>Node</ListGroupItem>
              <ListGroupItem>Express</ListGroupItem>
              <ListGroupItem>Kairos Facial Recognition</ListGroupItem>
              <ListGroupItem>Postgres</ListGroupItem>
              <ListGroupItem>Auth0</ListGroupItem>
            </ListGroup>
          </div>
          </a>
          <div className="col-md-3"></div>
        </div>
      </div>
    )
  }
}