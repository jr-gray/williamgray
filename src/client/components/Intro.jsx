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
              <div className="about-section">
                <p>I'm a Software Engineer.</p>
                <p>Officially, my job is to design intuitive 
                    and scalable user-facing apps.</p>
                <p>That basically means I get to make art, whether it's a beautiful and simple 
                  interface, or a full-stack system working in perfect harmony. 
                </p>
              </div>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Name + Email" />
                  <button type="submit" className="btn btn-default intro-btn">Send</button>
                </div>
              </form>
            </div>
            <div className="col-md-1"></div>
          </div>
          <span className="homepage-caret animated bounceInUp" style={{'animationDuration': '1.7s'}}></span>
        </div>
      </div>
    )
  }
}