import React, { Component } from 'react';
// const woolfeyImage = require('/images/woolfey.png');
// const syrupImage = require('/images/syrup.png');

export default class MyProjects extends Component {
  render() {
    return (
      <div>
        <h2>My Projects</h2>
        <br/>
        <a href="http://www.woolfey.com"><img src='/images/woolfey.png' 
          width="500" /></a>
        <br/>
        <a href="https://www.github.com/jr-gray/syrup"><img src='/images/syrup.png' 
          width="500"/></a>
      </div>
    )
  }
}