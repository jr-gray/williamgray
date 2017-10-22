import React, { Component } from 'react';

export default class AboutMe extends Component {
  render() {
    return (
      <div id="about" className="container-fluid section-margin">
        <div className="row section-header">
          <h2 className="text-center">About Me</h2>
          <hr className="hr-dark"/>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5 text-center bottom-padding">
            <img className="image-theme" src="/images/cookieResize.jpg"/>
          </div>
          <div className="col-md-5 text-center bottom-padding">
            <span>
              <p>I'm a software engineer with a passion for designing and building full stack apps. 
              I've been developing software for five years, both personally and professionally.</p> 
            
              <p>My latest project is a web app that allows users to practice investing in 
              cryptocurrencies like Bitcoin and track their performance over time. It's a great 
              introduction to the volatile cryptocurrency market. Check it out 
              at http://www.woolfey.com!</p>
            
              <p>Tech (advanced): JavaScript (ES6), Python, SQL, React + Redux, Angular 4, 
              Node.js, Express.js, TypeScript, MongoDB, PostgreSQL, MySQL, CSS3 + LESS/SASS, 
              HTML5, Bootstrap.js, jQuery, Redis.</p>
            
              <p>Tech (experienced): AWS (Amazon Web Services), EC2, S3, Django, Flask, 
              Cron, Docker.</p>
            
              <p>Check out my projects below, and find the code 
              at https://www.github.com/jr-gray.</p>
            </span>
          </div>
          <div className="col-md-1"></div>
        </div>
        
      </div>
    )
  }
}