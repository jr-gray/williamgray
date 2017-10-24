import React, { Component } from 'react';

export default class AboutMe extends Component {
  render() {
    return (
      <div id="about" className="container-fluid section-margin">
        <div className="row section-header text-center">
          <span>About Me</span>
          <hr className="line-style"/>
        </div>
        <div className="row about-section">
          <div className="col-md-3"></div>
          <div className="col-md-6 bottom-padding">
            <span>
              <p>I'm a software engineer with a passion for developing intuitive 
                and scalable user-facing apps. I've been developing applications 
                for 5 years, 4 of which were at Encore Capital Group, where I 
                designed data transportation software in Python and SQL.</p>
              
              <p>Some of my favorite technologies are JavaScript (ES6), Python, 
                SQL, React + Redux, Angular 4, Node, Express, MongoDB, PostgreSQL, 
                MySQL, CSS3 + SASS, HTML5, Bootstrap, Redis, AWS (Amazon Web Services), 
                EC2, S3, Django, Flask, Cron, NGINX, and Docker.</p>
            </span>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    )
  }
}