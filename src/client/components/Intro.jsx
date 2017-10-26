import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    return (
      <div className="fill">
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10 intro-section">
              <h1 className="top-header">William Gray</h1>
              {/* <hr className="line-style"/> */}
              <div className="about-section">
                <p>Software engineer with a passion for developing intuitive 
                    and scalable user-facing apps.</p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
          <span className="homepage-caret animated bounceInUp" style={{'animationDuration': '1.7s'}}></span>
        </div>
      </div>
    )
  }
}