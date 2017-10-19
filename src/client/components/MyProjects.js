import React, { Component } from 'react';

export default class MyProjects extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2 className="section-header text-center">My Projects</h2>
        </div>
        <div className="row">
          <div className="col-xs-6 text-center">
            <a href="http://www.woolfey.com"><img src='/images/woolfey.png' 
              width="500" /></a>
          </div>
          <div className="col-xs-6 text-center">
            <a href="https://www.github.com/jr-gray/syrup"><img src='/images/syrup.png' 
              width="500" /></a>
          </div>
        </div>
      </div>
    )
  }
}