import React, { Component } from 'react';

export default class AboutMe extends Component {
  render() {
    return (
      <div id="about" className="container-fluid technologies text-center">
        <div className="technologies-width">
          <div className="row">
            <div className="col-sm-4">
              <div className="tech-entry">
                JavaScript (ES6)
              </div>
            </div>
            <div className="col-sm-4">
              <div className="tech-entry">
                Python
              </div>
            </div>
            <div className="col-sm-4">
              <div className="tech-entry">
                React + Redux
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="tech-entry">
                Node.js
              </div>
            </div>
            <div className="col-sm-4">
              <div className="tech-entry">
                Angular 4
              </div>
            </div>
            <div className="col-sm-4">
              <div className="tech-entry">
                Redis
              </div>
            </div>
          </div> 
          <div className="row">
            <div className="col-sm-4">
              <div className="tech-entry">
                Express
              </div>
            </div>
            <div className="col-sm-4">
              <div className="tech-entry">
                MongoDB
              </div>
            </div>
            <div className="col-sm-4">
              <div className="tech-entry">
                PostgreSQL
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="tech-entry">
                MySQL
              </div>
            </div>
            <div className="col-sm-4">
              <div className="tech-entry">
                Django
              </div>
            </div>
            <div className="col-sm-4">
              <div className="tech-entry">
                AWS
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="tech-entry">
                CSS3 + SASS
              </div>
            </div>
            <div className="col-sm-4">
              <div className="tech-entry">
                HTML5
              </div>
            </div>
            <div className="col-sm-4">
              <div className="tech-entry">
                Bootstrap
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}