import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    return (
      <div className="intro-section text-center fill">
        <div className="container">
          <h1 className="top-header">Hi, I'm William Gray</h1>
          <hr className="intro-line"/>
          <span className="homepage-caret animated bounceInUp" style={{'animationDuration': '1.7s'}}></span>
        </div>
      </div>
    )
  }
}