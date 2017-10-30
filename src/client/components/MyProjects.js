import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import WoolfeyCarousel from './WoolfeyCarousel';
import SyrupCarousel from './SyrupCarousel';

export default class MyProjects extends Component {
  render() {
    return (
      <div id="projects" className="container"> 
        <div className="row">
          <div className="col-md-6">
            <div className="profileCard">
            <a href="http://www.woolfey.com">
              <WoolfeyCarousel />
              <hr className="hr-padding"/>
              <div className="profileContainer">
                <h2 className="card-header">Woolfey</h2>
                <p className="card-info">Woolfey is a web app that allows you to practice trading 
                  cryptocurrencies like Bitcoin, Ethereum, and more. You can create up to three portfolios 
                  each with $100,000, practice different investment strategies, and even follow our
                  machine learning algorithms for currency trend predictions. Track your performance
                  over time with our interactive charts and leaderboards!
                </p>
                <p className="card-info">
                  Tech: React, Node, Express, Flask, Pandas, Redis, Cron, AWS, RDS Postgres, NGINX, bcrypt
                </p>
                <hr />
                <div className="row">
                  <div className="col-md-6">
                    <img className="project-icon" src="/images/globe.png" height="25" width="25" /><span className="project-link"> woolfey.com</span>
                  </div>
                  <div className="col-md-6">
                    <img className="project-icon" src="/images/github-logo.svg" height="25" width="25" /><span className="project-link"> jr-gray/woolfey</span>
                  </div>
                </div>
              </div>
            </a>
            </div>
          </div>

          <div className="col-md-6">
            <div className="profileCard">
            <a href="https://www.github.com/jr-gray/syrup">
              <SyrupCarousel />
              <hr className="hr-padding"/>
              <div className="profileContainer">
                <h2 className="card-header">Syrup</h2>
                <p className="card-info">Syrup is a social app that uses facial recognition 
                  technology to connect you with potential matches.
                  Just upload a photo of your celebrity crush, and Syrup will return a list
                  of users that most closely resemble that person. You can then request to connect with anyone
                  from that list, and if they accept, the two of you can start chatting!</p>
                <p className="card-info">
                  Tech: React, Node, Express, Kairos, Auth0, Dropzone.js, Socket.io, bootstrap
                </p>
                <hr />
                <img src="/images/github-logo.svg" height="25" width="25" /><span className="project-link"> jr-gray/syrup</span>
              </div>
            </a>
            </div>
          </div>
        </div>
      </div>      
    )
  }
}