import React, { Component } from 'react';

export default class MyProjects extends Component {
  render() {
    return (
      <div className="container">
        <h2>My Projects</h2>
        <div className="row">
          <div className="col-xs-4">
            <a href="http://www.woolfey.com"><img src='/images/woolfey.png' 
              width="500" /></a>
            <a href="https://www.github.com/jr-gray/syrup"><img src='/images/syrup.png' 
              width="500" /></a>
          </div>
        </div>
      </div>
    )
  }
}