import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    return (
      <div className="intro-section text-center fill">
        <div className="container">
          <div className="row">
            <h1 className="top-header">Hi, I'm William Gray.</h1>
            <hr className="line-style"/>
          </div>
          <div className="row about-section">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <span>
                <p>I'm a software engineer with a passion for developing intuitive 
                  and scalable user-facing apps. Some of my favorite technologies are JavaScript (ES6), Python, 
                  SQL, React + Redux, Node, Express, PostgreSQL, 
                  MySQL, CSS3 + SASS, HTML5, Bootstrap, Redis, and AWS.</p>
              </span>
            </div>
            <div className="col-md-2"></div>
          </div>
          <span className="homepage-caret animated bounceInUp" style={{'animationDuration': '1.7s'}}></span>
        </div>
      </div>
    )
  }
}